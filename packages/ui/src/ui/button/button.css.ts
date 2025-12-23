import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '@/styles/theme.css';

export const buttonStyle = styleVariants({
  //파랑색
  primary: {
    backgroundColor: vars.colors.primary.default,
    color: vars.colors.white,
  },
  //하늘색
  secondary: {
    backgroundColor: vars.colors.primary.base,
    color: vars.colors.primary.default,
  },
  //회색
  tertiary: {
    backgroundColor: vars.colors.surface.cont_3_var,
    color: vars.colors.surface.outline,
  },
  //흰색
  surface: {
    backgroundColor: vars.colors.surface.default,
    color: vars.colors.surface.outline,
  },
  //연한회색
  lightGray: {
    backgroundColor: vars.colors.surface.variant,
    color: vars.colors.surface.outline,
  },
  none: {},
});

export const baseButtonStyle = style({
  transition: 'opacity 0.3s ease',
  ':hover': {
    opacity: '0.9',
  },
  selectors: {
    '&:disabled': {
      cursor: 'not-allowed',
      opacity: 0.6,
    },
  },
});
