import { style } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const memberItemList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
});

export const lottieContainer = style({
  width: '100%',
  height: '100px',
});

export const divider = style({
  height: '1px',
  backgroundColor: '#D2D4D8',
  marginTop: '16px',
  marginBottom: '8px',
  width: '100%',
});

export const emptyContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
});

export const border = style({
  height: '1px',
  backgroundColor: '#D2D4D8',
});
export const addCursor = style({
  cursor: 'pointer',
});
