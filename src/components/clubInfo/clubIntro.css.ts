import { style } from '@vanilla-extract/css';
import { vars } from '@/common/styles/theme.css';
import { BREAKPOINTS } from '@/common/constants';

export const container = style({
  width: '100%',
  marginBottom: '180px',
});

export const headerContainer = style({
  // display: 'none',
  display: 'flex',
});

export const headerItem1 = style({
  flex: '1 0 0',
  textAlign: 'center',
  cursor: 'pointer',
  padding: '20px 0 ',
  borderRadius: '6px 6px 0px 0px',
  fontWeight: 700,
  fontSize: vars.fonts.body2,
  color: '#0052EC !important',
  backgroundColor: '#CAE0FF !important',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      fontSize: vars.fonts.m_body1,
      padding: '16px 0',
    },
  },
});

export const headerItem2 = style({
  flex: '1 0 0',
  textAlign: 'center',
  cursor: 'pointer',
  padding: '20px 0 ',
  borderRadius: '6px 6px 0px 0px',
  // fontWeight: 700,
  fontSize: vars.fonts.body2,
  color: '#55637D !important',
  backgroundColor: '#EEEEF0 !important',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      fontSize: vars.fonts.m_body1,
      padding: '16px 0',
    },
  },
});

export const contentContainer = style({
  width: '100%',
  padding: '26px 28px',
  backgroundColor: 'white',
  minHeight: '300px',
  borderRadius: '0 0 8px 8px',
});
