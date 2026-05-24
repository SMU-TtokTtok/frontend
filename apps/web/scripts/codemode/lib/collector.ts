import _traverse from '@babel/traverse';
import type { File, StringLiteral } from '@babel/types';
import { CSS_NAMED_HEX, collectColor, normalizeColor } from '../../lib/color-utils';

const traverse = (_traverse as unknown as { default: typeof _traverse }).default ?? _traverse;

export interface CollectorHit {
  node: StringLiteral;
  token: string;
  rawValue: string;
  line: number;
}

export function collectHits(ast: File, tokenMap: Map<string, string>): CollectorHit[] {
  const hits: CollectorHit[] = [];

  traverse(ast, {
    ObjectProperty(p) {
      const { value } = p.node;
      if (value.type !== 'StringLiteral') return;

      const raw = (value as StringLiteral).value;
      const namedHex = CSS_NAMED_HEX.get(raw.toLowerCase());

      if (namedHex) {
        const token = tokenMap.get(namedHex);
        if (!token) return;
        hits.push({
          node: value as StringLiteral,
          token,
          rawValue: raw,
          line: value.loc!.start.line,
        });
        return;
      }

      if (!collectColor(raw)) return;
      const token = tokenMap.get(normalizeColor(raw));
      if (!token) return;

      hits.push({
        node: value as StringLiteral,
        token,
        rawValue: raw,
        line: value.loc!.start.line,
      });
    },
  });

  return hits;
}
