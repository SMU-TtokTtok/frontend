import { parse } from '@babel/parser';
import { readFileSync } from 'fs';

export function parseFile(filePath) {
  const code = readFileSync(filePath, 'utf-8');
  return parse(code, {
    sourceType: 'module',
    plugins: ['typescript', 'jsx'],
  });
}
