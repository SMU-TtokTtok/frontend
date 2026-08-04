import { style } from '@vanilla-extract/css';
import { vars } from '@/common/styles/theme.css';
import { BREAKPOINTS } from '@/common/constants/breakpoints';

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

export const Title = style({
  fontSize: vars.fonts.title1,
  fontWeight: '600',
  marginTop: '40px',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.tablet}px)`]: {
      fontSize: vars.fonts.m_title2,
      marginTop: '0px',
    },
  },
});

export const BoxContainer = style({
  width: '496px',
  borderRadius: '10px',
  backgroundColor: vars.colors.surface.bright,
  padding: '48px 54px',
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.tablet}px)`]: {
      width: '100%',
      padding: '20px',
      gap: '16px',
    },
  },
});

export const Field = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
});

export const Label = style({
  fontSize: vars.fonts.body1,
  fontWeight: '600',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.tablet}px)`]: {
      fontSize: vars.fonts.m_title4,
    },
  },
});

export const EmailText = style({
  padding: '12px 16px',
  borderRadius: '6px',
  backgroundColor: vars.colors.surface.cont_1_var,
  color: vars.colors.surface.on_surf_var,
  fontSize: '14px',
});

export const Input = style({
  padding: '12px 16px',
  borderRadius: '6px',
  backgroundColor: vars.colors.surface.default,
  fontSize: '14px',

  selectors: {
    '&::placeholder': {
      color: vars.colors.surface.cont_3,
    },
  },
});

export const PolicyBox = style({
  padding: '16px',
  backgroundColor: vars.colors.surface.default,
  borderRadius: '6px',
  color: vars.colors.charcoal,
  fontSize: vars.fonts.body3,
  whiteSpace: 'pre-line',
  height: '180px',
  overflowY: 'auto',
  width: '100%',
});

export const AgreeLabel = style({
  display: 'flex',
  gap: '8px',
  alignItems: 'center',
  cursor: 'pointer',
});

export const AgreeText = style({
  color: vars.colors.charcoal,
  fontSize: vars.fonts.body2,
});

export const ErrorText = style({
  color: vars.colors.error.primary,
  fontSize: '0.85rem',
});

export const ButtonGroup = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
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

export const CancelText = style({
  color: vars.colors.surface.outline,
  fontSize: vars.fonts.body3,
  textAlign: 'center',
  cursor: 'pointer',
  padding: '4px',
  background: 'none',
  border: 'none',
});
