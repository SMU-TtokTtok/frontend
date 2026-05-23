import _traverse from '@babel/traverse';
import path from 'path';
import { parseFile } from '../../lib/parse.mjs';
import { CSS_NAMED_HEX, collectColor, normalizeColor } from '../../lib/color-utils.mjs';
import { y } from '../../lib/ansi.mjs';

const traverse = _traverse.default ?? _traverse;

const MAX_PARENT_DEPTH = 5;

export function scanFile(filePath, tokenMap, ROOT) {
  let ast;
  try {
    ast = parseFile(filePath);
  } catch (e) {
    console.warn(`${y('PARSE ERROR')} ${path.relative(ROOT, filePath)}: ${e.message}`);
    return [];
  }

  const hits = [];

  traverse(ast, {
    ObjectProperty(nodePath) {
      const prop = extractStringProperty(nodePath.node);
      if (!prop) return;

      const hit = resolveColorHit(prop, tokenMap, nodePath);
      if (hit) hits.push(hit);
    },
  });

  return hits;
}

function extractStringProperty(node) {
  if (node.value.type !== 'StringLiteral') return null;
  const keyName = node.key.type === 'Identifier' ? node.key.name : node.key.value;
  return { valueNode: node.value, keyName, raw: node.value.value };
}

function resolveColorHit({ valueNode, keyName, raw }, tokenMap, nodePath) {
  const namedColorHit = resolveAsNamedColor(raw, tokenMap);
  if (namedColorHit) {
    return makeHit(valueNode, keyName, raw, namedColorHit.normalized, namedColorHit.token, 'NAMED', nodePath);
  }

  const hexColorHit = resolveAsHexColor(raw, tokenMap);
  if (hexColorHit) {
    return makeHit(valueNode, keyName, raw, hexColorHit.normalized, hexColorHit.token, 'COLOR', nodePath);
  }

  return null;
}

function resolveAsNamedColor(raw, tokenMap) {
  const namedHex = CSS_NAMED_HEX.get(raw.toLowerCase());
  if (!namedHex) return null;

  const normalized = namedHex.toUpperCase();
  return { normalized, token: tokenMap.get(normalized) ?? null };
}

function resolveAsHexColor(raw, tokenMap) {
  if (!collectColor(raw)) return null;

  const normalized = normalizeColor(raw);
  return { normalized, token: tokenMap.get(normalized) ?? null };
}

function makeHit(valueNode, propKey, rawValue, normalized, token, kind, nodePath) {
  return {
    line: valueNode.loc.start.line,
    col: valueNode.loc.start.column,
    propKey,
    rawValue,
    normalized,
    token,
    kind,
    astNode: nodePath.node,
    parentTypes: collectParentTypes(nodePath),
    exportName: findExportName(nodePath),
  };
}

function collectParentTypes(nodePath) {
  const chain = [];
  let cur = nodePath.parentPath;
  let depth = 0;
  while (cur && depth < MAX_PARENT_DEPTH) {
    chain.unshift(cur.node.type);
    cur = cur.parentPath;
    depth++;
  }
  return chain;
}

function isNamedDeclarator(node) {
  return node.type === 'VariableDeclarator' && node.id?.type === 'Identifier';
}

function findExportName(nodePath) {
  let cur = nodePath;
  while (cur) {
    if (isNamedDeclarator(cur.node)) return cur.node.id.name;
    cur = cur.parentPath;
  }
  return null;
}
