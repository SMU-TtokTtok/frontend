import { style } from '@vanilla-extract/css';
import { vars } from '@/common/styles/theme.css';
import { BREAKPOINTS } from '@/common/constants';

/** 관리자 "동아리 정보 관리"의 게시글 탭 패널. 탭 버튼 아래에 이어 붙는다. */
export const panel = style({
  width: '100%',
  minHeight: '300px',
  padding: '26px 28px',
  backgroundColor: vars.colors.white,
  borderRadius: '0 0 8px 8px',
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      padding: '16px',
      gap: '16px',
    },
  },
});

export const header = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '12px',
  flexWrap: 'wrap',
});

export const description = style({
  fontSize: vars.fonts.body3,
  color: vars.colors.surface.outline,

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      fontSize: vars.fonts.m_body2,
    },
  },
});

export const createButton = style({
  padding: '12px 20px',
  borderRadius: '6px',
  fontSize: vars.fonts.body2,
  fontWeight: 600,
  whiteSpace: 'nowrap',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      fontSize: vars.fonts.m_body1,
      padding: '10px 16px',
    },
  },
});

export const grid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: '12px',
  listStyle: 'none',
  padding: 0,
  margin: 0,

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.largeDesktop}px)`]: {
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '8px',
    },
  },
});

export const card = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
});

export const thumbnailBox = style({
  position: 'relative',
  aspectRatio: '1 / 1',
  overflow: 'hidden',
  borderRadius: '6px',
  backgroundColor: vars.colors.surface.cont_1,
});

export const thumbnail = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  display: 'block',
});

export const cardFooter = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '8px',
});

export const cardDate = style({
  fontSize: vars.fonts.body4,
  color: vars.colors.surface.outline,
});

export const cardActions = style({
  display: 'flex',
  gap: '6px',
});

export const actionButton = style({
  border: 'none',
  background: 'none',
  cursor: 'pointer',
  padding: '4px',
  fontSize: vars.fonts.body4,
  color: vars.colors.surface.outline,
  textDecoration: 'underline',

  ':hover': {
    color: vars.colors.surface.on_surf_var,
  },
});

export const deleteButton = style({
  color: vars.colors.error.primary,
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
  padding: '12px 0',
  textAlign: 'center',
  color: vars.colors.surface.outline,
  fontSize: vars.fonts.body3,
});
