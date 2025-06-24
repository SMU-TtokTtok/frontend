import { vars } from '@/common/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const withFooterContent = style({
  marginTop: '4.222rem',
  backgroundColor: vars.colors.surface.variant,
  minHeight: '80vh',
});

export const withoutFooterContent = style({
  marginTop: '4.222rem',
  backgroundColor: vars.colors.surface.variant,
  minHeight: '89vh',
});

export const rawSort = style({
  display: 'flex',
  justifyContent: 'start',
  alignItems: 'start',
});
