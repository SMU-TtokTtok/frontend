import { BREAKPOINTS } from '@/common/constants';
import { fadeInRight } from '@/common/styles/animation.css';
import { vars } from '@/common/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const Logo = style({
  width: '50px',
  height: '36px',
  cursor: 'pointer',
  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.tablet}px)`]: {
      width: '40px',
      height: '28px',
    },
  },
});

export const AdminMessage = style({
  fontSize: vars.fonts.body2,
  color: vars.colors.primary.fixed_dim,
  fontWeight: 400,
});

export const DesktopInnerWrapper = style({
  padding: '10px 40px',
  maxWidth: '1840px',
  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop - 1}px)`]: {
      display: 'none',
    },
  },
});

export const SideMenu = style({
  position: 'fixed',
  top: '60px',
  borderTopLeftRadius: '8px',
  borderBottomLeftRadius: '8px',
  right: '0',
  width: '50%',
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

export const MobileBackdrop = style({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  zIndex: -1,
});

export const MobileHamburgerIcon = style({
  width: '31px',
  height: '31px',
  cursor: 'pointer',
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

export const RightArea = style({
  backgroundColor: vars.colors.primary.base,
  borderRadius: '8px',
  padding: '8px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'start',
});
export const RightAreaIcon = style({
  width: '20px',
  height: '20px',
  backgroundColor: '#A5BDF5',
  borderRadius: '50%',
});

export const RightAreaText = style({
  fontSize: vars.fonts.m_title4,
  color: vars.colors.primary.default,
  fontWeight: 600,
  marginLeft: '8px',
});

export const RightSideContainer = style({
  display: 'flex',
  justifyContent: 'start',
  alignItems: 'center',
  gap: '30px',
});

export const RightSideText = style({
  fontSize: vars.fonts.body2,
  color: vars.colors.surface.bright,
  fontWeight: 500,
  cursor: 'pointer',
});
