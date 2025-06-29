import { BREAKPOINTS } from '@/common/constants';
import { vars } from '@/common/styles/theme.css';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const container = style({
  paddingLeft: '21.222rem',
  paddingRight: '27.778rem',
  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.largeDesktop}px)`]: {
      paddingLeft: '246px',
      paddingRight: '20px',
    },
  },
});

export const wrapper = style({
  position: 'relative',
  maxWidth: '1038px',
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

export const evaluationTabs = style({
  //marginTop: '2.22rem',
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
  padding: '1.22rem 1.78rem',
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
        fontWeight: 600,
      },
    },
  },
});

export const checkbox = style({
  width: '1rem',
  height: '1rem',
});

// 지원자 아이템

export const applicantItemWrapper = style({
  padding: ' 16px 1.111rem',
  backgroundColor: vars.colors.surface.default,
  marginBottom: '0.556rem',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  cursor: 'pointer',
});

export const profileSection = style({
  display: 'flex',
  justifyContent: 'start',
  alignItems: 'center',
  gap: 8,
});

export const applicantGrade = style({
  width: '49px',
  height: '1.5rem',
  fontSize: vars.fonts.body2,
  padding: '0.222rem  ',
  textAlign: 'center',
  border: 'none',
});

export const applicantName = style({
  fontSize: vars.fonts.body1,
  fontWeight: 600,
  color: vars.colors.surface.on_surf,
});

export const verticalLine = style({
  width: '1px',
  height: '21px',
  backgroundColor: vars.colors.surface.outline_var,
});

export const applicantDepartment = style({
  fontSize: vars.fonts.body2,
  fontWeight: 400,
  color: vars.colors.surface.outline,
});

export const applicantStatus = style({
  fontSize: vars.fonts.body1,
  fontWeight: 400,
  color: vars.colors.surface.on_surf,
});

export const dropDownButtonStyle = style({
  padding: '8px 8px 8px 16px',
  fontSize: vars.fonts.body2,
  width: '92px',
  borderRadius: '100px',
});

export const dropDownItem = style({
  width: '92px',
  cursor: 'pointer',
  color: vars.colors.surface.on_surf,
  fontSize: vars.fonts.body2,
  fontWeight: 600,
  textAlign: 'center',
  padding: '12px 20px',
  selectors: {
    '&:hover': {
      backgroundColor: vars.colors.primary.default,
      color: vars.colors.white,
    },
  },
});
