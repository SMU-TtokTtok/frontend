import { style } from '@vanilla-extract/css';
import { vars } from '@/common/styles/theme.css';
import { BREAKPOINTS } from '@/common/constants';

export const container = style({
  position: 'fixed',
  top: '212px',
  right: '3.8%',
  width: '330px',

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
  gap: '10px',
});

export const flexRow = style({
  display: 'flex',
  gap: '28px',
});

export const grayText = style({
  color: '#818181',
  fontSize: '16px',
});

export const blackText = style({
  color: '#030304',
  fontSize: '18px',
});

export const modifyButton = style({
  width: '100%',
  textAlign: 'center',
  padding: '16px 0',
  borderRadius: '6px',
  fontSize: vars.fonts.body1,
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
  },
});

export const numberInput = style({
  appearance: 'textfield',
  WebkitAppearance: 'textfield',
  padding: '2px 4px',
  border: '1px solid #ccc',
  font: '-webkit-small-control',
  height: '24px',
});
export const dateFlex = style({
  display: 'flex',
  flexDirection: 'column',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.largeDesktop}px)`]: {
      flexDirection: 'row',
      gap: '10px',
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
