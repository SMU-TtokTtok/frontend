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
    if (node.source.value !== THEME_IMPORT_SOURCE) continue;
    themeImportNode = node;
    hasVars = node.specifiers.some(
      (s) => s.type === 'ImportSpecifier' && s.imported?.name === 'vars',
    );
  }

  if (hasVars) return null;

  if (themeImportNode) {
    const firstNamedSpec = themeImportNode.specifiers.find((s) => s.type === 'ImportSpecifier');
    if (firstNamedSpec) {
      return { start: firstNamedSpec.start, end: firstNamedSpec.start, text: 'vars, ' };
    }
    return {
      start: themeImportNode.end,
      end: themeImportNode.end,
      text: `\nimport { vars } from '${THEME_IMPORT_SOURCE}';`,
    };
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
