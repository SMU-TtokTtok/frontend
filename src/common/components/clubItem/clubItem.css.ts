import { vars } from '@/common/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'start',
  alignItems: 'start',
  minWidth: '16.666rem',
  maxWidth: '18.33rem',
  width: '100%',
  height: '8.83rem',
  backgroundColor: vars.colors.surface.bright,
  margin: '0 8px',
  padding: '1rem 1rem 1.111rem 1rem',
  cursor: 'pointer',
});

export const separation = style({
  fontSize: vars.fonts.body1,
  fontWeight: '500',
  color: vars.colors.surface.outline,
});

export const headerWrapper = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  marginBottom: '2px',
});
export const star = style({
  display: 'block',
  width: '1.111rem',
  height: '1.06rem',
  cursor: 'pointer',
});
export const person = style({
  display: 'block',
  width: '1.17rem',
  height: '1.17rem',
});

export const name = style({
  fontSize: vars.fonts.title3,
  fontWeight: '600',
  color: vars.colors.surface.on_surf,
  marginBottom: '5px',
});
export const membersWrapper = style({
  display: 'flex',
  justifyContent: 'start',
  alignItems: 'center',
  marginBottom: '15px',
});
export const members = style({
  fontSize: vars.fonts.body2,
  fontWeight: '500',
});
export const categoryWrapper = style({
  display: 'flex',
  justifyContent: 'start',
  alignItems: 'center',
  gap: '8px',
});
export const tagStyle = style({
  borderRadius: '5.555rem',
  padding: '0.22rem 0.67rem',
});

export const verticalLine = style({
  width: '1px',
  height: '1.333rem',
  backgroundColor: vars.colors.surface.cont_2,
});
