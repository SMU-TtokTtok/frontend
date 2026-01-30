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

export const SignupText = style({
  fontSize: vars.fonts.title1,
  fontWeight: '600',
  marginTop: '40px',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.tablet}px)`]: {
      fontSize: vars.fonts.m_title2,
      marginTop: '30px',
    },
  },
});

export const SignupDescription = style({
  fontSize: vars.fonts.body1,
  color: vars.colors.surface.on_surf_var,
  textAlign: 'center',
  maxWidth: '400px',
  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.tablet}px)`]: {
      fontSize: vars.fonts.m_body1,
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
  marginBottom: '80px',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.tablet}px)`]: {
      width: '100%',
      padding: '20px',
    },
  },
});

export const Label = recipe({
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
    isFirst: {
      true: { marginTop: '0' },
      false: { marginTop: '32px' },
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

export const Select = style({
  padding: '12px 16px',
  fontSize: vars.fonts.body2,
  borderRadius: '6px',
  width: '100%',
  border: '1px solid #e0e0e0',
  backgroundColor: vars.colors.surface.bright,
  cursor: 'pointer',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.tablet}px)`]: {
      padding: '10px 12px',
      fontSize: vars.fonts.m_body1,
    },
  },
});

export const SelectError = style({
  border: `1px solid ${vars.colors.error.primary}`,
});

export const ErrorText = style({
  color: vars.colors.error.primary,
  fontSize: vars.fonts.body2,
  fontWeight: 500,
  marginTop: '0.6rem',
  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.tablet}px)`]: {
      fontSize: vars.fonts.m_body2,
    },
  },
});

export const LinkContainer = style({
  marginTop: '12px',
  textAlign: 'right',
});

export const LoginLink = style({
  color: vars.colors.surface.outline,
  fontSize: vars.fonts.body3,
  cursor: 'pointer',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.tablet}px)`]: {
      fontSize: vars.fonts.m_body3,
    },
  },
});

export const SignupButton = style({
  padding: '16px',
  borderRadius: '6px',
  fontSize: vars.fonts.body1,
  fontWeight: '600',
  marginTop: '74px',
  width: '100%',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.tablet}px)`]: {
      marginTop: '54px',
      padding: '16px 0',
      fontSize: vars.fonts.m_body1,
    },
  },
});
