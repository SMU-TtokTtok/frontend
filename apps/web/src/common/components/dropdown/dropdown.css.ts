import { keyframes, style } from '@vanilla-extract/css';
import { vars } from '@/common/styles/theme.css';

const dropdownEnter = keyframes({
  from: {
    opacity: 0,
    transform: 'translateY(-6px) scale(0.98)',
  },
  to: {
    opacity: 1,
    transform: 'translateY(0) scale(1)',
  },
});

export const container = style({
  position: 'relative',
});

export const toggleButton = style({
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  outline: 'none',
});

export const icon = style({
  width: '30px',
  height: '30px',
  transition: 'fill 0.2s ease',
});

export const panel = style({
  position: 'absolute',
  right: 0,
  backgroundColor: vars.colors.white,
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  borderRadius: '8px',
  zIndex: 100,
  overflow: 'hidden',
  transformOrigin: 'top center',
  animation: `${dropdownEnter} 140ms ease-out`,
});
