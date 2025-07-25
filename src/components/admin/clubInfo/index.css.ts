import { vars } from '@/common/styles/theme.css';
import { style } from '@vanilla-extract/css';
// import { recipe } from '@vanilla-extract/recipes';
import { BREAKPOINTS } from '@/common/constants';

export const container = style({
  paddingLeft: '300px',
  paddingRight: '380px',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.largeDesktop}px)`]: {
      paddingLeft: '246px',
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
});

export const imgContainer = style({
  position: 'relative',
});

export const editIcon = style({
  position: 'absolute',
  bottom: '-16px',
  right: '-16px',
});
