import { style } from '@vanilla-extract/css';
import { BREAKPOINTS } from '@/common/constants';

export const wrapper = style({
  minHeight: '90vh',
  marginTop: '80px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: '#F5F5F6',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      padding: '0 20px',
    },
  },
});

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '54px 40px 70px 40px',
  borderRadius: '8px',
  backgroundColor: 'white',
  gap: '16px',
  width: '500px',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      width: '100%',
      padding: '31px 40px 48px 40px',
      gap: '8px',
    },
  },
});

export const numberText = style({
  fontSize: '90px',
  fontWeight: '500',
  color: '#0052EC',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      fontSize: '60px',
    },
  },
});

export const stringTextContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '10px',
});

export const stringText = style({
  fontSize: '23px',
  fontWeight: '600',
  color: '#272E3B',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      fontSize: '18px',
    },
  },
});

export const stringText2 = style({
  fontSize: '18px',
  fontWeight: '500',
  color: '#55637D',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      fontSize: '14px',
      lineHeight: '20px',
    },
  },
});

export const stringText2Break = style({
  display: 'none',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      display: 'block',
    },
  },
});

export const notFoundImage = style({
  width: '111px',
  height: '111px',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      width: '74px',
      height: '74px',
    },
  },
});
