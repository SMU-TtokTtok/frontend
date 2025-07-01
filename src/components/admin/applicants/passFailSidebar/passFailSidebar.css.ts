import { BREAKPOINTS } from '@/common/constants';
import { vars } from '@/common/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const rightSidebar = style({
  position: 'fixed',
  right: 146,
  top: 129,

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.largeDesktop}px)`]: {
      position: 'static',
      width: '100%',
      marginTop: '63px',
    },
  },
});

export const panel = style({
  //maxWidth: '330px',
  width: '330px',
  height: 'auto',
  backgroundColor: vars.colors.surface.bright,
  borderRadius: '0.444rem',
  padding: '1rem 1.111rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.largeDesktop}px)`]: {
      flexDirection: 'row',
      width: '100%',
    },
  },
});

export const sendButtonWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  marginTop: '28px',
  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.largeDesktop}px)`]: {
      position: 'absolute',
      top: '40px',
      right: '0px',
      marginTop: '0px',
    },
  },
});

export const sendButton = style({
  width: '330px',
  height: '53px',
  borderRadius: '0.333rem',
  fontSize: vars.fonts.body2,
  fontWeight: 600,
  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.largeDesktop}px)`]: {
      width: '236px',
    },
  },
});

export const buttonDescription = style({
  fontSize: vars.fonts.body3,
  fontWeight: 600,
  color: vars.colors.surface.dim,
  marginTop: '10px',
  textAlign: 'center',
});

export const labelWrapper = style({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
});

export const sideBarLabel = style({
  fontSize: vars.fonts.body1,
  fontWeight: 700,
  color: vars.colors.surface.on_surf,
});

export const plus = style({
  fontSize: vars.fonts.body3,
  fontWeight: 500,
  textDecoration: 'underline',
  color: vars.colors.surface.outline,
  cursor: 'pointer',
});

export const listContainer = style({
  width: '100%',
});

export const ItemWrapper = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  padding: ' 0.472rem 0.444rem',
  backgroundColor: vars.colors.surface.default,
  marginTop: '0.333rem',
  cursor: 'pointer',
});

export const profileSection = style({
  display: 'flex',
  justifyContent: 'start',
  alignItems: 'center',
  gap: 8,
});

export const grade = style({
  width: '49px',
  height: '1.5rem',
  fontSize: vars.fonts.body3,
  padding: '0.222rem  ',
  textAlign: 'center',
  border: 'none',
});

export const name = style({
  fontSize: vars.fonts.body3,
  fontWeight: 600,
  color: vars.colors.surface.on_surf,
});

export const verticalLine = style({
  width: '1px',
  height: '21px',
  backgroundColor: vars.colors.surface.outline_var,
});

export const department = style({
  fontSize: vars.fonts.body3,
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
