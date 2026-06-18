import { b, r, g, y, d } from '../../lib/ansi';
import { buildReplacement } from './transformer';
import type { CollectorHit } from './collector';
import type { Patch } from './transformer';

export function printDiff(
  relPath: string,
  hits: CollectorHit[],
  importPatch: Patch | null,
  source: string,
): void {
  const lines = source.split('\n');

  console.log(`\n${b(relPath)}`);
  console.log('─'.repeat(64));

  if (importPatch) {
    const importLine = source.slice(0, importPatch.start).split('\n').length;
    console.log(`  ${d(`line ${importLine}`)}  ${y('[import 추가]')}  ${g('+vars')}`);
  }

  for (const hit of hits) {
    const repl = buildReplacement(hit.rawValue, hit.token);
    const orig = lines[hit.line - 1]?.trim() ?? '';
    console.log(`  ${d(`line ${hit.line}`)}  ${r(`- '${hit.rawValue}'`)}`);
    console.log(`  ${d('       ')}  ${g(`+ ${repl}`)}`);
    console.log(`  ${d('       ')}  ${d(`context: ${orig}`)}`);
    console.log();
  }
}
