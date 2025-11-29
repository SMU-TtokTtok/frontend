import { style, createVar } from '@vanilla-extract/css';
import { vars } from '@/common/styles/theme.css';
import { BREAKPOINTS } from '@/common/constants';

export const sidebarTop = createVar();

export const container = style({
  position: 'absolute',
  width: '330px',
  backgroundColor: 'white',
  padding: '22px 26px',
  borderRadius: '8px',
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  transition: 'top 0.7s ease-out',
  top: sidebarTop,
  right: '24px',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.largeDesktop}px)`]: {
      // display: 'none',
      position: 'static',
      width: '100%',
      marginTop: '20px',
    },
  },
});

export const ItemFlex = style({
  display: 'flex',
  gap: '30px',
  alignItems: 'center',
});

export const GradeText = style({
  fontSize: vars.fonts.body3,
  color: '#818181',
});

export const NumberText = style({
  fontSize: vars.fonts.body1,
  color: '#030304',
  fontWeight: 500,
});

export const GradeContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.largeDesktop}px)`]: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '8px',
    },
  },
});

export const Bar = style({
  display: 'none',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.largeDesktop}px)`]: {
      fontSize: '18px',
      color: '#D2D4D8',
      fontWeight: 300,
      display: 'block',
    },
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      display: 'none',
    },
  },
});
