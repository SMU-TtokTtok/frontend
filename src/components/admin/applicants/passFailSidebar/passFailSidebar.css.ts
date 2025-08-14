import { BREAKPOINTS } from '@/common/constants';
import { vars } from '@/common/styles/theme.css';
import { style, styleVariants, createVar } from '@vanilla-extract/css';

export const sidebarTop = createVar();

export const rightSidebar = style({
  position: 'absolute',
  right: '-350px',

  top: sidebarTop,
  transition: 'top 0.7s ease-out',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.largeDesktop}px)`]: {
      position: 'static',
      width: '100%',
      marginTop: '63px',
    },
  },
});

export const rightSidebar2 = style({
  position: 'absolute',
  right: '-350px',

  top: sidebarTop,
  transition: 'top 0.7s ease-out',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.largeDesktop}px)`]: {
      position: 'static',
      width: '100%',
      marginTop: '63px',
    },
  },
});

export const panel = style({
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

export const buttonWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  marginTop: '28px',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.largeDesktop}px)`]: {
      position: 'absolute',
      top: '380px',
      right: '0px',
      marginTop: '0px',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'start',
      width: '100%',
      gap: '12px',
    },
  },
});

export const connectButtonWrapper = style({
  width: '100%',
});

export const baseButton = styleVariants({
  sendButton: {
    width: '330px',
    height: '53px',
    borderRadius: '0.333rem',
    fontSize: vars.fonts.body2,
    fontWeight: 600,
    '@media': {
      [`screen and (max-width: ${BREAKPOINTS.largeDesktop}px)`]: {
        width: '100%',
        maxWidth: '550px',
      },
    },
  },
  connectButton: {
    width: '330px',
    height: '53px',
    borderRadius: '0.333rem',
    fontSize: vars.fonts.body2,
    fontWeight: 600,
    border: `1px solid ${vars.colors.primary.fixed}`,
    marginBottom: '10px',
    '@media': {
      [`screen and (max-width: ${BREAKPOINTS.largeDesktop}px)`]: {
        width: '100%',
        maxWidth: '550px',
      },
    },
  },
});

export const sendButtonWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  width: '100%',
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
  minHeight: '170px', //추가
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
  borderRadius: '6px',
  selectors: {
    '&.disableCursor': {
      cursor: 'default',
    },
  },
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
  borderRadius: '4px',
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
      backgroundColor: vars.colors.primary.base,
      color: vars.colors.primary.default,
    },
  },
});

export const passFailListModal = style({
  padding: '18px 26px 30px 26px',
  width: '600px',
});

export const modalBody = style({
  maxHeight: '280px',
  overflowY: 'auto',
  marginTop: '8px',
});

export const empty = styleVariants({
  modal: {
    fontSize: vars.fonts.body1,
    fontWeight: 500,
    color: vars.colors.surface.outline,
    textAlign: 'center',
    marginTop: '20px',
  },
  sideBar: {
    fontSize: vars.fonts.body3,
    fontWeight: 500,
    color: vars.colors.surface.outline,
    marginTop: '20px',
    minHeight: '150px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
