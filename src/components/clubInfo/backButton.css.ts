import { style } from '@vanilla-extract/css';
import { BREAKPOINTS } from '@/common/constants';
import { vars } from '@/common/styles/theme.css';

export const backFlex = style({
  display: 'flex',
  marginTop: '80px',
  alignItems: 'center',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.largeDesktop}px)`]: {
      marginTop: '40px',
    },
  },
});

export const backContainer = style({
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
});

export const backText = style({
  fontSize: vars.fonts.title4,
  fontWeight: 500,

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      fontSize: vars.fonts.m_title4,
    },
  },
});
