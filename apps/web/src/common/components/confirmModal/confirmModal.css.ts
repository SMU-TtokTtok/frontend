import { BREAKPOINTS } from '@/common/constants';
import { vars } from '@/common/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const content = style({
  width: '345px',
  padding: '58px 10px 10px 10px',
});

export const Button = style({
  width: '100%',
  fontWeight: 600,
  fontSize: vars.fonts.body2,
  borderRadius: '8px',
  padding: '16px 0',
  marginTop: '50px',
  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop - 1}px)`]: {
      fontSize: vars.fonts.m_body1,
    },
  },
});

export const body = style({
  textAlign: 'center',
  fontSize: vars.fonts.title4,
  fontWeight: 600,
  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop - 1}px)`]: {
      fontSize: vars.fonts.m_title4,
    },
  },
});
