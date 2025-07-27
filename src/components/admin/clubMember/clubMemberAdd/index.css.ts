import { style } from '@vanilla-extract/css';

export const wrapper = style({
  paddingLeft: '300px',
  paddingRight: '380px',
});

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '60px',
});
