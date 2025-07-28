import { vars } from '@/common/styles/theme.css';
import { createVar, style } from '@vanilla-extract/css';
import { BREAKPOINTS } from '@/common/constants';

export const sidebarTop = createVar();

export const container = style({
  position: 'relative',
  flexBasis: '330px',
  // width: '330px',
  flexShrink: 0,
  flexGrow: 0,
  // right: '100px',
  transition: 'top 0.7s ease-out',
  top: sidebarTop, // 동적 값이 들어갈 자리

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.largeDesktop}px)`]: {
      position: 'relative',
      width: '100%',
      // right: '0',
      top: '0',
      flexBasis: 'auto',
      transition: 'none',
    },
  },
});

export const contentFlex = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  backgroundColor: 'white',
  padding: '24px 26px',
  borderRadius: '8px',
  marginBottom: '20px',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      padding: '18px 16px',
    },
  },
});

export const itemFlex = style({
  display: 'flex',
  gap: '28px',
  alignItems: 'center',
});

export const itemTitle = style({
  fontWeight: 600,
  color: '#818181',
  fontSize: vars.fonts.body3,

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      fontSize: vars.fonts.m_body2,
    },
  },
});

export const itemContent = style({
  fontWeight: 500,
  fontSize: vars.fonts.body1,

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      fontSize: vars.fonts.m_body1,
    },
  },
});

export const button = style({
  width: '100%',
  padding: '16px 0',
  fontWeight: 600,
  fontSize: vars.fonts.body2,
  borderRadius: '6px',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.largeDesktop}px)`]: {
      position: 'absolute',
      top: '-88px',
      right: '18px',
      width: '204px',
    },
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      position: 'static',
      width: '100%',
      marginBottom: '20px',
    },
  },
});

export const buttonDisabled = style({
  cursor: 'not-allowed',
});

export const notRecruiting = style({
  fontWeight: 500,
  fontSize: vars.fonts.body1,
  color: '#55637D',
});
