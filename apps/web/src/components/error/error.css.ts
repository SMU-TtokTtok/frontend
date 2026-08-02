import { vars } from '@/common/styles/theme.css';
import { BREAKPOINTS } from '@/common/constants/breakpoints';
import { style } from '@vanilla-extract/css';

export const container = style({
  height: '100%',
  width: '100%',
  padding: '2rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1.5rem',
  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.tablet}px)`]: {
      padding: '1.5rem',
      gap: '1rem',
    },
  },
});

export const pageContainer = style({
  minHeight: '100dvh',
  width: '100%',
  padding: '2rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1.5rem',
  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.tablet}px)`]: {
      padding: '1.5rem',
      gap: '1rem',
    },
  },
});

export const icon = style({
  width: 80,
  height: 80,
  marginBottom: '1rem',
  flexShrink: 0,
  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.tablet}px)`]: {
      width: 64,
      height: 64,
      marginBottom: '0.5rem',
    },
  },
});

export const title = style({
  fontSize: '2rem',
  fontWeight: 700,
  color: vars.colors.primary.default,
  marginBottom: '0.5rem',
  textAlign: 'center',
  lineHeight: 1.3,
  wordBreak: 'keep-all',
  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.tablet}px)`]: {
      fontSize: '1.5rem',
    },
  },
});

export const message = style({
  fontSize: '1.1rem',
  color: '#334155',
  marginBottom: '1.5rem',
  textAlign: 'center',
  lineHeight: 1.6,
  wordBreak: 'keep-all',
  overflowWrap: 'anywhere',
  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.tablet}px)`]: {
      fontSize: '0.95rem',
      marginBottom: '1rem',
    },
  },
});

export const button = style({
  padding: '0.75rem 2rem',
  borderRadius: 8,
  fontWeight: 600,
  fontSize: '1rem',
  cursor: 'pointer',
  boxShadow: '0 2px 8px 0 rgba(0,0,0,0.04)',
  minWidth: 140,
  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.tablet}px)`]: {
      width: '100%',
      maxWidth: 280,
      fontSize: '0.95rem',
    },
  },
});
