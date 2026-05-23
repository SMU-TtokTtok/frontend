export const CSS_NAMED_HEX = new Map([
  ['white', '#FFFFFF'],
  ['black', '#000000'],
  ['transparent', 'transparent'],
]);

const COLOR_PATTERNS = [
  { re: /^#([0-9a-fA-F]{3,8})(\s*!important)?\s*$/ },
  { re: /^rgba?\s*\(/i },
  { re: /^hsla?\s*\(/i },
];

export function collectColor(value) {
  const v = value.trim();
  return COLOR_PATTERNS.some((p) => p.re.test(v));
}

export function normalizeColor(raw) {
  let v = raw
    .trim()
    .replace(/\s*!important\s*$/i, '')
    .trim()
    .toUpperCase();
  // 약식 hex #ABC → #AABBCC
  if (/^#([0-9A-F]{3})$/.test(v)) {
    const [, h] = v.match(/^#([0-9A-F]{3})$/);
    v = '#' + h.split('').map((c) => c + c).join('');
  }
  return v;
}
