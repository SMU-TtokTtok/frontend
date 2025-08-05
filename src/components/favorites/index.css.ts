import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { vars } from '@/common/styles/theme.css';
import { BREAKPOINTS } from '@/common/constants/index';

export const HeaderWrapper = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '80px',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.largeDesktop}px)`]: {
      padding: '0 20px',
    },

    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      marginTop: '20px',
    },
  },
});

export const HeaderContainer = recipe({
  base: {
    display: 'flex',
    fontSize: vars.fonts.title2,
    justifyContent: 'space-between',
    maxWidth: '1392px',
    width: '100%',
    '@media': {
      [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
        height: '80px',
      },
    },
  },
  variants: {
    isSearch: {
      true: {
        alignItems: 'flex-end',
      },
      false: {
        alignItems: 'center',
      },
    },
  },
});

export const SortFlex = style({
  display: 'flex',
  backgroundColor: 'white',
  borderRadius: '8px',
  padding: '4px',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      alignSelf: 'flex-end',
      padding: '0px',
      backgroundColor: 'transparent',
    },
  },
});

export const TitleText = style({
  fontSize: vars.fonts.title2,
  fontWeight: '700',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      fontSize: '20px',
      alignSelf: 'flex-start',
    },
  },
});

export const SearchTitleText = style({
  fontSize: vars.fonts.body2,

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      fontSize: vars.fonts.m_title2,
      fontWeight: '500',
      alignSelf: 'flex-start',
    },
  },
});

export const SearchTitleTextSpan = style({
  color: '#2650db',
  fontWeight: '500',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      fontWeight: '600',
    },
  },
});

export const showOnMobileBr = style({
  display: 'none',
  '@media': {
    'screen and (max-width: 1080px)': {
      display: 'inline',
    },
  },
});

export const ButtonStyle = recipe({
  base: {
    fontSize: vars.fonts.body2,
    fontWeight: '600',
    padding: '10px 16px',
    borderRadius: '6px',
    '@media': {
      [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
        padding: '0px',
        backgroundColor: 'transparent !important',
        fontSize: '14px',
        borderRadius: '0px',
      },
    },
  },
  variants: {
    selected: {
      true: {
        '@media': {
          [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
            color: '#55637D !important',
            textDecoration: 'underline',
            textUnderlineOffset: '4px',
          },
        },
      },
      false: {
        '@media': {
          [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
            color: '#B8BEC9 !important',
          },
        },
      },
    },
    position: {
      first: {
        '@media': {
          [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
            paddingRight: '6px',
            paddingLeft: '0px',
          },
        },
      },
      last: {
        '@media': {
          [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
            paddingLeft: '6px',
            paddingRight: '0px',
          },
        },
      },
      middle: {
        '@media': {
          [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
            paddingLeft: '6px',
            paddingRight: '6px',
            borderRight: '1px solid #B8BEC9',
            borderLeft: '1px solid #B8BEC9',
          },
        },
      },
    },
  },
});
