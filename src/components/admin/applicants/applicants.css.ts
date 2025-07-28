import { BREAKPOINTS } from '@/common/constants';
import { vars } from '@/common/styles/theme.css';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const container = style({
  paddingLeft: '285px',
  paddingRight: '378px',
  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.largeDesktop}px)`]: {
      paddingLeft: '246px',
      paddingRight: '20px',
    },
  },
});

export const wrapper = style({
  position: 'relative',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'start',
  alignItems: 'start',
});

export const title = style({
  fontSize: vars.fonts.title2,
  fontWeight: 700,
  color: vars.colors.surface.on_surf,
  marginTop: '40px',
});

export const searchTitle = style({
  fontSize: vars.fonts.title4,
  fontWeight: 600,
  color: vars.colors.surface.on_surf,
  marginBottom: '0.778rem',
});

export const searchWrapper = style({
  marginTop: '3.111rem',
  width: '100%',
});

export const searchInput = style({
  width: '100%',
  padding: '16px 22px',
});

export const iconStyle = style({
  width: '31px',
  height: '31px',
  right: '7px',
  cursor: 'pointer',
});

export const evaluationTabs = style({
  marginTop: '20px',
  width: '100%',
  display: 'flex',
  justifyContent: 'start',
  alignItems: 'center',
});

export const evaluationButtonWrapper = style({
  width: '100%',
});

export const evaluationButton = recipe({
  base: {
    padding: '1.222rem 0',
    width: '100%',
    fontSize: vars.fonts.body1,
    borderTopLeftRadius: '0.333rem',
    borderTopRightRadius: '0.333rem',
  },
  variants: {
    isSelected: {
      true: {
        fontWeight: 700,
        backgroundColor: vars.colors.primary.fixed,
        color: vars.colors.primary.default,
      },
      false: {
        fontWeight: 400,
        backgroundColor: vars.colors.surface.cont_1,
        color: vars.colors.surface.outline,
      },
    },
  },
});

export const PanelContainer = style({
  width: '100%',
  backgroundColor: vars.colors.surface.bright,
  padding: '16px 20px',
  minHeight: '207px',
  borderBottomLeftRadius: '8px',
  borderBottomRightRadius: '8px',
});

export const filterContainer = style({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '0.67rem',
});

export const filterButton = recipe({
  base: {
    fontSize: vars.fonts.body1,
    padding: '0.56rem 0.89rem',
    borderRadius: '0.333rem',
    fontWeight: 400,
    marginRight: '0.22rem',
  },
  variants: {
    isSelected: {
      true: {
        backgroundColor: vars.colors.primary.base,
        color: vars.colors.primary.default,
        fontWeight: 600,
      },
      false: {
        backgroundColor: vars.colors.surface.bright,
        color: vars.colors.surface.outline,
        fontWeight: 400,
      },
    },
  },
});

export const checkbox = style({
  width: '1rem',
  height: '1rem',
  border: `1px solid ${vars.colors.surface.outline_var}`,
});

export const checkImg = style({
  width: '1rem',
  height: '1rem',
});

export const noResults = style({
  fontSize: vars.fonts.body2,
  fontWeight: 700,
  color: vars.colors.surface.outline,
  textAlign: 'center',
  marginTop: '2rem',
});
