import _traverse from '@babel/traverse';
import { CSS_NAMED_HEX, collectColor, normalizeColor } from '../../lib/color-utils.mjs';

const traverse = _traverse.default ?? _traverse;

export function collectHits(ast, tokenMap) {
  const hits = [];

  traverse(ast, {
    ObjectProperty(p) {
      const { value } = p.node;
      if (value.type !== 'StringLiteral') return;

      const raw = value.value;
      const namedHex = CSS_NAMED_HEX.get(raw.toLowerCase());

      if (namedHex) {
        const token = tokenMap.get(namedHex);
        if (!token) return;
        hits.push({ node: value, token, rawValue: raw, line: value.loc.start.line });
        return;
      }

      if (!collectColor(raw)) return;
      const token = tokenMap.get(normalizeColor(raw));
      if (!token) return;

      hits.push({ node: value, token, rawValue: raw, line: value.loc.start.line });
    },
  });

  return hits;
}
