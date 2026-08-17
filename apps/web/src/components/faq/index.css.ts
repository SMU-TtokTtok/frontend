import { style, keyframes } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { vars } from '@/common/styles/theme.css';
import { BREAKPOINTS } from '@/common/constants/breakpoints';

export const pageWrapper = style({
  width: '100%',
  backgroundColor: vars.colors.surface.variant,
  paddingTop: '62px',
  paddingBottom: '76px',


  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      paddingTop: '40px',
      paddingBottom: '40px',
    },
    [`screen and (max-width: ${BREAKPOINTS.tablet}px)`]: {
      paddingTop: '24px',
      paddingBottom: '0',
    },
  },
});

export const contentWrapper = style({
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 20px',
});

export const title = style({
  margin: '0 0 24px',
  fontSize: vars.fonts.title3,
  fontWeight: '700',
  color: vars.colors.surface.on_surf,

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.tablet}px)`]: {
      marginBottom: '18px',
      fontSize: vars.fonts.m_title3,
    },
  },
});

export const faqCard = style({
  backgroundColor: vars.colors.surface.bright,
  borderRadius: '10px',
  overflow: 'hidden',
});

const answerFadeIn = keyframes({
  from: { opacity: 0, transform: 'translateY(-4px)' },
  to: { opacity: 1, transform: 'translateY(0)' },
});

export const faqItem = recipe({
  base: {
    width: '100%',
    transition: 'background-color 0.2s ease',
  },
  variants: {
    expanded: {
      true: { backgroundColor: vars.colors.primary.base },
      false: { backgroundColor: 'transparent' },
    },
  },
});

export const divider = style({
  height: '1px',
  backgroundColor: vars.colors.surface.cont_1,
  margin: '0 30px',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.tablet}px)`]: {
      margin: '0 20px',
    },
  },
});

export const faqItemHeader = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  paddingTop: '28px',
  paddingBottom: '28px',
  paddingLeft: '30px',
  paddingRight: '30px',
  cursor: 'pointer',
  background: 'none',
  border: 'none',
  textAlign: 'left',

  selectors: {
    '&:hover': {
      opacity: 0.8,
    },
  },

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.tablet}px)`]: {
      paddingTop: '20px',
      paddingBottom: '20px',
      paddingLeft: '20px',
      paddingRight: '20px',
    },
  },
});

export const questionGroup = style({
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
  flex: 1,
  minWidth: 0,
});

export const qLabel = style({
  fontSize: vars.fonts.title3,
  fontWeight: '700',
  color: vars.colors.primary.default,
  flexShrink: 0,

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.tablet}px)`]: {
      fontSize: vars.fonts.m_title3,
    },
  },
});

export const questionText = recipe({
  base: {
    fontSize: vars.fonts.body1,
    color: vars.colors.surface.on_surf,
    transition: 'font-weight 0.2s ease',

    '@media': {
      [`screen and (max-width: ${BREAKPOINTS.tablet}px)`]: {
        fontSize: vars.fonts.m_body1,
      },
    },
  },
  variants: {
    expanded: {
      true: { fontWeight: '700' },
      false: { fontWeight: '500' },
    },
  },
});

export const arrowIcon = recipe({
  base: {
    width: '24px',
    height: '24px',
    flexShrink: 0,
    transition: 'transform 0.2s ease',
    color: vars.colors.surface.on_surf_var,
  },
  variants: {
    expanded: {
      true: { transform: 'rotate(180deg)' },
      false: { transform: 'rotate(0deg)' },
    },
  },
});

export const answerWrapper = style({
  paddingLeft: '34px',
  paddingRight: '34px',
  paddingBottom: '30px',
  animation: `${answerFadeIn} 180ms ease-out`,

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.tablet}px)`]: {
      paddingLeft: '20px',
      paddingRight: '20px',
      paddingBottom: '20px',
    },
  },
});

export const answerText = style({
  fontSize: vars.fonts.body1,
  fontWeight: '400',
  color: vars.colors.surface.on_surf_var,
  lineHeight: '1.6',
  whiteSpace: 'pre-line',
  margin: 0,

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.tablet}px)`]: {
      fontSize: vars.fonts.m_body1,
    },
  },
});

export const installGuideWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '14px',
  marginTop: '24px',
});

export const installGuideImagePreloadSlot = style({
  position: 'absolute',
  width: '1px',
  height: '1px',
  overflow: 'hidden',
  opacity: 0,
  pointerEvents: 'none',
});

export const installGuideTabs = style({
  display: 'inline-flex',
  overflow: 'hidden',
  border: `1px solid ${vars.colors.surface.cont_3}`,
  borderRadius: '6px',
  backgroundColor: vars.colors.surface.bright,
});

export const installGuideTab = recipe({
  base: {
    minWidth: '104px',
    height: '42px',
    padding: '0 18px',
    border: 'none',
    borderRight: `1px solid ${vars.colors.surface.cont_3}`,
    backgroundColor: 'transparent',
    color: vars.colors.surface.on_surf,
    fontSize: vars.fonts.body3,
    fontWeight: 500,
    cursor: 'pointer',

    selectors: {
      '&:last-child': {
        borderRight: 'none',
      },
    },
  },
  variants: {
    selected: {
      true: {
        backgroundColor: vars.colors.primary.default,
        color: vars.colors.white,
        fontWeight: 700,
      },
      false: {
        ':hover': {
          backgroundColor: vars.colors.surface.cont_1,
        },
      },
    },
  },
});

export const answerImageButton = style({
  display: 'block',
  width: '100%',
  maxWidth: '640px',
  marginTop: '4px',
  padding: 0,
  border: 'none',
  background: 'transparent',
  cursor: 'zoom-in',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.tablet}px)`]: {
      maxWidth: '100%',
    },
  },
});

export const answerImage = style({
  display: 'block',
  width: '100%',
  height: 'auto',
  borderRadius: '8px',
  border: `1px solid ${vars.colors.surface.cont_2}`,

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.tablet}px)`]: {
      borderRadius: '6px',
    },
  },
});

export const imagePreviewOverlay = style({
  position: 'fixed',
  inset: 0,
  zIndex: 1000,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '48px 20px',
  backgroundColor: 'rgba(0, 0, 0, 0.72)',
  cursor: 'zoom-out',
});

export const imagePreview = style({
  display: 'block',
  width: 'auto',
  maxWidth: 'min(960px, 92vw)',
  maxHeight: '86vh',
  height: 'auto',
  borderRadius: '8px',
  backgroundColor: vars.colors.white,
  boxShadow: '0 18px 60px rgba(0, 0, 0, 0.28)',
  cursor: 'default',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.tablet}px)`]: {
      maxWidth: '94vw',
      maxHeight: '82vh',
      borderRadius: '6px',
    },
  },
});

export const imagePreviewCloseButton = style({
  position: 'fixed',
  top: '20px',
  right: '20px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '40px',
  height: '40px',
  border: 'none',
  borderRadius: '50%',
  backgroundColor: 'rgba(255, 255, 255, 0.92)',
  color: vars.colors.surface.on_surf,
  fontSize: '28px',
  lineHeight: 1,
  cursor: 'pointer',
});
