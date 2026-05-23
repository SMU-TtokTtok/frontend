const THEME_IMPORT_SOURCE = '@/common/styles/theme.css';

export function buildReplacement(rawValue, token) {
  if (/!important/i.test(rawValue)) return `\`\${${token}} !important\``;
  return token;
}

export function buildImportPatch(ast) {
  let themeImportNode = null;
  let hasVars = false;
  let lastImportEnd = 0;

  for (const node of ast.program.body) {
    if (node.type !== 'ImportDeclaration') continue;
    lastImportEnd = node.end;
    if (!node.source.value.includes('theme.css')) continue;
    themeImportNode = node;
    hasVars = node.specifiers.some((s) => s.type === 'ImportSpecifier' && s.local.name === 'vars');
  }

  if (hasVars) return null;

  if (themeImportNode) {
    const firstSpec = themeImportNode.specifiers[0];
    if (!firstSpec) return null;
    return { start: firstSpec.start, end: firstSpec.start, text: 'vars, ' };
  }

  return {
    start: lastImportEnd,
    end: lastImportEnd,
    text: `\nimport { vars } from '${THEME_IMPORT_SOURCE}';`,
  };
}

/**
 * offset 기반 패치를 뒤에서부터 적용해 앞 offset이 흔들리지 않도록 합니다.
 */
export function applyPatches(source, patches) {
  const sorted = [...patches].sort((a, b) => b.start - a.start);
  return sorted.reduce(
    (src, { start, end, text }) => src.slice(0, start) + text + src.slice(end),
    source,
  );
}
