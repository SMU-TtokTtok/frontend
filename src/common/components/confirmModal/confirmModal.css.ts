import { vars } from '@/common/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const content = style({
  width: '345px',
  padding: '58px 10px 10px 10px',
});

export const Button = style({
  width: '100%',
  fontWeight: 600,
  fontSize: vars.fonts.body2,
  borderRadius: '8px',
  padding: '16px 0',
  marginTop: '50px',
});

export const body = style({
  fontSize: vars.fonts.title4,
  fontWeight: 600,
});
