import { createVar, style } from '@vanilla-extract/css';
import { vars } from '@/common/styles/theme.css';
import { BREAKPOINTS } from '@/common/constants';

export const sidebarTop = createVar();

export const container = style({
  position: 'absolute',
  right: '24px',
  width: '330px',
  transition: 'top 0.7s ease-out',
  top: sidebarTop,

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.largeDesktop}px)`]: {
      position: 'static',
      width: '100%',
    },
  },
});

export const contentBox = style({
  background: 'white',
  borderRadius: '8px',
  padding: '24px 26px',
  marginBottom: '20px',
  display: 'flex',
  flexDirection: 'column',
  gap: '14px',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      padding: '18px 16px',
    },
  },
});

export const flexRow = style({
  display: 'flex',
  gap: '28px',
});

export const grayText = style({
  color: '#818181',
  fontSize: vars.fonts.body3,

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.largeDesktop}px)`]: {
      alignSelf: 'center',
    },
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      flexShrink: 0,
      fontSize: vars.fonts.m_body2,
    },
  },
});

export const blackText = style({
  color: '#030304',
  fontSize: vars.fonts.body1,
  fontWeight: 500,

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      fontSize: vars.fonts.m_body1,
    },
  },
});

export const modifyButton = style({
  width: '100%',
  textAlign: 'center',
  padding: '16px 0',
  borderRadius: '6px',
  fontSize: vars.fonts.body2,
  fontWeight: '600',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.largeDesktop}px)`]: {
      position: 'absolute',
      bottom: '120px',
      right: '0',
      width: '236px',

      selectors: {
        '&.cancel': {
          bottom: '54px',
        },
      },
    },
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      width: '100%',
      fontSize: vars.fonts.m_body1,
    },
  },
});

export const numberInput = style({
  appearance: 'textfield',
  WebkitAppearance: 'textfield',
  padding: '4px 6px',
  border: '1px solid #ccc',
  font: '-webkit-small-control',
  width: '60px',
  borderRadius: '4px',
  fontSize: vars.fonts.body1,

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      fontSize: vars.fonts.m_body1,
    },
  },
});
export const dateFlex = style({
  display: 'flex',
  flexDirection: 'column',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.largeDesktop}px)`]: {
      flexDirection: 'row',
      gap: '10px',
    },
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      flexWrap: 'wrap',
    },
  },
});

export const buttonFlex = style({
  display: 'flex',
  gap: '4px',
});

export const button = style({
  padding: '4px 6px',
  borderRadius: '4px',
});

export const dateInput = style({
  fontSize: vars.fonts.body1,

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      fontSize: vars.fonts.m_body1,
    },
  },
});
