import { BREAKPOINTS } from '@/common/constants';
import { vars } from '@/common/styles/theme.css';
import { style } from '@vanilla-extract/css';
// empty 페이지
export const emptyContainer = style({
  padding: '44px 146px 0 382px',
  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.largeDesktop}px)`]: {
      paddingLeft: '246px',
      paddingRight: '20px',
    },
  },
});

export const emptyWrapper = style({
  marginTop: '24px',
  backgroundColor: vars.colors.surface.bright,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '80vh',
});
export const emptyDescription = style({
  fontSize: vars.fonts.title4,
  fontWeight: 600,
  color: vars.colors.surface.on_surf,
  textAlign: 'center',
});

export const makeFormButton = style({
  marginTop: '14px',
  fontSize: vars.fonts.body1,
  fontWeight: 600,
  padding: '16px 24px',
  borderRadius: '6px',
});

// form 수정 페이지
export const formContainer = style({
  padding: '44px 500px 0 382px',
});

export const title = style({
  fontSize: vars.fonts.title2,
  fontWeight: 600,
  color: vars.colors.surface.on_surf,
});
