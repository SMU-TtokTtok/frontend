import { vars } from '@/common/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const withFooterContent = style({
  marginTop: '4.222rem',
  backgroundColor: vars.colors.surface.default,
  minHeight: '80vh',
});

export const withoutFooterContent = style({
  marginTop: '4.222rem',
  backgroundColor: vars.colors.surface.default,
  minHeight: '90vh',
});
