import { style } from '@vanilla-extract/css';
import { vars } from '@/common/styles/theme.css';
import { BREAKPOINTS } from '@/common/constants/';

export const CompleteBox = style({
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',

  backgroundColor: 'white',
  borderRadius: '12px',
  padding: '48px',
  width: '100%',
  maxWidth: '586px',
  textAlign: 'center',
  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.06)',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.tablet}px)`]: {
      width: '100%',
      maxWidth: 'calc(100% - 40px)',
      padding: '26px 30px',
    },
  },
});

export const CompleteTitle = style({
  fontSize: vars.fonts.title3,
  fontWeight: 700,
  marginBottom: '16px',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.tablet}px)`]: {
      fontSize: vars.fonts.m_title2,
      marginBottom: '6px',
    },
  },
});

export const CompleteText = style({
  fontSize: vars.fonts.body2,
  color: '#272E3B',
  lineHeight: 1.6,
  marginBottom: '30px',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.tablet}px)`]: {
      fontSize: vars.fonts.m_body1,
      marginBottom: '20px',
    },
  },
});

export const CompleteHighlight = style({
  color: '#2563eb',
  fontWeight: 600,
});

export const CompleteButton = style({
  width: '100%',
  padding: '16px 0',
  fontSize: vars.fonts.body1,
  fontWeight: 600,
  borderRadius: '6px',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.tablet}px)`]: {
      fontSize: vars.fonts.m_body1,
    },
  },
});
