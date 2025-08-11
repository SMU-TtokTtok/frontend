import { vars } from '@/common/styles/theme.css';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { BREAKPOINTS } from '@/common/constants';

export const Container = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  gap: '24px',
  minHeight: 'inherit',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.tablet}px)`]: {
      padding: '0 20px',
      gap: '16px',
    },
  },
});

export const LoginText = style({
  fontSize: vars.fonts.title1,
  fontWeight: '600',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.tablet}px)`]: {
      fontSize: vars.fonts.m_title2,
    },
  },
});

export const BoxContainer = style({
  width: '496px',
  borderRadius: '10px',
  backgroundColor: vars.colors.surface.bright,
  padding: '64px 54px',
  display: 'flex',
  flexDirection: 'column',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.tablet}px)`]: {
      width: '100%',
      padding: '20px',
    },
  },
});

export const AuthText = recipe({
  base: {
    fontSize: vars.fonts.body1,
    fontWeight: '600',
    marginBottom: '10px',

    '@media': {
      [`screen and (max-width: ${BREAKPOINTS.tablet}px)`]: {
        fontSize: vars.fonts.m_title4,
        marginBottom: '8px',
      },
    },
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

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.tablet}px)`]: {
      padding: '10px 12px',
      fontSize: vars.fonts.m_body1,
    },
  },
});

export const AuthFooter = style({
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '13px',
  marginBottom: '94px',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.tablet}px)`]: {
      marginBottom: '54px',
    },
  },
});

export const AuthFooterTextContainer = style({
  display: 'flex',
  gap: '10px',
  cursor: 'pointer',
});

export const AuthFooterText = style({
  color: '#55637D',
  fontSize: '12px',
});

export const Button = style({
  padding: '16px 0',
  width: '100%',
  borderRadius: '6px',
  fontSize: vars.fonts.body1,
  fontWeight: '600',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.tablet}px)`]: {
      fontSize: vars.fonts.m_body1,
    },
  },
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

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.tablet}px)`]: {
      marginTop: '54px',
      padding: '16px 0',
    },
  },
});

export const userInput = style({
  padding: '12px 16px',
  borderRadius: '6px',
  backgroundColor: '#F8F8F9',
  fontSize: '14px',
  selectors: {
    '&::placeholder': {
      color: '#D2D4D8',
    },
  },
});

export const CheckboxContainer = style({
  display: 'flex',
  gap: '4px',
  alignItems: 'center',
  cursor: 'pointer',
});

export const CheckboxText = style({
  fontSize: '12px',
  color: '#55637D',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.tablet}px)`]: {
      fontSize: vars.fonts.m_body1,
    },
  },
});
