import { BREAKPOINTS } from '@/common/constants';
import { style } from '@vanilla-extract/css';

export const container = style({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.largeDesktop}px)`]: {
      padding: '0 20px',
    },
  },
});
export const innerWrapper = style({
  display: 'grid',
  width: '100%',
  maxWidth: '1392px',
  marginTop: '0.722rem',
  marginBottom: '8.222rem',
  gap: '1.2rem',

  gridTemplateColumns: 'repeat(4, 1fr)',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.largeDesktop}px)`]: {
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    [`screen and (max-width: ${BREAKPOINTS.tablet}px)`]: {
      gridTemplateColumns: '1fr',
    },
  },
});

export const cardStyle = style({
  width: '100%',
});
