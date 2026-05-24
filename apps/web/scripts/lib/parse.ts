import { parse } from '@babel/parser';
import type { File } from '@babel/types';
import { readFileSync } from 'fs';

export function parseFile(filePath: string): File {
  const code = readFileSync(filePath, 'utf-8');
  return parse(code, {
    sourceType: 'module',
    plugins: ['typescript', 'jsx'],
  }) as File;
}
