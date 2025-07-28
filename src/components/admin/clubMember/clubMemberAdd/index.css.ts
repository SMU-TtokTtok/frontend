import { style } from '@vanilla-extract/css';
import { BREAKPOINTS } from '@/common/constants';

export const wrapper = style({
  paddingLeft: '300px',
  paddingRight: '380px',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.largeDesktop}px)`]: {
      paddingLeft: '246px',
      paddingRight: '20px',
    },
  },
});

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '60px',
});
