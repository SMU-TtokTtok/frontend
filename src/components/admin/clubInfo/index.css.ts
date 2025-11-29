import { vars } from '@/common/styles/theme.css';
import { style } from '@vanilla-extract/css';
// import { recipe } from '@vanilla-extract/recipes';
import { BREAKPOINTS } from '@/common/constants';

export const container = style({
  paddingLeft: '280px',
  paddingRight: '374px',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.largeDesktop}px)`]: {
      paddingLeft: '246px',
      paddingRight: '20px',
    },
    [`screen and (max-width: ${BREAKPOINTS.desktop - 1}px)`]: {
      paddingLeft: '20px',
      paddingRight: '20px',
    },
  },
});

export const wrapper = style({
  // maxWidth: '1038px',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'start',
  paddingBottom: '200px',
  // alignItems: 'start',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.largeDesktop}px)`]: {
      position: 'relative',
      maxWidth: '100%',
    },
  },
});

export const title = style({
  fontSize: vars.fonts.title3,
  fontWeight: '700',
  marginTop: '50px',
  marginBottom: '20px',
});

export const flexRow = style({
  gap: '24px',
  display: 'flex',
  marginBottom: '28px',
  // alignItems: 'center',
  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      position: 'relative',
    },
  },
});

export const card = style({
  padding: '18px 24px',
});
export const clubName = style({
  fontSize: vars.fonts.title3,
  fontWeight: '600',
});

export const imgStyle = style({
  // objectFit: 'cover',
  borderRadius: 8,
  alignSelf: 'stretch',
  width: '212px',
  height: '100%',

  selectors: {
    '&.editing': {
      cursor: 'pointer',
    },
  },

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      width: '100%',
      height: '100%',
      borderRadius: '100px',
    },
  },
});

export const imgContainer = style({
  position: 'relative',
  width: '212px',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      position: 'absolute',
      top: '0',
      left: '0',
      width: '58px',
      height: '58px',
    },
  },
});

export const editIcon = style({
  position: 'absolute',
  bottom: '-16px',
  right: '-16px',
  cursor: 'pointer',
});

export const loading = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  width: '100vw',
});
