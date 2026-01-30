import { vars } from '@/common/styles/theme.css';
import { style } from '@vanilla-extract/css';
import { BREAKPOINTS } from '@/common/constants';

export const Container = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  minHeight: '100vh',
  padding: '40px 20px',
  backgroundColor: vars.colors.surface.cont_1,

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.tablet}px)`]: {
      padding: '20px',
    },
  },
});

export const ContentBox = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '32px',
  maxWidth: '500px',
  width: '100%',
  padding: '60px 40px',
  borderRadius: '12px',
  backgroundColor: vars.colors.surface.bright,
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.tablet}px)`]: {
      padding: '40px 24px',
      gap: '24px',
    },
  },
});

export const IconWrapper = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '80px',
  height: '80px',
  borderRadius: '50%',
  backgroundColor: vars.colors.primary.base,
  fontSize: '40px',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.tablet}px)`]: {
      width: '64px',
      height: '64px',
      fontSize: '32px',
    },
  },
});

export const Title = style({
  fontSize: vars.fonts.title1,
  fontWeight: '700',
  color: vars.colors.surface.on_surf,
  textAlign: 'center',
  margin: 0,

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.tablet}px)`]: {
      fontSize: vars.fonts.m_title2,
    },
  },
});

export const Description = style({
  fontSize: vars.fonts.body1,
  color: vars.colors.surface.on_surf_var,
  textAlign: 'center',
  lineHeight: '1.6',
  margin: 0,

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.tablet}px)`]: {
      fontSize: vars.fonts.m_body1,
    },
  },
});

export const InfoBox = style({
  width: '100%',
  padding: '20px',
  borderRadius: '8px',
  backgroundColor: vars.colors.surface.cont_2,
  border: `1px solid ${vars.colors.surface.outline}`,
});

export const InfoText = style({
  fontSize: vars.fonts.body2,
  color: vars.colors.surface.on_surf_var,
  lineHeight: '1.5',
  margin: 0,

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.tablet}px)`]: {
      fontSize: vars.fonts.m_body2,
    },
  },
});

export const ButtonGroup = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  width: '100%',
  marginTop: '8px',
});

export const PrimaryButton = style({
  width: '100%',
  padding: '16px',
  borderRadius: '8px',
  fontSize: vars.fonts.body1,
  fontWeight: '600',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.tablet}px)`]: {
      fontSize: vars.fonts.m_body1,
      padding: '14px',
    },
  },
});

export const SecondaryButton = style({
  width: '100%',
  padding: '16px',
  borderRadius: '8px',
  fontSize: vars.fonts.body2,
  fontWeight: '500',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.tablet}px)`]: {
      fontSize: vars.fonts.m_body2,
      padding: '14px',
    },
  },
});
