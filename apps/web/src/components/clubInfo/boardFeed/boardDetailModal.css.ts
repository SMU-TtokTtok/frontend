import { globalStyle, keyframes, style } from '@vanilla-extract/css';
import { vars } from '@/common/styles/theme.css';
import { BREAKPOINTS } from '@/common/constants/breakpoints';

const MODAL_STACK_BREAKPOINT = 1100;
const TABLET_LANDSCAPE_BREAKPOINT = 1366;
const STACKED_MODAL_MEDIA = [
  `screen and (max-width: ${MODAL_STACK_BREAKPOINT}px)`,
  `screen and (max-width: ${TABLET_LANDSCAPE_BREAKPOINT}px) and (pointer: coarse)`,
];

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
      alignItems: 'center',
      padding: '16px',
    },
  },
});

export const modal = style({
  position: 'relative',
  width: '100%',
  maxWidth: '1040px',
  height: 'min(84vh, 640px)',
  backgroundColor: vars.colors.white,
  borderRadius: '8px',
  overflow: 'hidden',
  display: 'grid',
  gridTemplateColumns: 'minmax(0, 1.08fr) minmax(360px, 0.92fr)',
  gridTemplateRows: 'minmax(0, 1fr)',
  boxShadow: '0 24px 80px rgba(3, 3, 4, 0.22)',

  '@media': {
    [STACKED_MODAL_MEDIA.join(', ')]: {
      height: 'calc(100dvh - 32px)',
      maxHeight: '88vh',
      gridTemplateColumns: '1fr',
      gridTemplateRows: 'auto minmax(0, 1fr)',
      overflow: 'hidden',
    },
  },
});

export const closeButton = style({
  position: 'absolute',
  top: '18px',
  right: '18px',
  zIndex: 2,
  width: '36px',
  height: '36px',
  borderRadius: '50%',
  border: `1px solid ${vars.colors.surface.cont_2_var}`,
  cursor: 'pointer',
  backgroundColor: 'rgba(255, 255, 255, 0.92)',
  color: vars.colors.surface.on_surf_var,
  fontSize: '24px',
  lineHeight: '32px',
  fontWeight: 300,
  boxShadow: '0 8px 24px rgba(3, 3, 4, 0.14)',
  transition: 'background-color 0.16s ease, transform 0.16s ease, color 0.16s ease',

  selectors: {
    '&:hover': {
      backgroundColor: vars.colors.surface.variant,
      color: vars.colors.surface.on_surf,
      transform: 'translateY(-1px)',
    },
  },

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      top: '12px',
      right: '12px',
      width: '34px',
      height: '34px',
      lineHeight: '30px',
    },
  },
});

export const imagePanel = style({
  position: 'relative',
  backgroundColor: vars.colors.surface.default,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: 0,
  overflow: 'hidden',
  width: '100%',

  selectors: {
    '&::after': {
      content: '""',
      position: 'absolute',
      inset: 0,
      boxShadow: `inset -1px 0 0 ${vars.colors.surface.cont_1_var}`,
      pointerEvents: 'none',
    },
  },

  '@media': {
    [STACKED_MODAL_MEDIA.join(', ')]: {
      aspectRatio: '4 / 3',
      gridColumn: '1 / -1',
      maxHeight: 'min(360px, 40dvh)',
    },
  },
});

export const image = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  display: 'block',
});

export const contentPanel = style({
  padding: '42px 40px 36px',
  display: 'flex',
  flexDirection: 'column',
  gap: '18px',
  minHeight: 0,
  overflow: 'hidden',
  backgroundColor: vars.colors.white,

  '@media': {
    [STACKED_MODAL_MEDIA.join(', ')]: {
      gridColumn: '1 / -1',
      padding: '24px 18px 28px',
      gap: '14px',
      overflow: 'hidden',
    },
  },
});

export const clubName = style({
  alignSelf: 'flex-start',
  flexShrink: 0,
  maxWidth: 'calc(100% - 52px)',
  padding: '6px 12px',
  borderRadius: '100px',
  backgroundColor: vars.colors.primary.base,
  color: vars.colors.primary.fixed_dim_var,
  fontSize: vars.fonts.body3,
  fontWeight: 600,
  lineHeight: '150%',
  wordBreak: 'break-word',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      fontSize: vars.fonts.m_body2,
    },
  },
});

export const titleRow = style({
  flexShrink: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  paddingBottom: '20px',
  borderBottom: `1px solid ${vars.colors.surface.cont_1_var}`,
});

export const title = style({
  margin: 0,
  paddingRight: '28px',
  fontSize: vars.fonts.title2,
  fontWeight: 700,
  lineHeight: '136%',
  color: vars.colors.surface.on_surf,
  wordBreak: 'keep-all',
  overflowWrap: 'anywhere',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      paddingRight: '36px',
      fontSize: vars.fonts.m_title3,
      lineHeight: '140%',
    },
  },
});

export const date = style({
  flexShrink: 0,
  fontSize: vars.fonts.body3,
  lineHeight: '150%',
  color: vars.colors.surface.outline,

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      fontSize: vars.fonts.m_body2,
    },
  },
});

export const content = style({
  flex: '1 1 0',
  minHeight: 0,
  overflowY: 'auto',
  paddingRight: '6px',
  color: vars.colors.charcoal,
  wordBreak: 'keep-all',
  overflowWrap: 'anywhere',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      flex: '1 1 0',
      minHeight: 0,
      overflowY: 'auto',
      paddingRight: 0,
    },
  },
});

