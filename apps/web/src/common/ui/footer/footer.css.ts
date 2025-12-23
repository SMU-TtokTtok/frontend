import { style } from '@vanilla-extract/css';
import { vars } from '@/common/styles/theme.css';
import { BREAKPOINTS } from '@/common/constants';

export const container = style({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: vars.colors.surface.bright,
});
export const innerWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  width: '100%',
  maxWidth: '1392px',
  padding: '4.5rem 20px',
  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.largeDesktop}px)`]: {
      width: '100%',
      padding: '2.5rem 20px',
    },
  },
});
export const content = style({
  fontSize: vars.fonts.body1,
  fontWeight: 400,
  color: vars.colors.surface.on_surf_var,
  lineHeight: '1.5',
  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.tablet}px)`]: {
      fontSize: vars.fonts.body2,
    },
  },
});
export const logo = style({
  width: '56px',
  height: '41px',
  marginBottom: '8px',
  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.tablet}px)`]: {
      width: '39px',
      height: '28px',
    },
  },
});

export const rowsort = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'start',
  alignItems: 'center',
  gap: '32px',
});
