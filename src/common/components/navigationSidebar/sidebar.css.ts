import { BREAKPOINTS } from '@/common/constants';
import { vars } from '@/common/styles/theme.css';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const sidebarContainer = style({
  position: 'fixed',
  left: 20,
  top: 100,
  bottom: 20,
  height: 'auto',
  display: 'flex',
  flexDirection: 'column',
  width: 240,
  transition: 'background 0.2s',
  borderRadius: '0.444rem',
  backgroundColor: vars.colors.surface.bright,
  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.largeDesktop}px)`]: {
      width: '206px',
    },
  },
});

export const sidebarTitle = style({
  color: vars.colors.surface.outline_var,
  fontSize: vars.fonts.body3,
  fontWeight: 600,
  padding: '20px 20px 10px 20px',
});

export const sidebarItem = recipe({
  base: {
    color: vars.colors.surface.on_surf_var,
    fontSize: vars.fonts.body1,
    fontWeight: 600,
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center',
    padding: '0.972rem 1.556rem',
    transition: 'opacity 0.3s ease',
    ':hover': {
      opacity: '0.9',
    },
  },
  variants: {
    isSelected: {
      true: {
        background: vars.colors.primary.base,
        color: vars.colors.primary.default,
      },
      false: {
        color: vars.colors.surface.on_surf_var,
      },
    },
  },
});

export const sidebarItemImage = style({
  marginRight: '0.444rem',
});
