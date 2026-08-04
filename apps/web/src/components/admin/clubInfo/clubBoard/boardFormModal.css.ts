import { style } from '@vanilla-extract/css';
import { vars } from '@/common/styles/theme.css';
import { BREAKPOINTS } from '@/common/constants/breakpoints';

export const overlay = style({
  position: 'fixed',
  inset: 0,
  zIndex: 1000,
  backgroundColor: 'rgba(3, 3, 4, 0.48)',
  backdropFilter: 'blur(6px)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '24px',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      alignItems: 'flex-end',
      padding: '12px',
    },
  },
});

export const modal = style({
  width: '100%',
  maxWidth: '720px',
  maxHeight: '88vh',
  overflow: 'hidden',
  backgroundColor: vars.colors.white,
  borderRadius: '8px',
  display: 'flex',
  flexDirection: 'column',
  boxShadow: '0 24px 80px rgba(3, 3, 4, 0.22)',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      maxHeight: '92vh',
    },
  },
});

export const header = style({
  flexShrink: 0,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  gap: '16px',
  padding: '28px 32px 20px',
  borderBottom: `1px solid ${vars.colors.surface.cont_1_var}`,

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      padding: '22px 18px 16px',
    },
  },
});

export const title = style({
  margin: 0,
  color: vars.colors.surface.on_surf,
  fontSize: vars.fonts.title3,
  fontWeight: 700,
  lineHeight: '136%',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      fontSize: vars.fonts.m_title3,
    },
  },
});

export const description = style({
  margin: '6px 0 0',
  color: vars.colors.surface.outline,
  fontSize: vars.fonts.body3,
  lineHeight: '150%',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      fontSize: vars.fonts.m_body2,
    },
  },
});

export const closeButton = style({
  flexShrink: 0,
  width: '34px',
  height: '34px',
  borderRadius: '50%',
  border: `1px solid ${vars.colors.surface.cont_2_var}`,
  backgroundColor: vars.colors.white,
  color: vars.colors.surface.on_surf_var,
  cursor: 'pointer',
  fontSize: '23px',
  fontWeight: 300,
  lineHeight: '30px',
  boxShadow: '0 8px 24px rgba(3, 3, 4, 0.1)',
  transition: 'background-color 0.16s ease, transform 0.16s ease, color 0.16s ease',

  selectors: {
    '&:hover': {
      backgroundColor: vars.colors.surface.variant,
      color: vars.colors.surface.on_surf,
      transform: 'translateY(-1px)',
    },
  },
});

export const body = style({
  flex: '1 1 auto',
  minHeight: 0,
  overflowY: 'auto',
  display: 'flex',
  flexDirection: 'column',
  gap: '22px',
  padding: '24px 32px 28px',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      gap: '18px',
      padding: '20px 18px 22px',
    },
  },
});

export const field = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
});

export const labelRow = style({
  display: 'flex',
  alignItems: 'baseline',
  gap: '4px',
});

export const label = style({
  color: vars.colors.surface.on_surf,
  fontSize: vars.fonts.body2,
  fontWeight: 700,
  lineHeight: '150%',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      fontSize: vars.fonts.m_body1,
    },
  },
});

export const helperText = style({
  color: vars.colors.surface.outline,
  fontSize: vars.fonts.body3,
  lineHeight: '150%',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      fontSize: vars.fonts.m_body2,
    },
  },
});

export const requiredText = style({
  color: vars.colors.primary.default,
  fontSize: vars.fonts.body3,
  fontWeight: 600,
  lineHeight: '150%',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      fontSize: vars.fonts.m_body2,
    },
  },
});

export const input = style({
  width: '100%',
  minHeight: '48px',
  padding: '12px 14px',
  border: `1px solid ${vars.colors.surface.cont_1_var}`,
  borderRadius: '8px',
  outline: 'none',
  backgroundColor: vars.colors.surface.default,
  color: vars.colors.surface.on_surf,
  fontSize: vars.fonts.body2,
  lineHeight: '150%',
  transition: 'border-color 0.16s ease, background-color 0.16s ease, box-shadow 0.16s ease',

  selectors: {
    '&::placeholder': {
      color: vars.colors.surface.outline_var,
    },
    '&:focus': {
      borderColor: vars.colors.primary.default,
      backgroundColor: vars.colors.white,
      boxShadow: `0 0 0 3px ${vars.colors.primary.base}`,
    },
  },

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      minHeight: '44px',
      fontSize: vars.fonts.m_body1,
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

export const uploadBox = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '14px',
  padding: '14px',
  border: `1px solid ${vars.colors.surface.cont_1_var}`,
  borderRadius: '8px',
  backgroundColor: vars.colors.surface.default,
});

export const fileRow = style({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  minWidth: 0,

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      alignItems: 'stretch',
      flexDirection: 'column',
      gap: '8px',
    },
  },
});

export const fileButton = style({
  flexShrink: 0,
  minHeight: '42px',
  padding: '0 16px',
  borderRadius: '8px',
  fontSize: vars.fonts.body2,
  fontWeight: 700,
  whiteSpace: 'nowrap',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      width: '100%',
      fontSize: vars.fonts.m_body1,
    },
  },
});

export const fileName = style({
  minWidth: 0,
  color: vars.colors.surface.outline,
  fontSize: vars.fonts.body3,
  lineHeight: '150%',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      fontSize: vars.fonts.m_body2,
      whiteSpace: 'normal',
      overflowWrap: 'anywhere',
    },
  },
});

export const previewFrame = style({
  width: '100%',
  overflow: 'hidden',
  borderRadius: '8px',
  border: `1px solid ${vars.colors.surface.cont_1_var}`,
  backgroundColor: vars.colors.white,
});

export const preview = style({
  width: '100%',
  maxHeight: '260px',
  aspectRatio: '16 / 9',
  objectFit: 'cover',
  display: 'block',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      maxHeight: '220px',
      aspectRatio: '4 / 3',
    },
  },
});

export const errorText = style({
  margin: 0,
  color: vars.colors.error.primary,
  fontSize: vars.fonts.body3,
  lineHeight: '150%',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      fontSize: vars.fonts.m_body2,
    },
  },
});

export const buttonRow = style({
  flexShrink: 0,
  display: 'flex',
  gap: '10px',
  justifyContent: 'flex-end',
  padding: '18px 32px 28px',
  borderTop: `1px solid ${vars.colors.surface.cont_1_var}`,
  backgroundColor: vars.colors.white,

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      padding: '14px 18px 18px',
    },
  },
});

export const button = style({
  minWidth: '112px',
  minHeight: '44px',
  padding: '0 20px',
  borderRadius: '8px',
  fontSize: vars.fonts.body2,
  fontWeight: 700,

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      flex: '1 1 0',
      minWidth: 0,
      fontSize: vars.fonts.m_body1,
    },
  },
});
