import { BREAKPOINTS } from '@/common/constants';
import { vars } from '@/common/styles/theme.css';
import { style } from '@vanilla-extract/css';
export const Container = style({
  position: 'fixed',
  top: 0,
  left: 0,
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
  maxWidth: '1392px',
  padding: '0.7778rem 0',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.largeDesktop}px)`]: {
      maxWidth: '922px',
    },
  },
});

export const Logo = style({
  width: '50px',
  height: '36px',
});

export const ButtonStyle = style({
  borderRadius: '100px',
  padding: '8px 16px',
  fontWeight: '600',
  fontSize: vars.fonts.body3,
  marginRight: '8px',
});
