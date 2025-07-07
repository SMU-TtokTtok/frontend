import { style } from '@vanilla-extract/css';
import { vars } from '@/common/styles/theme.css';
import { BREAKPOINTS } from '@/common/constants';

export const clubProfile = style({
  display: 'flex',
  gap: '24px',

  position: 'relative',
});

export const imageStyle = style({
  borderRadius: '8px',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      width: '58px',
      height: '58px',
      borderRadius: '100px',
      position: 'absolute',
      top: '22px',
      left: '18px',
      zIndex: 1,
    },
  },
});

export const RightFlex = style({
  flex: '1 0 0',
  backgroundColor: 'white',
  borderRadius: '8px',
  padding: '22px',
  position: 'relative',
});

export const type = style({
  fontSize: vars.fonts.body1,
  fontWeight: 500,

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      marginLeft: '70px',
      fontSize: '14px',
    },
  },
});

export const name = style({
  fontSize: vars.fonts.title3,
  fontWeight: 600,
  marginBottom: '6px',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      marginLeft: '70px',
      fontSize: '18px',
      marginBottom: '2px',
    },
  },
});

export const memberFlex = style({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '13px',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      marginLeft: '70px',
    },
  },
});

export const member = style({
  fontSize: vars.fonts.body1,
  fontWeight: 500,
  color: '#55637D',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      fontSize: '14px',
    },
  },
});

export const description = style({
  fontSize: vars.fonts.body2,
  marginBottom: '16px',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      paddingTop: '12px',
      borderTop: '1px solid #E0E0E0',
    },
  },
});

export const tagFlex = style({
  display: 'flex',
  gap: '8px',
});

export const tagStyle = style({
  padding: '4px 12px',
  borderRadius: '100px',
});

export const star = style({
  position: 'absolute',
  top: '22px',
  right: '30px',
  cursor: 'pointer',
});
