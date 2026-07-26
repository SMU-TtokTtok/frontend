import { keyframes, style } from '@vanilla-extract/css';
import { vars } from '@/common/styles/theme.css';
import { BREAKPOINTS } from '@/common/constants';

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
  backgroundColor: vars.colors.surface.default,
  paddingTop: '62px',
  paddingBottom: '76px',
  minHeight: '90vh',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      paddingTop: '40px',
      paddingBottom: '40px',
    },
    [`screen and (max-width: ${BREAKPOINTS.tablet}px)`]: {
      paddingTop: '24px',
      paddingBottom: '40px',
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

export const toolbar = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '16px',
  marginBottom: '16px',
  paddingBottom: '14px',
  borderBottom: `1px solid ${vars.colors.surface.on_surf}`,

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.tablet}px)`]: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: '12px',
      paddingBottom: '12px',
    },
  },
});

export const totalCount = style({
  fontSize: vars.fonts.body1,
  fontWeight: '500',
  color: vars.colors.surface.outline,

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.tablet}px)`]: {
      fontSize: vars.fonts.m_body1,
    },
  },
});

export const searchInput = style({
  width: '280px',
  maxWidth: '100%',
  height: '40px',
  padding: '0 40px 0 16px',
  backgroundColor: vars.colors.surface.bright,
  border: `1px solid ${vars.colors.surface.cont_3}`,
  borderRadius: '8px',
  outline: 'none',
  fontSize: vars.fonts.body2,
  fontWeight: '500',
  color: vars.colors.surface.on_surf,

  '::placeholder': {
    color: vars.colors.surface.outline,
  },

  ':focus': {
    borderColor: vars.colors.primary.default,
  },

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.tablet}px)`]: {
      width: '100%',
      fontSize: vars.fonts.m_body1,
    },
  },
});

export const searchIconWrapper = style({
  right: '14px',
  display: 'flex',
  alignItems: 'center',
  pointerEvents: 'none',
});

export const searchIcon = style({
  width: '20px',
  height: '20px',
});

export const noticeList = style({
  width: '100%',
});

export const noticeItem = style({
  width: '100%',
});

export const divider = style({
  height: '1px',
  backgroundColor: vars.colors.surface.cont_3,
});

export const noticeRow = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '32px',
  width: '100%',
  paddingTop: '40px',
  paddingBottom: '40px',
  paddingLeft: '8px',
  paddingRight: '8px',
  background: 'none',
  border: 'none',
  textDecoration: 'none',
  textAlign: 'left',
  cursor: 'pointer',

  selectors: {
    '&:hover': {
      opacity: 0.8,
    },
  },

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.tablet}px)`]: {
      paddingTop: '24px',
      paddingBottom: '24px',
      gap: '12px',
    },
  },
});

export const noticeInfo = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  minWidth: 0,

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.tablet}px)`]: {
      gap: '10px',
    },
  },
});

export const noticeTitle = style({
  fontSize: vars.fonts.title4,
  fontWeight: '500',
  color: vars.colors.surface.on_surf,
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.tablet}px)`]: {
      fontSize: vars.fonts.m_title4,
      whiteSpace: 'normal',
    },
  },
});

export const noticeMeta = style({
  display: 'flex',
  alignItems: 'center',
  gap: '24px',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.tablet}px)`]: {
      gap: '16px',
    },
  },
});

export const metaGroup = style({
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
  fontSize: vars.fonts.body2,
  fontWeight: '500',
  color: vars.colors.surface.outline,

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.tablet}px)`]: {
      fontSize: vars.fonts.m_body1,
    },
  },
});

export const metaIcon = style({
  width: '20px',
  height: '20px',
  flexShrink: 0,
  color: vars.colors.surface.outline_var,
});

export const noticeBadges = style({
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
  flexShrink: 0,
});

export const badgeIcon = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '34px',
  height: '34px',
  color: vars.colors.surface.on_surf,
});

export const badgeIconSvg = style({
  width: '20px',
  height: '20px',
});

export const emptyState = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '320px',
  padding: '72px 20px',
  textAlign: 'center',
});

export const emptyIcon = style({
  width: '48px',
  height: '48px',
  marginBottom: '16px',
  color: vars.colors.surface.outline_var,
});

export const emptyTitle = style({
  margin: 0,
  fontSize: vars.fonts.title4,
  fontWeight: 700,
  color: vars.colors.surface.on_surf,

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.tablet}px)`]: {
      fontSize: vars.fonts.m_title4,
    },
  },
});

export const emptyDescription = style({
  margin: '8px 0 0',
  fontSize: vars.fonts.body1,
  color: vars.colors.surface.outline,

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.tablet}px)`]: {
      fontSize: vars.fonts.m_body1,
    },
  },
});

export const skeletonBlock = style({
  display: 'block',
  borderRadius: '6px',
  backgroundImage: `linear-gradient(90deg, ${vars.colors.surface.cont_1} 0%, ${vars.colors.surface.cont_2} 50%, ${vars.colors.surface.cont_1} 100%)`,
  backgroundSize: '200% 100%',
  animation: `${skeletonShimmer} 1.2s ease-in-out infinite`,
});

export const skeletonTitle = style({
  width: 'min(520px, 72vw)',
  height: '28px',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.tablet}px)`]: {
      width: 'min(320px, 76vw)',
      height: '22px',
    },
  },
});

export const skeletonMeta = style({
  width: '112px',
  height: '20px',
});

export const skeletonMetaSmall = style({
  width: '72px',
  height: '20px',
});

export const pagination = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '10px',
  marginTop: '32px',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.tablet}px)`]: {
      gap: '6px',
      marginTop: '24px',
    },
  },
});

export const pageNumbers = style({
  display: 'flex',
  alignItems: 'center',
  gap: '6px',
});

export const paginationButton = style({
  minWidth: '58px',
  height: '36px',
  padding: '0 12px',
  border: `1px solid ${vars.colors.surface.cont_3}`,
  borderRadius: '6px',
  backgroundColor: vars.colors.surface.bright,
  color: vars.colors.surface.on_surf,
  fontSize: vars.fonts.body2,
  fontWeight: 600,
  cursor: 'pointer',

  selectors: {
    '&:hover:not(:disabled)': {
      borderColor: vars.colors.primary.default,
      color: vars.colors.primary.default,
    },
    '&:disabled': {
      cursor: 'not-allowed',
      opacity: 0.45,
    },
  },

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.tablet}px)`]: {
      minWidth: '48px',
      height: '34px',
      padding: '0 8px',
      fontSize: vars.fonts.m_body2,
    },
  },
});

export const pageNumberButton = style({
  width: '36px',
  height: '36px',
  border: `1px solid ${vars.colors.surface.cont_3}`,
  borderRadius: '6px',
  backgroundColor: vars.colors.surface.bright,
  color: vars.colors.surface.on_surf,
  fontSize: vars.fonts.body2,
  fontWeight: 600,
  cursor: 'pointer',

  selectors: {
    '&:hover': {
      borderColor: vars.colors.primary.default,
      color: vars.colors.primary.default,
    },
  },

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.tablet}px)`]: {
      width: '34px',
      height: '34px',
      fontSize: vars.fonts.m_body2,
    },
  },
});

export const pageNumberButtonActive = style({
  borderColor: vars.colors.primary.default,
  backgroundColor: vars.colors.primary.default,
  color: vars.colors.white,

  selectors: {
    '&:hover': {
      color: vars.colors.white,
    },
  },
});
