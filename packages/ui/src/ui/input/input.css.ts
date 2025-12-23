import { BREAKPOINTS } from '@/styles/breakpoints.css';
import { vars } from '@/styles/theme.css';
import { style, styleVariants } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const baseinputStyle = recipe({
  base: {
    borderRadius: 6,
    fontSize: vars.fonts.body2,
    '@media': {
      [`screen and (max-width: ${BREAKPOINTS.tablet}px)`]: {
        fontSize: vars.fonts.m_body1,
      },
    },
  },
  variants: {
    isError: {
      true: {
        border: `1px solid ${vars.colors.error.primary}`,
      },
    },
  },
});

export const inputStyle = styleVariants({
  //서치바
  primary: {
    backgroundColor: vars.colors.surface.variant,
    color: vars.colors.black,
    fontWeight: 500,

    '$:placeholder': {
      color: vars.colors.surface.outline_var,
    },
  },
  //로그인, 회원가입 관련
  secondary: {
    backgroundColor: vars.colors.surface.default,
    color: vars.colors.black,
    fontWeight: 400,

    '$:placeholder': {
      color: vars.colors.surface.cont_5,
    },
  },
  tertiary: {
    backgroundColor: vars.colors.surface.bright,
    color: vars.colors.black,
    fontWeight: 500,

    '$:placeholder': {
      color: vars.colors.surface.outline_var,
    },
  },
});

export const errorMessage = style({
  color: vars.colors.error.primary,
  fontSize: vars.fonts.body2,
  fontWeight: 500,
  marginTop: '0.6rem',
});
