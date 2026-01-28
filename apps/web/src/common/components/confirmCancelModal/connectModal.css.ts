import { BREAKPOINTS } from '@/common/constants';
import { vars } from '@/common/styles/theme.css';

import { style } from '@vanilla-extract/css';

export const modalContent = style({
  width: 'min(400px, 90vw)',
  maxWidth: '100%',
  padding: '24px',
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
});

export const title = style({
  fontSize: vars.fonts.title4,
  fontWeight: 700,
  color: vars.colors.black,
  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.tablet}px)`]: {
      fontSize: vars.fonts.m_title4,
    },
  },
});

export const modalBody = style({
  padding: '0',
});

export const warningBox = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '6px',
  padding: '16px 0px',
});

export const warningText = style({
  fontSize: vars.fonts.body2,
  fontWeight: 600,
  color: vars.colors.error.primary,
  lineHeight: 1.5,
  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.tablet}px)`]: {
      fontSize: vars.fonts.m_body2,
    },
  },
});

export const buttonWrapper = style({
  display: 'flex',
  gap: '12px',
  justifyContent: 'flex-end',
  width: '100%',
});

export const cancelButton = style({
  padding: '10px 20px',
  minWidth: '80px',
  width: '100%',
  borderRadius: '0.333rem',
  fontWeight: 600,
});

export const confirmButton = style({
  padding: '10px 20px',
  minWidth: '80px',
  borderRadius: '0.333rem',
  fontWeight: 600,
  width: '100%',
});
