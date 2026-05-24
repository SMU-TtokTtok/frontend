/**
 * Codemod: 하드코딩된 색상 → 디자인 토큰 교체
 *
 * @babel/generator 없이 AST의 node.start / node.end offset으로 해당 문자열만 교체합니다.
 * → 불필요한 diff 없음, 포매팅 유지, lint 규칙 유지
 *
 * 대상: [KNOWN] 항목만 (theme.css.ts에 대응 토큰이 존재하는 것)
 *
 * 사용법:
 *   tsx scripts/codemode/index.ts                     → dry-run (기본)
 *   tsx scripts/codemode/index.ts --apply             → 실제 파일 수정
 *   tsx scripts/codemode/index.ts --file src/...      → 단일 파일
 *   tsx scripts/codemode/index.ts --file src/... --apply
 */

import { readFileSync, writeFileSync } from 'fs';
import { globSync } from 'glob';
import path from 'path';
import { fileURLToPath } from 'url';

import { b, r, g, y, d } from '../lib/ansi';
import { extractThemeColorMap } from '../lib/theme-parser';
import { parseFile } from '../lib/parse';
import { collectHits } from './lib/collector';
import { buildReplacement, buildImportPatch, applyPatches } from './lib/transformer';
import { printDiff } from './lib/reporter';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '../..');
const THEME_FILE = path.resolve(ROOT, 'src/common/styles/theme.css.ts');

// ─── CLI ─────────────────────────────────────────────────────────────────────
const args = process.argv.slice(2);
const fileArg: string | null = args.includes('--file') ? args[args.indexOf('--file') + 1] : null;
const apply = args.includes('--apply');

// ─── 메인 ────────────────────────────────────────────────────────────────────
const tokenMap = extractThemeColorMap(THEME_FILE);
console.log(`\n${b('▶ 디자인 토큰')} ${d(`${tokenMap.size}개 로드`)}`);

if (!apply) {
  console.log(
    `${y('  dry-run 모드')} — 실제 파일은 변경되지 않습니다. 적용하려면 ${b(
      '--apply',
    )} 를 추가하세요.\n`,
  );
} else {
  console.log(`${r('  --apply 모드')} — 파일을 실제로 수정합니다.\n`);
}

const files = fileArg
  ? [path.isAbsolute(fileArg) ? fileArg : path.resolve(ROOT, fileArg)]
  : globSync('src/**/*.{ts,tsx}', {
      cwd: ROOT,
      absolute: true,
      ignore: ['**/node_modules/**', '**/.next/**', '**/theme.css.ts'],
    });

let totalFiles = 0;
let totalHits = 0;

for (const file of files) {
  const source = readFileSync(file, 'utf-8');
  let ast;
  try {
    ast = parseFile(file);
  } catch {
    console.warn(`${y('PARSE ERROR')} ${path.relative(ROOT, file)}`);
    continue;
  }

  const hits = collectHits(ast, tokenMap);
  if (hits.length === 0) continue;

  const importPatch = buildImportPatch(ast);
  const relPath = path.relative(ROOT, file);

  printDiff(relPath, hits, importPatch, source);

  totalFiles++;
  totalHits += hits.length;

  if (apply) {
    const colorPatches = hits.map((hit) => ({
      start: hit.node.start!,
      end: hit.node.end!,
      text: buildReplacement(hit.rawValue, hit.token),
    }));
    const allPatches = importPatch ? [...colorPatches, importPatch] : colorPatches;
    writeFileSync(file, applyPatches(source, allPatches), 'utf-8');
    console.log(`  ${g('✓ 저장됨')}\n`);
  }
}

// ─── 요약 ────────────────────────────────────────────────────────────────────
console.log('═'.repeat(64));
console.log(b('[ 결과 요약 ]'));
console.log(`  대상 파일: ${b(totalFiles + '개')}`);
console.log(`  교체 항목: ${b(totalHits + '건')}`);
if (!apply) {
  console.log(`\n  ${y('→ 실제 적용하려면:')} ${b('tsx scripts/codemode/index.ts --apply')}`);
  console.log(
    `  ${y('→ 단일 파일 적용:')} ${b('tsx scripts/codemode/index.ts --file src/... --apply')}`,
  );
}
console.log('═'.repeat(64));
