export const CSS_NAMED_HEX = new Map<string, string>([
  ['white', '#FFFFFF'],
  ['black', '#000000'],
  ['transparent', 'transparent'],
]);

const COLOR_PATTERNS: { re: RegExp }[] = [
  { re: /^#([0-9a-fA-F]{3,8})(\s*!important)?\s*$/ },
  { re: /^rgba?\s*\(/i },
  { re: /^hsla?\s*\(/i },
];

export function collectColor(value: string): boolean {
  const v = value.trim();
  return COLOR_PATTERNS.some((p) => p.re.test(v));
}

export function normalizeColor(raw: string): string {
  let v = raw
    .trim()
    .replace(/\s*!important\s*$/i, '')
    .trim()
    .toUpperCase();
  // 약식 hex #ABC → #AABBCC
  const shortHexMatch = v.match(/^#([0-9A-F]{3})$/);
  if (shortHexMatch) {
    const [, h] = shortHexMatch;
    v =
      '#' +
      h
        .split('')
        .map((c) => c + c)
        .join('');
  }
  return v;
}
