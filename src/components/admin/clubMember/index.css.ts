import { style } from '@vanilla-extract/css';
import { vars } from '@/common/styles/theme.css';
import { BREAKPOINTS } from '@/common/constants';

export const wrapper = style({
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

export const container = style({
  // maxWidth: '1038px',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
});

export const memberPanel = style({
  width: '100%',
  backgroundColor: vars.colors.surface.bright,
  padding: '20px',
  borderRadius: '8px',
  marginTop: '20px',
  marginBottom: '200px',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      padding: '14px',
      marginTop: '16px',
    },
  },
});

export const searchResultContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
});

export const loading = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  width: '100vw',
});

export const searchWrapper = style({
  marginTop: '3.111rem',
  width: '100%',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.largeDesktop}px)`]: {
      marginTop: '60px',
    },

    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      marginTop: '30px',
    },
  },
});
export const searchInput = style({
  width: '100%',
  padding: '16px 22px',
  fontSize: vars.fonts.body2,

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      padding: '12px',
      fontSize: `${vars.fonts.m_body2} !important`,
    },
  },
});

export const iconStyle = style({
  width: '31px',
  height: '31px',
  right: '7px',
  cursor: 'pointer',
});

export const SearchEmptyText = style({
  fontSize: vars.fonts.body2,

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      fontSize: `${vars.fonts.m_body2}`,
    },
  },
});
