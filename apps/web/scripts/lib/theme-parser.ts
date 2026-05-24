import _traverse from '@babel/traverse';
import type {
  CallExpression,
  Identifier,
  ObjectExpression,
  ObjectProperty,
  StringLiteral,
} from '@babel/types';
import { parseFile } from './parse';
import { normalizeColor } from './color-utils';

const traverse = (_traverse as unknown as { default: typeof _traverse }).default ?? _traverse;

function isCreateGlobalTheme(callNode: CallExpression): boolean {
  const callee = callNode.callee;
  return callee.type === 'Identifier' && (callee as Identifier).name === 'createGlobalTheme';
}

function isColorsKey(key: ObjectProperty['key']): boolean {
  return (
    (key.type === 'Identifier' && key.name === 'colors') ||
    (key.type === 'StringLiteral' && (key as StringLiteral).value === 'colors')
  );
}

function buildTokenPath(pathParts: string[]): string {
  return 'vars.colors.' + pathParts.join('.');
}

function extractColorsNode(callNode: CallExpression): ObjectExpression | null {
  const themeArg = callNode.arguments[2];
  if (!themeArg || themeArg.type !== 'ObjectExpression') return null;

  const colorsProp = (themeArg as ObjectExpression).properties.find(
    (p): p is ObjectProperty => p.type === 'ObjectProperty' && isColorsKey(p.key),
  );

  return colorsProp?.value?.type === 'ObjectExpression'
    ? (colorsProp.value as ObjectExpression)
    : null;
}

function collectColorTokens(
  objNode: ObjectExpression,
  ancestorPath: string[],
  tokenMap: Map<string, string>,
): void {
  for (const prop of objNode.properties) {
    if (prop.type !== 'ObjectProperty') continue;

    const op = prop as ObjectProperty;
    const key = op.key.type === 'Identifier' ? op.key.name : (op.key as StringLiteral).value;
    const currentPath = [...ancestorPath, key];

    if (op.value.type === 'StringLiteral') {
      const normalized = normalizeColor((op.value as StringLiteral).value);
      tokenMap.set(normalized, buildTokenPath(currentPath));
    } else if (op.value.type === 'ObjectExpression') {
      collectColorTokens(op.value as ObjectExpression, currentPath, tokenMap);
    }
  }
}

export function extractThemeColorMap(themeFilePath: string): Map<string, string> {
  const tokenMap = new Map<string, string>();

  let ast;
  try {
    ast = parseFile(themeFilePath);
  } catch (e) {
    console.error(`theme.css.ts 파싱 실패: ${(e as Error).message}`);
    process.exit(1);
  }

  traverse(ast, {
    CallExpression(nodePath) {
      if (!isCreateGlobalTheme(nodePath.node)) return;

      const colorsNode = extractColorsNode(nodePath.node);
      if (!colorsNode) return;

      collectColorTokens(colorsNode, [], tokenMap);
    },
  });

  return tokenMap;
}
