import { style } from '@vanilla-extract/css';
import { vars } from '@/common/styles/theme.css';

export const headerContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: '50px',
});

export const iconContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: '14px',
});
export const excelContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
  cursor: 'pointer',
});
export const excelText = style({
  fontSize: vars.fonts.body2,
  color: '#ABABAB',
});

export const title = style({
  fontSize: vars.fonts.title2,
  fontWeight: 600,
  color: '#030304',
});

export const memberPanel = style({
  width: '100%',
  backgroundColor: vars.colors.surface.bright,
  padding: '20px',
  borderRadius: '8px',
  marginTop: '20px',
  marginBottom: '200px',
});

export const editAndCloseIcon = style({
  cursor: 'pointer',
});
