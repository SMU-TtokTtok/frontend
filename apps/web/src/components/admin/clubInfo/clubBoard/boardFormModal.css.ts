import { style } from '@vanilla-extract/css';
import { vars } from '@/common/styles/theme.css';
import { BREAKPOINTS } from '@/common/constants/breakpoints';

export const overlay = style({
  position: 'fixed',
  inset: 0,
  zIndex: 1000,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '20px',
});

export const modal = style({
  width: '100%',
  maxWidth: '560px',
  maxHeight: '88vh',
  overflowY: 'auto',
  backgroundColor: vars.colors.white,
  borderRadius: '10px',
  padding: '32px',
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      padding: '20px 16px',
      gap: '16px',
    },
  },
});

export const title = style({
  fontSize: vars.fonts.title4,
  fontWeight: 700,
});

export const field = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
});

export const label = style({
  fontSize: vars.fonts.body2,
  fontWeight: 600,
});

export const input = style({
  padding: '12px 16px',
  borderRadius: '6px',
  backgroundColor: vars.colors.surface.default,
  fontSize: '14px',
  width: '100%',

  selectors: {
    '&::placeholder': {
      color: vars.colors.surface.cont_3,
    },
  },
});

export const textarea = style([
  input,
  {
    minHeight: '140px',
    resize: 'vertical',
    fontFamily: 'inherit',
    lineHeight: 1.6,
  },
]);

export const fileRow = style({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  flexWrap: 'wrap',
});

export const fileButton = style({
  padding: '10px 16px',
  borderRadius: '6px',
  fontSize: vars.fonts.body3,
  fontWeight: 600,
  whiteSpace: 'nowrap',
});

export const fileName = style({
  fontSize: vars.fonts.body3,
  color: vars.colors.surface.outline,
  wordBreak: 'break-all',
});

export const preview = style({
  width: '100%',
  maxHeight: '260px',
  objectFit: 'cover',
  borderRadius: '6px',
  display: 'block',
});

export const errorText = style({
  color: vars.colors.error.primary,
  fontSize: '0.85rem',
});

export const buttonRow = style({
  display: 'flex',
  gap: '8px',
  justifyContent: 'flex-end',
});

export const button = style({
  padding: '12px 24px',
  borderRadius: '6px',
  fontSize: vars.fonts.body2,
  fontWeight: 600,
});
