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
} as const;

export const b = (s: string): string => `${C.bold}${s}${C.reset}`;
export const r = (s: string): string => `${C.red}${s}${C.reset}`;
export const y = (s: string): string => `${C.yellow}${s}${C.reset}`;
export const g = (s: string): string => `${C.green}${s}${C.reset}`;
export const cy = (s: string): string => `${C.cyan}${s}${C.reset}`;
export const d = (s: string): string => `${C.dim}${s}${C.reset}`;
export const m = (s: string): string => `${C.magenta}${s}${C.reset}`;

export const ANSI_RE = /\x1b\[[0-9;]*m/g;
