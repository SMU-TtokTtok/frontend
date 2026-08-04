import { style } from '@vanilla-extract/css';
import { vars } from '@/common/styles/theme.css';
import { BREAKPOINTS } from '@/common/constants/breakpoints';

export const panel = style({
  width: '100%',
  minHeight: '300px',
  padding: '26px 28px',
  backgroundColor: vars.colors.white,
  borderRadius: '0 0 8px 8px',
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      padding: '18px 16px',
      gap: '18px',
    },
  },
});

export const header = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '16px',
  flexWrap: 'wrap',
});

export const description = style({
  margin: 0,
  fontSize: vars.fonts.body2,
  lineHeight: '150%',
  color: vars.colors.surface.outline,

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      fontSize: vars.fonts.m_body1,
    },
  },
});

export const createButton = style({
  minHeight: '44px',
  padding: '0 20px',
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

export const grid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
  gap: '18px 14px',
  listStyle: 'none',
  padding: 0,
  margin: 0,

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.largeDesktop}px)`]: {
      gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
    },
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
      gap: '14px 10px',
    },
  },
});

export const card = style({
  minWidth: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
});

export const thumbnailBox = style({
  position: 'relative',
  aspectRatio: '1 / 1',
  overflow: 'hidden',
  borderRadius: '8px',
  backgroundColor: vars.colors.surface.cont_1,
  boxShadow: `0 0 0 1px ${vars.colors.surface.cont_1_var}`,
  transition: 'box-shadow 0.18s ease, transform 0.18s ease',

  selectors: {
    [`${card}:hover &`]: {
      transform: 'translateY(-2px)',
      boxShadow: '0 14px 34px rgba(3, 3, 4, 0.16)',
    },
    [`${card}:focus-within &`]: {
      boxShadow: `0 0 0 3px ${vars.colors.primary.base}`,
    },
  },
});

export const thumbnail = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  display: 'block',
  transition: 'transform 0.24s ease',

  selectors: {
    [`${card}:hover &`]: {
      transform: 'scale(1.04)',
    },
  },
});

export const thumbnailDim = style({
  position: 'absolute',
  inset: 0,
  backgroundColor: 'rgba(3, 3, 4, 0)',
  transition: 'background-color 0.18s ease',
  pointerEvents: 'none',

  selectors: {
    [`${card}:hover &`]: {
      backgroundColor: 'rgba(3, 3, 4, 0.28)',
    },
    [`${card}:focus-within &`]: {
      backgroundColor: 'rgba(3, 3, 4, 0.28)',
    },
  },
});

export const cardFooter = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '8px',
});

export const cardDate = style({
  fontSize: vars.fonts.body3,
  lineHeight: '150%',
  color: vars.colors.surface.outline,

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      fontSize: vars.fonts.m_body2,
    },
  },
});

export const cardActions = style({
  position: 'absolute',
  right: '10px',
  bottom: '10px',
  zIndex: 1,
  display: 'flex',
  gap: '6px',
  opacity: 0,
  transform: 'translateY(6px)',
  transition: 'opacity 0.18s ease, transform 0.18s ease',

  selectors: {
    [`${card}:hover &`]: {
      opacity: 1,
      transform: 'translateY(0)',
    },
    [`${card}:focus-within &`]: {
      opacity: 1,
      transform: 'translateY(0)',
    },
  },

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      opacity: 1,
      transform: 'none',
      right: '8px',
      bottom: '8px',
    },
  },
});

export const actionButton = style({
  height: '34px',
  minWidth: '74px',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '6px',
  padding: '0 12px',
  border: `1px solid rgba(255, 255, 255, 0.58)`,
  borderRadius: '100px',
  backgroundColor: 'rgba(255, 255, 255, 0.92)',
  color: vars.colors.surface.on_surf_var,
  cursor: 'pointer',
  fontSize: vars.fonts.body3,
  fontWeight: 700,
  lineHeight: 1,
  backdropFilter: 'blur(8px)',
  boxShadow: '0 8px 22px rgba(3, 3, 4, 0.16)',
  transition: 'background-color 0.16s ease, color 0.16s ease, transform 0.16s ease',

  selectors: {
    '&:hover': {
      backgroundColor: vars.colors.white,
      color: vars.colors.primary.default,
    },
  },

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      minWidth: '34px',
      width: '34px',
      padding: 0,
      gap: 0,
    },
  },
});

export const actionIcon = style({
  width: '16px',
  height: '16px',
  flexShrink: 0,
  display: 'block',
});

export const actionLabel = style({
  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      display: 'none',
    },
  },
});

export const deleteButton = style({
  selectors: {
    '&:hover': {
      color: vars.colors.error.primary,
    },
  },
});

export const emptyText = style({
  padding: '80px 0',
  textAlign: 'center',
  color: vars.colors.surface.outline,
  fontSize: vars.fonts.body2,

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      padding: '48px 0',
      fontSize: vars.fonts.m_body1,
    },
  },
});

export const observerTarget = style({
  height: '1px',
});

export const loadingMore = style({
  margin: 0,
  padding: '12px 0',
  textAlign: 'center',
  color: vars.colors.surface.outline,
  fontSize: vars.fonts.body3,
});
