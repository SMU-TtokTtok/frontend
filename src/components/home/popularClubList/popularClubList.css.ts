import { vars } from '@/common/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const Container = style({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: vars.colors.surface.cont_1_var,
});
export const InnerWrapper = style({
  width: '100%',
  padding: '76px 0 96px 0',
  maxWidth: '1392px',
});
export const TitleWrapper = style({
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '1rem',
});

export const Title = style({
  fontSize: '1.333rem',
  fontWeight: '700',
  color: vars.colors.primary.default,
});

export const Plus = style({
  fontSize: '1rem',
  fontWeight: '500',
  textDecoration: 'underline',
  color: vars.colors.primary.default,
  cursor: 'pointer',
});
