import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const dropDownButtonStyle = styleVariants({
  default: {
    backgroundColor: vars.colors.surface.bright,
    border: `1px solid ${vars.colors.surface.cont_3}`,
    color: vars.colors.surface.on_surf_var,
  },
  error: {
    backgroundColor: vars.colors.error.base,
    border: `1px solid ${vars.colors.error.container}`,
    color: '#BE3439',
  },
  tertiary: {
    backgroundColor: vars.colors.tertiary.base,
    border: `1px solid ${vars.colors.tertiary.fixed_dim}`,
    color: vars.colors.tertiary.default,
  },
  gray: {
    backgroundColor: vars.colors.surface.default,
    border: `1px solid ${vars.colors.surface.cont_2}`,
    color: vars.colors.surface.outline,
  },
  form: {
    backgroundColor: vars.colors.surface.cont_1_var,
    border: 'none',
    color: vars.colors.surface.on_surf,
  },
});

export const baseDropdownButtonStyle = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  transition: 'opacity 0.3s ease',
  fontWeight: 600,
  ':hover': {
    opacity: '0.9',
  },
});

export type dropDownButtonVariant = keyof typeof dropDownButtonStyle;
