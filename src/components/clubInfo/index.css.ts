// import { vars } from '@/common/styles/theme.css';
import { style } from '@vanilla-extract/css';
import { BREAKPOINTS } from '@/common/constants';

export const container = style({
  paddingLeft: '264px',
  paddingRight: '450px',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.largeDesktop}px)`]: {
      paddingLeft: '40px',
      paddingRight: '40px',
    },
  },
});

export const wrapper = style({
  maxWidth: '1038px',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.largeDesktop}px)`]: {
      maxWidth: 'none',
    },
  },
});
