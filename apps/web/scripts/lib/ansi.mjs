export const C = {
  reset: '\x1b[0m',
  bold: '\x1b[1m',
  dim: '\x1b[2m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  cyan: '\x1b[36m',
  green: '\x1b[32m',
  magenta: '\x1b[35m',
  gray: '\x1b[90m',
};

export const b = (s) => `${C.bold}${s}${C.reset}`;
export const r = (s) => `${C.red}${s}${C.reset}`;
export const y = (s) => `${C.yellow}${s}${C.reset}`;
export const g = (s) => `${C.green}${s}${C.reset}`;
export const cy = (s) => `${C.cyan}${s}${C.reset}`;
export const d = (s) => `${C.dim}${s}${C.reset}`;
export const m = (s) => `${C.magenta}${s}${C.reset}`;

export const ANSI_RE = /\x1b\[[0-9;]*m/g;
