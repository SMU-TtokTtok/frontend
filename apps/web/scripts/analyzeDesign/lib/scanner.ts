import _traverse from '@babel/traverse';
import type { NodePath } from '@babel/traverse';
import type {
  Identifier,
  Node,
  ObjectProperty,
  StringLiteral,
  VariableDeclarator,
} from '@babel/types';
import path from 'path';
import { CSS_NAMED_HEX, collectColor, normalizeColor } from '../../lib/color-utils';
import { y } from '../../lib/ansi';
import { parseFile } from '../../lib/parse';

const traverse = (_traverse as unknown as { default: typeof _traverse }).default ?? _traverse;

const MAX_PARENT_DEPTH = 5;

export interface Hit {
  line: number;
  col: number;
  propKey: string;
  rawValue: string;
  normalized: string;
  token: string | null;
  kind: 'NAMED' | 'COLOR';
  astNode: Node;
  parentTypes: string[];
  exportName: string | null;
}

interface StringProperty {
  valueNode: StringLiteral;
  keyName: string;
  raw: string;
}

interface ColorResolution {
  normalized: string;
  token: string | null;
}

export function scanFile(filePath: string, tokenMap: Map<string, string>, ROOT: string): Hit[] {
  let ast;
  try {
    ast = parseFile(filePath);
  } catch (e) {
    console.warn(`${y('PARSE ERROR')} ${path.relative(ROOT, filePath)}: ${(e as Error).message}`);
    return [];
  }

  const hits: Hit[] = [];

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

function extractStringProperty(node: ObjectProperty): StringProperty | null {
  if (node.value.type !== 'StringLiteral') return null;
  const keyName =
    node.key.type === 'Identifier'
      ? (node.key as Identifier).name
      : (node.key as StringLiteral).value;
  return {
    valueNode: node.value as StringLiteral,
    keyName,
    raw: (node.value as StringLiteral).value,
  };
}

function resolveColorHit(
  { valueNode, keyName, raw }: StringProperty,
  tokenMap: Map<string, string>,
  nodePath: NodePath<ObjectProperty>,
): Hit | null {
  const namedColorHit = resolveAsNamedColor(raw, tokenMap);
  if (namedColorHit) {
    return makeHit(
      valueNode,
      keyName,
      raw,
      namedColorHit.normalized,
      namedColorHit.token,
      'NAMED',
      nodePath,
    );
  }

  const hexColorHit = resolveAsHexColor(raw, tokenMap);
  if (hexColorHit) {
    return makeHit(
      valueNode,
      keyName,
      raw,
      hexColorHit.normalized,
      hexColorHit.token,
      'COLOR',
      nodePath,
    );
  }

  return null;
}

function resolveAsNamedColor(raw: string, tokenMap: Map<string, string>): ColorResolution | null {
  const namedHex = CSS_NAMED_HEX.get(raw.toLowerCase());
  if (!namedHex) return null;

  const normalized = namedHex.toUpperCase();
  return { normalized, token: tokenMap.get(normalized) ?? null };
}

function resolveAsHexColor(raw: string, tokenMap: Map<string, string>): ColorResolution | null {
  if (!collectColor(raw)) return null;

  const normalized = normalizeColor(raw);
  return { normalized, token: tokenMap.get(normalized) ?? null };
}

function makeHit(
  valueNode: StringLiteral,
  propKey: string,
  rawValue: string,
  normalized: string,
  token: string | null,
  kind: 'NAMED' | 'COLOR',
  nodePath: NodePath<ObjectProperty>,
): Hit {
  return {
    line: valueNode.loc!.start.line,
    col: valueNode.loc!.start.column,
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

function collectParentTypes(nodePath: NodePath): string[] {
  const chain: string[] = [];
  let cur = nodePath.parentPath;
  let depth = 0;
  while (cur && depth < MAX_PARENT_DEPTH) {
    chain.unshift(cur.node.type);
    cur = cur.parentPath;
    depth++;
  }
  return chain;
}

function isNamedDeclarator(node: Node): node is VariableDeclarator & { id: Identifier } {
  return (
    node.type === 'VariableDeclarator' && (node as VariableDeclarator).id?.type === 'Identifier'
  );
}

function findExportName(nodePath: NodePath): string | null {
  let cur: NodePath | null = nodePath;
  while (cur) {
    if (isNamedDeclarator(cur.node)) return cur.node.id.name;
    cur = cur.parentPath;
  }
  return null;
}
