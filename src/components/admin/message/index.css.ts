import { style } from '@vanilla-extract/css';
import { BREAKPOINTS } from '@/common/constants';

export const container = style({
  paddingLeft: '280px',
  paddingRight: '378px',
  display: 'flex',
  flexDirection: 'column',
  gap: '80px',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.largeDesktop}px)`]: {
      paddingLeft: '250px',
      paddingRight: '20px',
      gap: 0,
    },
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      paddingLeft: '20px',
      paddingRight: '20px',
    },
  },
});

export const wrapper = style({
  position: 'relative',
  width: '100%',
});
