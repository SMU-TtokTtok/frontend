import { style } from '@vanilla-extract/css';
import { BREAKPOINTS } from '@/common/constants';

export const wrapper = style({
  paddingLeft: '384px',
  paddingRight: '384px',
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.largeDesktop}px)`]: {
      paddingLeft: '250px',
      paddingRight: '20px',
    },
  },
});
