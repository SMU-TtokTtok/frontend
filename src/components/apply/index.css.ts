import { style } from '@vanilla-extract/css';
import { BREAKPOINTS } from '@/common/constants/index';

export const wrapper = style({
  // paddingLeft: '264px',
  // paddingRight: '450px',

  display: 'flex',
  justifyContent: 'center',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.largeDesktop}px)`]: {
      paddingLeft: '40px',
      paddingRight: '40px',
    },
  },
});

export const container = style({
  // maxWidth: '1038px',
  width: '1392px',
  // width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
});
