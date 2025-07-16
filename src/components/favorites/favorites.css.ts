import { style } from '@vanilla-extract/css';
import { vars } from '@/common/styles/theme.css';
import { BREAKPOINTS } from '@/common/constants';

export const lottieContainer = style({
  width: '100%',
  height: '100px',
});

export const emptyText = style({
  width: '100%',
  backgroundColor: 'white',
  height: '700px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  maxWidth: '1392px',
  margin: '0 auto',
  borderRadius: '8px',
  fontSize: vars.fonts.title3,
  fontWeight: 500,
  color: '#E0E1E3',
  marginTop: '20px',
  marginBottom: '180px',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      marginTop: '16px',
      marginBottom: '80px',
      fontSize: '16px',
      fontWeight: 400,
      height: '400px',
      marginLeft: '20px',
      marginRight: '20px',
    },
  },
});
