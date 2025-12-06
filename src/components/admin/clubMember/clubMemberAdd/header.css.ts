import { style } from '@vanilla-extract/css';
import { BREAKPOINTS } from '@/common/constants';
import { vars } from '@/common/styles/theme.css';

export const container = style({
  display: 'flex',
  gap: '9px',
  alignItems: 'center',
  marginTop: '50px',
  marginBottom: '60px',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      marginTop: '30px',
      marginBottom: '30px',
    },
  },
});

export const titleText = style({
  fontSize: vars.fonts.title2,
  fontWeight: '600',
  color: '#030304',

  [`@media`]: {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      fontSize: vars.fonts.m_title2,
    },
  },
});
