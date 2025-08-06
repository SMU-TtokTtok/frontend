import { style } from '@vanilla-extract/css';

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
  backgroundColor: '#fff',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  borderRadius: '8px',
  zIndex: 100,
  overflow: 'hidden',
});
