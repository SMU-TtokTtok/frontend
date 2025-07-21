import { BREAKPOINTS } from '@/common/constants';
import { vars } from '@/common/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'start',
  position: 'relative',
  alignItems: 'start',
  marginTop: '70px',
  paddingLeft: '380px',
  paddingRight: '500px',
  maxWidth: '100vw',
  width: '100%',
  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.largeDesktop}px)`]: {
      paddingLeft: '314px',
      paddingRight: '100px',
    },
  },
});

export const navigatorContainer = style({
  position: 'fixed',
  top: '188px',
  right: '146px',
  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.largeDesktop}px)`]: {
      position: 'static',
      display: 'flex',
      justifyContent: 'end',
      alignItems: 'center',
      width: '100%',
    },
  },
});

export const submitButton = style({
  padding: '16px 0px',
  fontSize: vars.fonts.body2,
  fontWeight: '600',
  borderRadius: '6px',
  position: 'relative',
  width: '100%',
  marginTop: '16px',
  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.largeDesktop}px)`]: {
      width: '224px',
    },
  },
});
