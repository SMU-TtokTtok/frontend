import { vars } from '@/common/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const memoContainer = style({
  position: 'fixed',
  right: '20px',
  backgroundColor: vars.colors.surface.variant,
  padding: '18px 16px',
  borderRadius: '8px',
  width: '300px',
  height: '75vh',
  overflowY: 'auto',
});

export const memoLabel = style({
  fontSize: vars.fonts.title4,
  fontWeight: '600',
  color: vars.colors.surface.on_surf,
});

export const memoAddImg = style({
  width: '29px',
  height: '29px',
  cursor: 'pointer',
});

export const memoHeader = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '16px',
});

export const memoList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
});

export const memoItemContainer = style({
  borderRadius: '6px',
  backgroundColor: vars.colors.white,
  padding: '14px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'start',
  alignItems: 'end',
  width: '100%',
});

export const memoItemTextarea = style({
  width: '100%',
  resize: 'none',
  borderRadius: '4px',
  fontSize: vars.fonts.body2,
  color: vars.colors.surface.on_surf_var,
  transition: 'background-color 0.3s ease-in-out',
  marginBottom: '8px',
  selectors: {
    '&:hover': {
      backgroundColor: vars.colors.surface.cont_1_var,
    },
    '&:focus': {
      backgroundColor: vars.colors.surface.cont_1_var,
    },
  },
});

export const buttonGroup = style({
  display: 'flex',
  justifyContent: 'end',
  alignItems: 'center',
});

export const memoSaveButton = style({
  padding: '8px',
  fontSize: vars.fonts.body4,
  fontWeight: '600',
  borderRadius: '6px',
  cursor: 'pointer',
  marginRight: '8px',
});

export const memoItemDelete = style({
  cursor: 'pointer',
});

export const emptyMessage = style({
  fontSize: vars.fonts.body3,
  fontWeight: 500,
  color: vars.colors.surface.outline,
});
