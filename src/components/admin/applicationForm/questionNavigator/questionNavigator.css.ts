import { BREAKPOINTS } from '@/common/constants';
import { vars } from '@/common/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  padding: '22px 24px 26px 24px',
  borderRadius: '8px',
  backgroundColor: vars.colors.surface.bright,
  width: '330px',
  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.largeDesktop}px)`]: {
      display: 'none',
    },
  },
});

export const label = style({
  fontSize: vars.fonts.title4,
  fontWeight: '500',
  color: vars.colors.surface.on_surf,
  marginBottom: '14px',
});

export const sequenceItem = style({
  fontSize: vars.fonts.body2,
  color: vars.colors.surface.on_surf,
  fontWeight: '500',
  cursor: 'pointer',

  ':hover': {
    color: vars.colors.primary.default,
    textDecoration: 'underline',
  },
});

export const itemContainer = style({
  padding: '8px 0',
  width: '100%',
  borderBottom: `1px solid ${vars.colors.surface.cont_2}`,
});
