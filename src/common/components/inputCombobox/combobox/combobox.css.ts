import { vars } from '@/common/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const layout = style({
  position: 'absolute',
  display: 'flex',
  flexDirection: 'column',
  overflowY: 'scroll',
  backgroundColor: vars.colors.surface.bright,
  width: '100%',
  maxHeight: '150px',
  borderRadius: '6px',
});

export const comboBoxOption = style({
  padding: '14px 24px',
  borderRadius: '5px',
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  fontSize: vars.fonts.body2,
  fontWeight: 500,
  transition: 'background-color 0.3s ease',
  ':hover': {
    backgroundColor: vars.colors.surface.cont_1,
  },
});

export const category = style({
  color: vars.colors.surface.outline,
  fontSize: vars.fonts.body4,
  fontWeight: 400,
});

export const emptyMessage = style({
  padding: '14px 24px',
  textAlign: 'center',
  color: vars.colors.surface.outline,
  fontSize: vars.fonts.body2,
  fontWeight: 400,
});
