import { BREAKPOINTS } from '@/common/constants';
import { vars } from '@/common/styles/theme.css';
import { style } from '@vanilla-extract/css';
import { fadeInRight } from '@/common/styles/animation.css';
export const Logo = style({
  width: '50px',
  height: '36px',
  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.tablet}px)`]: {
      width: '39px',
      height: '28px',
    },
  },
});
export const DesktopInnerWrapper = style({
  padding: '10px 20px',
  maxWidth: '1392px',
  position: 'relative',
  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop - 1}px)`]: {
      display: 'none',
    },
  },
});

export const ButtonStyle = style({
  borderRadius: '100px',
  padding: '8px 16px',
  fontWeight: '600',
  fontSize: vars.fonts.body3,
  marginLeft: '8px',
  flexShrink: 0,
});

export const RightArea = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'end',
});

export const SearchBar = style({
  width: '100%',
  padding: '10.5px 16px',
  marginRight: '24px',
});

export const searchIcon = style({
  width: '31px',
  height: '31px',
  right: '7px',
  cursor: 'pointer',
});

export const InputCombobox = style({
  width: '435px',
  marginRight: '24px',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      width: '100%',
      marginRight: '0px',
    },
  },
});

// mobile
export const MobileInnerWrapper = style({
  padding: '10px 20px',
  width: '100%',
  maxWidth: '1024px',

  '@media': {
    [`screen and (min-width: ${BREAKPOINTS.desktop}px)`]: {
      display: 'none',
    },
  },
});

export const MobileSearchIcon = style({
  width: '31px',
  height: '31px',
  marginRight: '20px',
  cursor: 'pointer',
  color: vars.colors.surface.on_surf,
});

export const MobileHamburgerIcon = style({
  width: '31px',
  height: '31px',
  cursor: 'pointer',
});

export const ComboBoxContainer = style({
  position: 'absolute',
  width: '100%',
  left: '0',
  top: '52px',
  height: '85px',
  backgroundColor: vars.colors.surface.bright,
  display: 'flex',
  justifyContent: 'start',
  alignItems: 'center',
  padding: '20px',
});

export const MobileBackdrop = style({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  zIndex: -1,
});

export const SideMenu = style({
  position: 'fixed',
  top: '60px',
  borderTopLeftRadius: '8px',
  borderBottomLeftRadius: '8px',
  right: '0',
  width: '55%',
  height: '100vh',
  backgroundColor: vars.colors.surface.bright,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'start',
  alignItems: 'start',
  padding: '18px 12px',
  animation: `${fadeInRight} 0.3s ease-in-out`,
  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.tablet}px)`]: {
      top: '52px',
    },
  },
});

export const MenuItem = style({
  color: vars.colors.surface.on_surf,
  fontSize: vars.fonts.m_title4,
  width: '100%',
  fontWeight: 500,
  padding: '18px 17px 18px 8px',
  borderTop: `1px solid ${vars.colors.surface.cont_3}`,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const label = style({
  color: vars.colors.surface.outline_var,
  fontSize: vars.fonts.m_body2,
  fontWeight: 600,
  marginBottom: '6px',
});

export const myInfo = style({
  width: '100%',
  backgroundColor: vars.colors.surface.default,
  borderRadius: '6px',
  marginBottom: '12px',
  display: 'flex',
  justifyContent: 'start',
  alignItems: 'center',
  padding: '14px 12px',
  border: `1px solid ${vars.colors.surface.cont_2}`,
});

export const name = style({
  fontSize: vars.fonts.m_title4,
  color: vars.colors.primary.default,
  fontWeight: 500,
});

export const ButtonStyle2 = style({
  fontSize: vars.fonts.body2,
  fontWeight: 500,
  marginRight: '30px',

  '@media': {
    [`screen and (max-width: 1080px)`]: {
      marginRight: '20px',
    },
    [`screen and (max-width: ${BREAKPOINTS.tablet}px)`]: {
      marginRight: '10px',
    },
  },
});

export const SupportButton = style({
  display: 'flex',
  alignItems: 'center',
  gap: '2px',
  height: '40px',
  padding: '0 12px',
  marginLeft: '8px',
  borderRadius: '999px',
  border: 'none',
  background: 'transparent',
  color: vars.colors.white,
  fontSize: vars.fonts.body3,
  fontWeight: 600,
  cursor: 'pointer',
  whiteSpace: 'nowrap',
});

export const AuthButton = style({
  display: 'flex',
  alignItems: 'center',
  gap: '2px',
  height: '40px',
  marginLeft: '8px',
  borderRadius: '999px',
  border: 'none',
  backgroundColor: vars.colors.white,
  color: vars.colors.primary.default,
  fontSize: vars.fonts.body3,
  fontWeight: 600,
  cursor: 'pointer',
  whiteSpace: 'nowrap',
});

export const PersonWrapper = style({
  display: 'flex',
  alignItems: 'center',
  gap: '6px',
  height: '25px',
  marginLeft: '10px',
  marginRight: '30px',
  cursor: 'pointer',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      marginRight: '20px',
    },
    [`screen and (max-width: ${BREAKPOINTS.tablet}px)`]: {
      display: '10px',
    },
  },
});

export const Nametext = style({
  fontSize: vars.fonts.body2,
  fontWeight: 700,
  lineHeight: '25px',
  color: vars.colors.white,
});

export const UserDropdownIcon = style({
  display: 'block',
  width: '18px',
  height: '18px',
  flexShrink: 0,
  filter: 'brightness(0) invert(1)',
  transition: 'transform 140ms ease-out',
  transform: 'rotate(0deg)',
});

export const PrimaryDropdownIcon = style({
  display: 'block',
  width: '18px',
  height: '18px',
  flexShrink: 0,
  transition: 'transform 140ms ease-out',
  transform: 'rotate(0deg)',
});

export const UserDropdownIconOpen = style({
  transform: 'rotate(180deg)',
});

export const UserDropdownPanel = style({
  top: '38px',
  left: '0',
  right: 'auto',
  width: '144px',
  padding: '6px 0',
});

export const SupportDropdownPanel = style({
  top: '42px',
  left: '0',
  right: 'auto',
  width: '144px',
  padding: '6px 0',
});

export const AuthDropdownPanel = style({
  top: '48px',
  left: '50%',
  right: 'auto',
  translate: '-50% 0',
  width: '112px',
  padding: '6px 0',
});

export const UserDropdownItem = style({
  width: '100%',
  padding: '10px 12px',
  color: vars.colors.surface.on_surf,
  fontSize: vars.fonts.body3,
  fontWeight: 500,
  whiteSpace: 'nowrap',
  cursor: 'pointer',

  ':hover': {
    backgroundColor: vars.colors.surface.cont_1,
  },
});
