import { keyframes, style } from '@vanilla-extract/css';
import { BREAKPOINTS } from '@/common/constants';
import { vars } from '@/common/styles/theme.css';

const skeletonShimmer = keyframes({
  '0%': {
    backgroundPosition: '100% 0',
  },
  '100%': {
    backgroundPosition: '-100% 0',
  },
});

export const pageWrapper = style({
  width: '100%',
  minHeight: '90vh',
  paddingTop: '62px',
  paddingBottom: '76px',
  backgroundColor: vars.colors.surface.default,

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      paddingTop: '40px',
      paddingBottom: '40px',
    },
    [`screen and (max-width: ${BREAKPOINTS.tablet}px)`]: {
      paddingTop: '24px',
    },
  },
});

export const contentWrapper = style({
  maxWidth: '960px',
  margin: '0 auto',
  padding: '0 20px',
});

export const backButton = style({
  display: 'inline-flex',
  alignItems: 'center',
  height: '36px',
  marginBottom: '28px',
  padding: 0,
  border: 'none',
  background: 'transparent',
  color: vars.colors.surface.outline,
  fontSize: vars.fonts.body2,
  fontWeight: 600,
  cursor: 'pointer',

  selectors: {
    '&:hover': {
      color: vars.colors.primary.default,
    },
  },
});

export const header = style({
  paddingBottom: '24px',
  borderBottom: `1px solid ${vars.colors.surface.on_surf}`,
});

export const title = style({
  margin: 0,
  fontSize: vars.fonts.title3,
  fontWeight: 700,
  lineHeight: 1.45,
  color: vars.colors.surface.on_surf,

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.tablet}px)`]: {
      fontSize: vars.fonts.m_title3,
    },
  },
});

export const meta = style({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  gap: '10px 20px',
  marginTop: '16px',
});

export const metaItem = style({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '6px',
  color: vars.colors.surface.outline,
  fontSize: vars.fonts.body2,
  fontWeight: 500,

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.tablet}px)`]: {
      fontSize: vars.fonts.m_body1,
    },
  },
});

export const metaIcon = style({
  width: '18px',
  height: '18px',
  flexShrink: 0,
  color: vars.colors.surface.outline_var,
});

export const content = style({
  minHeight: '320px',
  paddingTop: '36px',
  paddingBottom: '48px',
  borderBottom: `1px solid ${vars.colors.surface.cont_3}`,
  color: vars.colors.surface.on_surf,
  fontSize: vars.fonts.body1,
  fontWeight: 500,
  lineHeight: 1.8,
  whiteSpace: 'pre-wrap',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.tablet}px)`]: {
      paddingTop: '28px',
      fontSize: vars.fonts.m_body1,
    },
  },
});

export const bottomActions = style({
  display: 'flex',
  justifyContent: 'center',
  marginTop: '32px',
});

export const listLink = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  minWidth: '104px',
  height: '40px',
  padding: '0 18px',
  border: `1px solid ${vars.colors.surface.cont_3}`,
  borderRadius: '6px',
  backgroundColor: vars.colors.surface.bright,
  color: vars.colors.surface.on_surf,
  fontSize: vars.fonts.body2,
  fontWeight: 700,
  textDecoration: 'none',
  cursor: 'pointer',

  selectors: {
    '&:hover': {
      borderColor: vars.colors.primary.default,
      color: vars.colors.primary.default,
    },
  },
});

export const stateWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '360px',
  textAlign: 'center',
});

export const stateTitle = style({
  margin: 0,
  color: vars.colors.surface.on_surf,
  fontSize: vars.fonts.title4,
  fontWeight: 700,
});

export const stateDescription = style({
  margin: '8px 0 0',
  color: vars.colors.surface.outline,
  fontSize: vars.fonts.body1,
});

export const skeletonBlock = style({
  display: 'block',
  borderRadius: '6px',
  backgroundImage: `linear-gradient(90deg, ${vars.colors.surface.cont_1} 0%, ${vars.colors.surface.cont_2} 50%, ${vars.colors.surface.cont_1} 100%)`,
  backgroundSize: '200% 100%',
  animation: `${skeletonShimmer} 1.2s ease-in-out infinite`,
});

export const skeletonTitle = style({
  width: 'min(640px, 82vw)',
  height: '34px',
});

export const skeletonBackButton = style({
  width: '72px',
  height: '36px',
  marginBottom: '28px',
});

export const skeletonMeta = style({
  width: '360px',
  maxWidth: '70vw',
  height: '20px',
  marginTop: '18px',
});

export const skeletonContentLine = style({
  width: '100%',
  height: '20px',
  marginBottom: '14px',
});

export const skeletonContentLineShort = style({
  width: '72%',
  height: '20px',
});
