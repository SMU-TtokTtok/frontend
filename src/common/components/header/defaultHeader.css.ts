import { vars } from '@/common/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const Logo = style({
  width: '50px',
  height: '36px',
});
export const InnerWrapper = style({
  padding: '10px 1.111rem',
  maxWidth: '1392px',
  height: '60px',
});

export const ButtonStyle = style({
  borderRadius: '100px',
  padding: '8px 16px',
  fontWeight: '600',
  fontSize: vars.fonts.body3,
  marginRight: '8px',
});
