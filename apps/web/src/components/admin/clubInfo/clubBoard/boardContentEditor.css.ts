import { globalStyle, style } from '@vanilla-extract/css';
import { vars } from '@/common/styles/theme.css';
import { BREAKPOINTS } from '@/common/constants/breakpoints';

export const wrapper = style({
  border: `1px solid ${vars.colors.surface.cont_1_var}`,
  borderRadius: '8px',
  overflow: 'hidden',
  backgroundColor: vars.colors.white,
  transition: 'border-color 0.16s ease, box-shadow 0.16s ease',

  selectors: {
    '&:focus-within': {
      borderColor: vars.colors.primary.default,
      boxShadow: `0 0 0 3px ${vars.colors.primary.base}`,
    },
  },
});

export const menuBar = style({
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
  flexWrap: 'wrap',
  padding: '9px 12px',
  borderBottom: `1px solid ${vars.colors.surface.cont_1_var}`,
  backgroundColor: vars.colors.surface.default,

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      padding: '8px',
      gap: '3px',
    },
  },
});

export const menuButton = style({
  flexShrink: 0,
  height: '28px',
  padding: '0 8px',
  border: 'none',
  borderRadius: '6px',
  backgroundColor: 'transparent',
  color: vars.colors.surface.outline,
  cursor: 'pointer',
  fontSize: vars.fonts.body3,
  fontWeight: 700,
  lineHeight: 1,
  transition: 'background-color 0.16s ease, color 0.16s ease',

  selectors: {
    '&:hover': {
      backgroundColor: vars.colors.primary.base,
      color: vars.colors.primary.fixed_dim_var,
    },
  },

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      height: '28px',
      padding: '0 7px',
      fontSize: vars.fonts.m_body2,
    },
  },
});

export const textButton = style({
  minWidth: '34px',
});

export const iconButton = style({
  width: '28px',
  padding: 0,
  fontSize: vars.fonts.body2,

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      width: '28px',
      fontSize: vars.fonts.m_body1,
    },
  },
});

export const menuButtonActive = style({
  backgroundColor: vars.colors.primary.base,
  color: vars.colors.primary.fixed_dim_var,
});

globalStyle(`${wrapper} .custom-tiptap-editor`, {
  minHeight: '220px',
  maxHeight: '320px',
  overflowY: 'auto',
  padding: '16px',
  border: 'none',
  borderRadius: 0,
  outline: 'none',
  backgroundColor: vars.colors.white,
  color: vars.colors.charcoal,
  fontSize: vars.fonts.body2,
  fontWeight: 400,
  lineHeight: '170%',
  whiteSpace: 'pre-wrap',
  wordBreak: 'keep-all',
  overflowWrap: 'anywhere',
});

globalStyle(`${wrapper} .custom-tiptap-editor:focus`, {
  outline: 'none',
});

globalStyle(`${wrapper} .custom-tiptap-editor.ProseMirror-focused`, {
  outline: 'none',
});

globalStyle(`${wrapper} .custom-tiptap-editor p`, {
  margin: '0 0 12px',
  fontSize: vars.fonts.body2,
  lineHeight: '170%',
});

globalStyle(`${wrapper} .custom-tiptap-editor h1`, {
  margin: '18px 0 10px',
  fontSize: vars.fonts.title4,
  fontWeight: 700,
  lineHeight: '136%',
});

globalStyle(`${wrapper} .custom-tiptap-editor h2`, {
  margin: '16px 0 8px',
  fontSize: vars.fonts.body1,
  fontWeight: 700,
  lineHeight: '142%',
});

globalStyle(`${wrapper} .custom-tiptap-editor h3`, {
  margin: '14px 0 8px',
  fontSize: vars.fonts.body2,
  fontWeight: 700,
  lineHeight: '150%',
});

globalStyle(`${wrapper} .custom-tiptap-editor h4`, {
  margin: '12px 0 8px',
  fontSize: vars.fonts.body2,
  fontWeight: 600,
  lineHeight: '150%',
});

globalStyle(`${wrapper} .custom-tiptap-editor a`, {
  color: vars.colors.primary.default,
  textDecoration: 'underline',
  textUnderlineOffset: '3px',
});

globalStyle(`${wrapper} .custom-tiptap-editor img`, {
  maxWidth: '100%',
  height: 'auto',
  display: 'block',
  margin: '14px 0',
  borderRadius: '8px',
});

globalStyle(`${wrapper} .custom-tiptap-editor p:empty:before`, {
  content: '\\00a0',
  display: 'block',
  minHeight: '1.5em',
});

globalStyle(`${wrapper} .custom-tiptap-editor p > br:only-child`, {
  content: '""',
  display: 'block',
  minHeight: '1.5em',
});

globalStyle(`${wrapper} .custom-tiptap-editor`, {
  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      minHeight: '200px',
      maxHeight: '280px',
      padding: '14px',
      fontSize: vars.fonts.m_body1,
    },
  },
});

globalStyle(`${wrapper} .custom-tiptap-editor p`, {
  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      fontSize: vars.fonts.m_body1,
    },
  },
});

globalStyle(`${wrapper} .custom-tiptap-editor h1`, {
  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      fontSize: vars.fonts.m_title4,
    },
  },
});

globalStyle(`${wrapper} .custom-tiptap-editor h2`, {
  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      fontSize: vars.fonts.m_body1,
    },
  },
});
