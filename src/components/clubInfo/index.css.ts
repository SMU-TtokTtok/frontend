// import { vars } from '@/common/styles/theme.css';
import { style } from '@vanilla-extract/css';
import { BREAKPOINTS } from '@/common/constants';

export const wrapper = style({
  display: 'flex',
  gap: '24px',
  justifyContent: 'center',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.largeDesktop}px)`]: {
      paddingLeft: '40px',
      paddingRight: '40px',
    },
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      paddingLeft: '20px',
      paddingRight: '20px',
    },
  },
});

export const container = style({
  display: 'flex',
  gap: '24px',
  // maxWidth: '1392px',
  width: '1392px',
  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.largeDesktop}px)`]: {
      width: '100%',
    },
  },
});

export const leftcontainer = style({
  // maxWidth: '1038px',
  // width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  flexGrow: 1,
  // flexShrink: 1,

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.largeDesktop}px)`]: {
      maxWidth: '100%',
    },
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      gap: '16px',
    },
  },
});
