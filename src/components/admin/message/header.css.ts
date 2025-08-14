import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  marginTop: '50px',
  marginBottom: '40px',
});

export const titleText = style({
  fontSize: '26px',
  fontWeight: '600',
  color: '#030304',
});
