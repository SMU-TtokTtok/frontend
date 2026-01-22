import { BREAKPOINTS } from '@/common/constants';
import { vars } from '@/common/styles/theme.css';
import { style } from '@vanilla-extract/css';
export const step4Container = style({
  width: '100%',
  height: '90vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

export const innerWrapper = style({
  maxWidth: '920px',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'start',
  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop - 1}px)`]: {
      padding: '0px 20px',
    },
  },
});

export const content = style({
  backgroundColor: vars.colors.white,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '20px',
  width: '100%',
  padding: '120px 0px',
  borderRadius: '8px',
  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop - 1}px)`]: {
      padding: '60px 0px',
    },
  },
});

export const title = style({
  color: vars.colors.surface.on_surf,
  fontSize: vars.fonts.title3,
  fontWeight: 600,
  textAlign: 'center',
  marginBottom: '20px',
  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop - 1}px)`]: {
      fontSize: vars.fonts.m_title3,
    },
  },
});

export const button = style({
  fontSize: vars.fonts.body2,
  padding: '16px 173px',
  borderRadius: '6px',
  maxWidth: '448px',
  width: '100%',
  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop - 1}px)`]: {
      fontSize: vars.fonts.m_body1,
      padding: '14px 93px',
    },
  },
});
