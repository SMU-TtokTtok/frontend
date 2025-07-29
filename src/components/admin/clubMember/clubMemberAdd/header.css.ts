import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  gap: '9px',
  alignItems: 'center',
  marginTop: '50px',
});

export const titleText = style({
  fontSize: '26px',
  fontWeight: '600',
  color: '#030304',
});
