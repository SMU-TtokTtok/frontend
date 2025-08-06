import { style } from '@vanilla-extract/css';
import { BREAKPOINTS } from '@/common/constants';

export const wrapper = style({
  paddingLeft: '280px',
  paddingRight: '378px',
  display: 'flex',
  flexDirection: 'column',
  gap: '80px',
  position: 'relative',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.largeDesktop}px)`]: {
      paddingLeft: '250px',
      paddingRight: '20px',
    },
  },
});
