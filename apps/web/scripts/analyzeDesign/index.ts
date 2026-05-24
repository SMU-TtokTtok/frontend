import { createWriteStream } from 'fs';
import { globSync } from 'glob';
import path from 'path';
import { fileURLToPath } from 'url';

import { b, g, y, d, cy, ANSI_RE } from '../lib/ansi';
import { extractThemeColorMap } from '../lib/theme-parser';
import { scanFile } from './lib/scanner';
import type { Hit } from './lib/scanner';
import { printHit } from './lib/reporter';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '../..');
const THEME_FILE = path.resolve(ROOT, 'src/common/styles/theme.css.ts');

const DIVIDER_THIN = '─'.repeat(60);
const DIVIDER_THIN_SHORT = '─'.repeat(50);
const DIVIDER_THICK = '═'.repeat(60);

// ─── CLI ─────────────────────────────────────────────────────────────────────

interface Args {
  fileArg: string | null;
  outputArg: string | null;
  showAst: boolean;
  onlyUnknown: boolean;
  onlyKnown: boolean;
}

function parseArgs(argv: string[]): Args {
  const args = argv.slice(2);
  return {
    fileArg: getArgValue(args, '--file'),
    outputArg: getArgValue(args, '--output'),
    showAst: args.includes('--ast'),
    onlyUnknown: args.includes('--unknown'),
    onlyKnown: args.includes('--known'),
  };
}

function getArgValue(args: string[], flag: string): string | null {
  const idx = args.indexOf(flag);
  return idx !== -1 ? args[idx + 1] : null;
}

// ─── 출력 스트림 ──────────────────────────────────────────────────────────────

function setupFileOutput(outputArg: string | null): void {
  if (!outputArg) return;

  const outPath = path.isAbsolute(outputArg) ? outputArg : path.resolve(process.cwd(), outputArg);
  const fileStream = createWriteStream(outPath, { encoding: 'utf-8' });

  const origLog = console.log.bind(console);
  console.log = (...parts: unknown[]) => {
    const line = parts.join(' ');
    origLog(line);
    fileStream.write(line.replace(ANSI_RE, '') + '\n');
  };

  process.on('exit', () => fileStream.end());
}

// ─── 스캔 대상 파일 ───────────────────────────────────────────────────────────

function resolveTargetFiles(fileArg: string | null): string[] {
  if (fileArg) {
    return [path.isAbsolute(fileArg) ? fileArg : path.resolve(ROOT, fileArg)];
  }
  return globSync('src/**/*.{ts,tsx}', {
    cwd: ROOT,
    absolute: true,
    ignore: ['**/node_modules/**', '**/.next/**', '**/theme.css.ts'],
  });
}

// ─── 출력 ────────────────────────────────────────────────────────────────────

function printTokenMap(tokenMap: Map<string, string>): void {
  console.log(`\n${b('▶ theme.css.ts 색상 맵 추출 중...')}`);
  console.log(`  ${g(tokenMap.size + '개')} 토큰 발견\n`);

  console.log(b('[ 디자인 토큰 목록 ]'));
  console.log(DIVIDER_THIN_SHORT);
  for (const [hex, token] of tokenMap) {
    console.log(`  ${d(hex.padEnd(12))}  →  ${cy(token)}`);
  }
  console.log();
}

function filterHits(
  hits: Hit[],
  { onlyKnown, onlyUnknown }: Pick<Args, 'onlyKnown' | 'onlyUnknown'>,
): Hit[] {
  if (onlyKnown) return hits.filter((h) => h.token !== null);
  if (onlyUnknown) return hits.filter((h) => h.token === null);
  return hits;
}

function formatFileSummary(known: number, unknown: number): string {
  return [known ? g(`known: ${known}`) : null, unknown ? y(`unknown: ${unknown}`) : null]
    .filter(Boolean)
    .join('  ');
}

function printFileHits(
  file: string,
  hits: Hit[],
  showAst: boolean,
): { known: number; unknown: number } {
  const known = hits.filter((h) => h.token !== null).length;
  const unknown = hits.filter((h) => h.token === null).length;

  console.log(`\n${b(path.relative(ROOT, file))}  ${d(`(${formatFileSummary(known, unknown)})`)}`);
  console.log(DIVIDER_THIN);

  for (const hit of hits) printHit(hit, showAst);

  return { known, unknown };
}

function printSummary(totalKnown: number, totalUnknown: number): void {
  console.log(DIVIDER_THICK);
  console.log(b('[ 결과 요약 ]'));
  console.log(
    `  ${g('[KNOWN]')}   테마 색상이 하드코딩된 곳: ${g(
      b(totalKnown + '건'),
    )}  → 토큰으로 교체 필요`,
  );
  console.log(
    `  ${y('[UNKNOWN]')} 테마에 없는 색상:           ${y(
      b(totalUnknown + '건'),
    )}  → 신규 토큰 추가 검토`,
  );
  console.log(DIVIDER_THICK);
  console.log(d('\nTip: --ast 플래그로 원시 AST 노드 구조를 함께 볼 수 있습니다.'));
  console.log(d('     --file src/... 로 특정 파일만 볼 수 있습니다.\n'));
}

// ─── 메인 ────────────────────────────────────────────────────────────────────

const { fileArg, outputArg, showAst, onlyKnown, onlyUnknown } = parseArgs(process.argv);

setupFileOutput(outputArg);

const tokenMap = extractThemeColorMap(THEME_FILE);
printTokenMap(tokenMap);

const files = resolveTargetFiles(fileArg);
console.log(b(`\n▶ ${files.length}개 파일 스캔 중...`));
console.log(DIVIDER_THIN);

let totalKnown = 0;
let totalUnknown = 0;

for (const file of files) {
  const rawHits = scanFile(file, tokenMap, ROOT);
  const hits = filterHits(rawHits, { onlyKnown, onlyUnknown });
  if (hits.length === 0) continue;

  const { known, unknown } = printFileHits(file, hits, showAst);
  totalKnown += known;
  totalUnknown += unknown;
}

printSummary(totalKnown, totalUnknown);