globalStyle(`${content} > *:first-child`, {
  marginTop: 0,
});

globalStyle(`${content} > *:last-child`, {
  marginBottom: 0,
});

globalStyle(`${content} p`, {
  margin: '0 0 14px',
  fontSize: vars.fonts.body1,
  fontWeight: 400,
  lineHeight: '170%',
  color: vars.colors.charcoal,
});

globalStyle(`${content} h1`, {
  margin: '20px 0 10px',
  fontSize: '24px',
  fontWeight: 700,
  lineHeight: '136%',
});

globalStyle(`${content} h2`, {
  margin: '18px 0 10px',
  fontSize: '21px',
  fontWeight: 700,
  lineHeight: '136%',
});

globalStyle(`${content} h3`, {
  margin: '16px 0 8px',
  fontSize: '19px',
  fontWeight: 700,
  lineHeight: '140%',
});

globalStyle(`${content} h4`, {
  margin: '14px 0 8px',
  fontSize: '16px',
  fontWeight: 600,
  lineHeight: '150%',
});
globalStyle(`${content} h5, ${content} h6`, {
  margin: '12px 0 8px',
  fontSize: '14px',
  fontWeight: 600,
  lineHeight: '150%',
});

globalStyle(`${content} ul, ${content} ol`, {
  margin: '0 0 14px',
  paddingLeft: '20px',
  fontSize: vars.fonts.body1,
  lineHeight: '170%',
});

globalStyle(`${content} li + li`, {
  marginTop: '6px',
});

globalStyle(`${content} blockquote`, {
  margin: '16px 0',
  padding: '12px 14px',
  borderLeft: `3px solid ${vars.colors.primary.default}`,
  backgroundColor: vars.colors.primary.base,
  color: vars.colors.surface.on_surf_var,
});

globalStyle(`${content} img`, {
  maxWidth: '100%',
  height: 'auto',
  display: 'block',
  margin: '16px 0',
  borderRadius: '8px',
});

globalStyle(`${content} a`, {
  color: vars.colors.primary.default,
  textDecoration: 'underline',
  textUnderlineOffset: '3px',
});

globalStyle(`${content} code`, {
  padding: '2px 6px',
  borderRadius: '4px',
  backgroundColor: vars.colors.surface.cont_1,
  fontSize: '0.92em',
});

globalStyle(`${content} pre`, {
  margin: '16px 0',
  padding: '14px',
  borderRadius: '8px',
  overflowX: 'auto',
  backgroundColor: vars.colors.surface.variant,
});

globalStyle(`${content} table`, {
  width: '100%',
  borderCollapse: 'collapse',
  margin: '16px 0',
  fontSize: vars.fonts.body2,
});

globalStyle(`${content} th, ${content} td`, {
  padding: '10px',
  border: `1px solid ${vars.colors.surface.cont_2_var}`,
  textAlign: 'left',
});

globalStyle(`${content} p:empty:before`, {
  content: '\\00a0',
  display: 'block',
  minHeight: '1.5em',
});

globalStyle(`${content} p, ${content} ul, ${content} ol`, {
  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      fontSize: vars.fonts.m_body1,
    },
  },
});

const skeletonPulse = keyframes({
  '0%': {
    backgroundPosition: '100% 0',
  },
  '100%': {
    backgroundPosition: '-100% 0',
  },
});

const skeletonBase = style({
  backgroundImage: `linear-gradient(90deg, ${vars.colors.surface.cont_1} 0%, ${vars.colors.surface.variant} 42%, ${vars.colors.surface.cont_1} 84%)`,
  backgroundSize: '220% 100%',
  animation: `${skeletonPulse} 1.4s ease-in-out infinite`,
});

export const skeletonImagePane = style([
  imagePanel,
  {
    padding: '28px',
  },
]);

export const skeletonImage = style([
  skeletonBase,
  {
    width: '100%',
    height: '100%',
    borderRadius: '8px',

    '@media': {
      [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
        minHeight: '220px',
      },
    },
  },
]);

export const skeletonContentPane = style([
  contentPanel,
  {
    gap: '20px',
  },
]);

export const skeletonClubName = style([
  skeletonBase,
  {
    width: '104px',
    height: '28px',
    borderRadius: '100px',
  },
]);

export const skeletonTitleGroup = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  paddingTop: '2px',
});

export const skeletonTitle = style([
  skeletonBase,
  {
    width: '78%',
    height: '34px',
    borderRadius: '6px',

    '@media': {
      [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
        width: '86%',
        height: '26px',
      },
    },
  },
]);

export const skeletonDate = style([
  skeletonBase,
  {
    width: '118px',
    height: '18px',
    borderRadius: '6px',
  },
]);

export const skeletonDivider = style({
  width: '100%',
  height: '1px',
  backgroundColor: vars.colors.surface.cont_1_var,
});

export const skeletonBody = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  paddingTop: '2px',
});

export const skeletonLine = style([
  skeletonBase,
  {
    width: '100%',
    height: '18px',
    borderRadius: '6px',
  },
]);

export const skeletonLineShort = style([
  skeletonBase,
  {
    width: '68%',
    height: '18px',
    borderRadius: '6px',
  },
]);

export const stateText = style({
  gridColumn: '1 / -1',
  alignSelf: 'center',
  justifySelf: 'center',
  padding: '80px 24px',
  textAlign: 'center',
  color: vars.colors.surface.outline,
  fontSize: vars.fonts.body2,
});
