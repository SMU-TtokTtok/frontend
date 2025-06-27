import { vars } from '@/common/styles/theme.css';
import { style, styleVariants } from '@vanilla-extract/css';

export const baseinputStyle = style({
  borderRadius: 6,
  fontSize: vars.fonts.body1,
});

export const inputStyle = styleVariants({
  //서치바
  primary: {
    backgroundColor: vars.colors.surface.bright,
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
});

export const errorMessage = style({
  color: vars.colors.error.primary,
  fontSize: vars.fonts.body2,
  fontWeight: 500,
  marginTop: '0.6rem',
});
