import { style } from '@vanilla-extract/css';
import { vars } from '@/common/styles/theme.css';
import { BREAKPOINTS } from '@/common/constants';

export const container = style({
  width: '100%',
});

export const buttonContainer = style({
  // display: 'none',
  display: 'flex',
});

export const buttonIntro = style({
  width: '100%',
  textAlign: 'center',
  padding: '22px 0',
  backgroundColor: '#CAE0FF !important',
  borderRadius: '6px 6px 0px 0px',
  color: '#0052EC',
  fontSize: vars.fonts.body2,
  fontWeight: '700',
  ':hover': {
    opacity: '1 !important',
    cursor: 'auto !important',
  },

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      fontSize: vars.fonts.m_body1,
      padding: '16px 0',
    },
  },
});

export const buttonNotice = style({
  width: '50%',
  textAlign: 'center',
  padding: '22px 0',
  backgroundColor: '#EEEEF0 !important',
  borderRadius: '6px 6px 0px 0px',
  color: '#55637D !important',
  fontSize: vars.fonts.body2,
  // fontWeight: '700',
});
