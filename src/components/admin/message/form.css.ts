import { style, createVar } from '@vanilla-extract/css';
import { vars } from '@/common/styles/theme.css';
import { BREAKPOINTS } from '@/common/constants';

export const sidebarTop = createVar();

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '30px',
  marginBottom: '200px',
  position: 'relative',
});

export const messageContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '14px',
  padding: '26px 24px',
  backgroundColor: 'white',
  borderRadius: '8px',
});

export const sectionTitle = style({
  fontSize: '18px',
  fontWeight: 600,
  color: '#030304',
});

export const mainContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  padding: '18px 20px',
  backgroundColor: '#F8F8F9',
  borderRadius: '4px',
});

export const divider = style({
  width: '100%',
  height: '1px',
  backgroundColor: '#E0E0E0',
});

export const input = style({
  width: '100%',
  fontSize: vars.fonts.title4,
  fontWeight: 600,
  lineHeight: '120%',

  selectors: {
    '&::placeholder': {
      color: '#A3A3A3',
    },
  },
});

export const textarea = style({
  width: '100%',
  fontSize: vars.fonts.body2,
  fontWeight: 400,
  minHeight: '100px',

  selectors: {
    '&::placeholder': {
      color: '#CCCED2',
    },
  },
});

export const submitContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  width: '330px',
  alignSelf: 'flex-end',
  top: sidebarTop,
  right: '-350px',
  position: 'absolute',
  transition: 'top 0.7s ease-out',
  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.largeDesktop}px)`]: {
      width: '236px',
      right: 0,
      top: '-432px',
      transition: 'none',
    },
  },
});

export const button = style({
  width: '100%',
  borderRadius: '6px',
  padding: '16px 0',
  fontSize: vars.fonts.body2,
  fontWeight: 600,
});

export const note = style({
  fontSize: vars.fonts.body3,
  fontWeight: 500,
  color: '#C3C3C3',
  textAlign: 'center',
});

export const errorText = style({
  fontSize: vars.fonts.body3,
  fontWeight: 400,
  color: '#FF3B30',
  marginTop: '4px',
});
