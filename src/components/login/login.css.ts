import { vars } from '@/common/styles/theme.css';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const Container = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  gap: '24px',
  minHeight: 'inherit',
});

export const LoginText = style({
  fontSize: vars.fonts.title1,
  fontWeight: '600',
});

export const BoxContainer = style({
  width: '496px',
  borderRadius: '10px',
  backgroundColor: vars.colors.surface.bright,
  padding: '64px 54px',
  display: 'flex',
  flexDirection: 'column',
});

export const AuthText = recipe({
  base: {
    fontSize: vars.fonts.body1,
    fontWeight: '600',
    marginBottom: '10px',
  },
  variants: {
    password: {
      true: { marginTop: '32px' },
      false: { marginTop: '0' },
    },
  },
});

export const Input = style({
  padding: '12px 16px',
  fontSize: vars.fonts.body2,
  borderRadius: '6px',
  width: '100%',
});

export const AuthFooter = style({
  display: 'flex',
  justifyContent: 'flex-end',
  marginTop: '13px',
});

export const AuthFooterTextContainer = style({
  display: 'flex',
  gap: '10px',
  cursor: 'pointer',
  marginBottom: '94px',
});

export const AuthFooterText = style({
  color: '#55637D',
  fontSize: vars.fonts.body3,
});

export const Button = style({
  padding: '16px 170.5px',
  borderRadius: '6px',
  fontSize: vars.fonts.body1,
  fontWeight: '600',
});

export const ErrorText = style({
  color: 'red',
  fontSize: '0.85rem',
  marginTop: '4px',
});

export const adminLoginButton = style({
  padding: '16px 170.5px',
  borderRadius: '6px',
  fontSize: vars.fonts.body1,
  fontWeight: '600',
  marginTop: '94px',
});
