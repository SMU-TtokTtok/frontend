import { BREAKPOINTS } from '@/common/constants';
import { vars } from '@/common/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const withFooterContent = style({
  paddingTop: '60px',
  backgroundColor: vars.colors.surface.variant,
  minHeight: '90vh',
  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.tablet}px)`]: {
      paddingTop: '52px',
    },
  },
});

export const withoutFooterContent = style({
  paddingTop: '4.222rem',
  backgroundColor: vars.colors.surface.variant,
  minHeight: '100vh',
});

export const rawSort = style({
  display: 'flex',
  justifyContent: 'start',
  alignItems: 'start',
});
