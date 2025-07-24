import { vars } from '@/common/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'start',
  alignItems: 'start',
  position: 'fixed',
  top: '85px',
  left: '20px',
  backgroundColor: vars.colors.surface.bright,
  borderRadius: '8px',
  zIndex: 1000,
});

export const header = style({
  backgroundColor: vars.colors.surface.cont_2_var,
  padding: '20px 24px',
});

export const label = style({
  fontSize: vars.fonts.title4,
  color: vars.colors.surface.on_surf,
  fontWeight: 600,
});

export const description = style({
  fontSize: vars.fonts.body1,
  color: vars.colors.surface.outline,
  fontWeight: 500,
  marginTop: '8px',
});

export const templateList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  padding: '14px',
  width: '100%',
});

export const templateItemContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '16px 16px 16px 20px',
  backgroundColor: vars.colors.surface.default,
  borderRadius: '8px',
  width: '100%',
  cursor: 'pointer',
  ':hover': {
    backgroundColor: vars.colors.surface.cont_2_var,
  },
  transition: 'background-color 0.3s ease-in-out',
});

export const templateItemLabel = style({
  fontSize: vars.fonts.body1,
  color: vars.colors.surface.on_surf_var,
  fontWeight: 600,
});
