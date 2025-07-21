import { vars } from '@/common/styles/theme.css';
import { style, styleVariants } from '@vanilla-extract/css';
export const checkboxContainer = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '6px',
});

export const checkboxBase = style({
  borderRadius: '50%',
  background: vars.colors.surface.bright,
  cursor: 'pointer',
});

export const checkboxStyle = styleVariants({
  primary: {
    appearance: 'none',
    selectors: {
      '&:checked': {
        background: vars.colors.primary.default,
        borderColor: vars.colors.primary.default,
      },
    },
  },
  none: {},
});

export const checkboxLabel = style({
  fontSize: vars.fonts.body2,
  color: vars.colors.surface.on_surf_var,
  fontWeight: 500,
});
