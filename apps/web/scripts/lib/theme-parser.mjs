import _traverse from '@babel/traverse';
import { parseFile } from './parse.mjs';

const traverse = _traverse.default ?? _traverse;

function isCreateGlobalTheme(callNode) {
  const callee = callNode.callee;
  return callee.type === 'Identifier' && callee.name === 'createGlobalTheme';
}

function isColorsKey(key) {
  return (
    (key.type === 'Identifier' && key.name === 'colors') ||
    (key.type === 'StringLiteral' && key.value === 'colors')
  );
}

function buildTokenPath(pathParts) {
  return 'vars.colors.' + pathParts.join('.');
}

function extractColorsNode(callNode) {
  const themeArg = callNode.arguments[2];
  if (!themeArg || themeArg.type !== 'ObjectExpression') return null;

  const colorsProp = themeArg.properties.find(
    (p) =>
      p.type === 'ObjectProperty' &&
      isColorsKey(p.key.type === 'Identifier' ? p.key.name : p.key.value),
  );

  return colorsProp?.value?.type === 'ObjectExpression' ? colorsProp.value : null;
}

function collectColorTokens(objNode, ancestorPath, tokenMap) {
  for (const prop of objNode.properties) {
    if (prop.type !== 'ObjectProperty') continue;

    const key = prop.key.type === 'Identifier' ? prop.key.name : prop.key.value;
    const currentPath = [...ancestorPath, key];

    if (prop.value.type === 'StringLiteral') {
      const hexValue = prop.value.value.trim().toUpperCase();
      tokenMap.set(hexValue, buildTokenPath(currentPath));
    } else if (prop.value.type === 'ObjectExpression') {
      collectColorTokens(prop.value, currentPath, tokenMap);
    }
  }
}

export function extractThemeColorMap(themeFilePath) {
  const tokenMap = new Map();

  let ast;
  try {
    ast = parseFile(themeFilePath);
  } catch (e) {
    console.error(`theme.css.ts 파싱 실패: ${e.message}`);
    process.exit(1);
  }

  traverse(ast, {
    CallExpression(nodePath) {
      if (!isCreateGlobalTheme(nodePath.node)) return;

      const colorsNode = extractColorsNode(nodePath.node);
      if (!colorsNode) return;

      collectColorTokens(colorsNode, /* ancestorPath= */ [], tokenMap);
    },
  });

  return tokenMap;
}
