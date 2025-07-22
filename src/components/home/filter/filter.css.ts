import { BREAKPOINTS } from '@/common/constants';
import { vars } from '@/common/styles/theme.css';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const container = style({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  marginBottom: '13px',
  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.largeDesktop}px)`]: {
      padding: '0 20px 72px 20px',
    },
  },
});

export const innerWrapper = style({
  maxWidth: '1392px',
  width: '100%',
  marginTop: '2.777rem',
  borderRadius: '8px',
  backgroundColor: vars.colors.surface.cont_1_var,
  padding: '1.555rem 1.778rem 2.222rem 1.778rem',
  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.tablet}px)`]: {
      padding: '14px',
    },
  },
});

export const filterHeaderWrapper = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '1.555rem',
});

export const headerLeftSide = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '0.444rem',
});
export const headerRightSide = style({
  display: 'flex',
  justifyContent: 'start',
  alignItems: 'center',
  gap: '0.444rem',
  backgroundColor: vars.colors.surface.cont_2_var,
  padding: '0.444rem',
  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.tablet}px)`]: {
      position: 'absolute',
      bottom: '0',
      right: '20px',
      backgroundColor: vars.colors.surface.variant,
    },
  },
});

export const headerLeftSideButton = recipe({
  base: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '5.5rem',
    backgroundColor: vars.colors.surface.default,
    color: vars.colors.surface.on_surf_var,
    fontSize: vars.fonts.title4,
    fontWeight: '600',
    padding: '0.667rem 0.778rem',
    borderRadius: '0.444rem',
    '@media': {
      [`screen and (max-width: ${BREAKPOINTS.tablet}px)`]: {
        fontSize: vars.fonts.m_title4,
        padding: '11px 12px',
      },
    },
  },
  variants: {
    style: {
      category: {
        width: '6.5rem',
        '@media': {
          [`screen and (max-width: ${BREAKPOINTS.tablet}px)`]: {
            width: '93px',
          },
        },
      },
      recruit: {
        width: '7.444rem',
        '@media': {
          [`screen and (max-width: ${BREAKPOINTS.tablet}px)`]: {
            width: '107px',
          },
        },
      },
    },
  },
});

export const selectionGroup = style({
  display: 'flex',
  justifyContent: 'start',
  alignItems: 'center',
  gap: '0.444rem',
  flexWrap: 'wrap',
  paddingRight: '200px',
  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.tablet}px)`]: {
      paddingRight: '0',
    },
  },
});

export const ButtonStyle = recipe({
  base: {
    padding: '0.556rem 0.889rem',
    borderRadius: '0.22rem',
    '@media': {
      [`screen and (max-width: ${BREAKPOINTS.tablet}px)`]: {
        padding: '8px 10px',
      },
    },
  },
  variants: {
    style: {
      body: {
        fontSize: vars.fonts.body1,
        fontWeight: '500',
        '@media': {
          [`screen and (max-width: ${BREAKPOINTS.tablet}px)`]: {
            fontSize: vars.fonts.m_body1,
          },
        },
      },
      headerRightside: {
        fontSize: vars.fonts.body2,
        fontWeight: '400',
        '@media': {
          [`screen and (max-width: ${BREAKPOINTS.tablet}px)`]: {
            fontSize: vars.fonts.m_body2,
          },
        },
      },
      reset: {
        padding: '0.888rem 0',
        width: '11.333rem',
        fontSize: vars.fonts.body1,
        fontWeight: '600',
        position: 'absolute',
        right: '0',
        bottom: '0px',
        '@media': {
          [`screen and (max-width: ${BREAKPOINTS.tablet}px)`]: {
            position: 'relative',
            padding: '0.888rem 0',
            width: '100%',
            marginTop: '20px',
            fontSize: vars.fonts.m_body1,
          },
        },
      },
    },
    isSelected: {
      true: {
        backgroundColor: vars.colors.primary.base,
        color: vars.colors.primary.default,
        fontWeight: 600,
      },
      false: {
        backgroundColor: vars.colors.surface.default,
        color: vars.colors.surface.outline,
        fontWeight: 400,
      },
    },
  },
});

export const DownArrow = style({
  width: '1.56rem',
  height: '1.56rem',
  marginLeft: '0.444rem',
  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.tablet}px)`]: {
      width: '19px',
      height: '19px',
    },
  },
});

export const horizonLine = style({
  display: 'block',
  width: '100%',
  height: '2px',
  backgroundColor: '#E2E2E2',
  marginBottom: '1.555rem',
});

export const filterBodyWrapper = style({
  marginLeft: '0.444rem',
  position: 'relative',
});

export const title = recipe({
  base: {
    fontSize: vars.fonts.body1,
    fontWeight: '600',
    color: vars.colors.surface.on_surf,
    whiteSpace: 'nowrap',
    '@media': {
      [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
        marginBottom: '8px',
      },
      [`screen and (max-width: ${BREAKPOINTS.tablet}px)`]: {
        marginBottom: '8px',
        fontSize: vars.fonts.m_body1,
      },
    },
  },
  variants: {
    margin: {
      primaryType: {
        marginRight: '5.833rem',
      },
      secondaryType: {
        marginRight: '	7.667rem',
      },
    },
  },
});

export const filterWrapper = recipe({
  base: {
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'start',
    '@media': {
      [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
        flexDirection: 'column',
      },
    },
  },
  variants: {
    marginBottom: {
      grade: {
        marginBottom: '	0.889rem',
      },
    },
  },
});

export const filterSection = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'start',
  alignItems: 'start',
});

export const firstTypeWrapper = style({
  display: 'flex',
  justifyContent: 'start',
  alignItems: 'center',
  gap: '0.444rem',
  marginBottom: '	0.556rem',
});

export const categoryWrapper = style({
  display: 'flex',
  justifyContent: 'start',
  alignItems: 'center',
});

export const filterBodyBottomWrapper = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'end',
});

export const panelPosition = style({
  top: '52px',
});

export const dropDownItem = recipe({
  base: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0.889rem 0',
    fontSize: vars.fonts.title4,
    fontWeight: '600',
    selectors: {
      '&:hover': {
        backgroundColor: vars.colors.primary.base,
        color: vars.colors.primary.default,
      },
    },
    '@media': {
      [`screen and (max-width: ${BREAKPOINTS.tablet}px)`]: {
        fontSize: vars.fonts.m_title4,
      },
    },
  },
  variants: {
    style: {
      category: {
        width: '6.5rem',
        '@media': {
          [`screen and (max-width: ${BREAKPOINTS.tablet}px)`]: {
            width: '93px',
          },
        },
      },
      recruit: {
        width: '7.444rem',
        '@media': {
          [`screen and (max-width: ${BREAKPOINTS.tablet}px)`]: {
            width: '107px',
          },
        },
      },
    },
  },
});
