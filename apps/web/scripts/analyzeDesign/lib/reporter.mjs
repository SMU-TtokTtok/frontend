import { b, r, y, g, cy, d, m } from '../../lib/ansi.mjs';

function renderAstNode(node, indent = 0) {
  if (!node || typeof node !== 'object') return;
  const pad = '  '.repeat(indent);
  const loc = node.loc ? d(` [${node.loc.start.line}:${node.loc.start.column}]`) : '';
  let label = cy(node.type) + loc;

  if (node.type === 'Identifier') label += '  ' + b(node.name);
  if (node.type === 'StringLiteral') label += '  ' + r(`"${node.value}"`);
  if (node.type === 'NumericLiteral') label += '  ' + g(String(node.value));
  console.log(`${pad}${label}`);

  if (node.type === 'ObjectProperty') {
    renderAstNode(node.key, indent + 1);
    renderAstNode(node.value, indent + 1);
  }
  if (node.type === 'ObjectExpression') {
    console.log(`${pad}  ${d(`{ ${node.properties.length}개 프로퍼티 }`)}`);
  }
}

export function printHit(hit, showAst = false) {
  const locLabel = d(`${String(hit.line).padStart(4)}:${String(hit.col).padStart(2)}`);
  const kindLabel = hit.token ? g('[KNOWN]') : y('[UNKNOWN]');
  const exportLabel = hit.exportName ? m(`  ← ${hit.exportName}`) : '';

  console.log(
    `  ${locLabel}  ${kindLabel}  ${cy(hit.propKey)}: ${r(`'${hit.rawValue}'`)}${exportLabel}`,
  );
  console.log(`${d('path:')} ${hit.parentTypes.join(' > ')} > ObjectProperty`);

  if (hit.token) {
    console.log(`${g('→ token:')} ${g(hit.token)}`);
  } else {
    console.log(`${y('→ 대응 토큰 없음')} (theme.css.ts에 없는 색상)`);
  }

  if (showAst) {
    console.log(`${d('── AST ──')}`);
    renderAstNode(hit.astNode, 4);
  }

  console.log();
}
