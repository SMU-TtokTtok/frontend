import { BREAKPOINTS } from '@/common/constants';
import { vars } from '@/common/styles/theme.css';
import { style } from '@vanilla-extract/css';
export const Container = style({
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 1,
  width: '100%',
});
export const Wrapper = style({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: vars.colors.primary.default,
});

export const InnerWrapper = style({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.largeDesktop}px)`]: {
      maxWidth: '922px',
    },
  },
});

export const hidden = style({
  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      transform: 'translateY(-100%)',
      transition: 'transform 0.3s ease-in-out',
    },
  },
});

export const visible = style({
  transform: 'translateY(0)',
  transition: 'transform 0.3s ease-in-out',
});
