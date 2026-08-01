import { keyframes, style } from '@vanilla-extract/css';
import { vars } from '@/common/styles/theme.css';
import { BREAKPOINTS } from '@/common/constants';

/**
 * 소개 탭과 달리 흰 패널을 두지 않는다.
 * 카드 안에 갇히면 썸네일 여러 장이 활동 하나의 사진처럼 보여서, 배경 위에 그리드만 노출한다.
 */
export const container = style({
  width: '100%',
  minHeight: '300px',
  paddingTop: '20px', // 탭 버튼에 바로 붙지 않도록

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      paddingTop: '12px',
    },
  },
});

/** 4열 썸네일 그리드 (디자인 기준). 화면이 좁아지면 3열 → 2열 */
export const grid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gap: '8px',
  listStyle: 'none',
  padding: 0,
  margin: 0,

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '6px',
    },
    [`screen and (max-width: ${BREAKPOINTS.tablet}px)`]: {
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '4px',
    },
  },
});

export const gridItem = style({
  position: 'relative',
  aspectRatio: '1 / 1',
  overflow: 'hidden',
  borderRadius: '4px',
  cursor: 'pointer',
  backgroundColor: vars.colors.surface.cont_1,
  border: 'none',
  padding: 0,

  ':hover': {
    opacity: 0.85,
  },
});

export const thumbnail = style({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  display: 'block',
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

const shimmer = keyframes({
  '0%': { backgroundPosition: '200% 0' },
  '100%': { backgroundPosition: '-200% 0' },
});

/**
 * 실제 썸네일과 같은 그리드·비율을 차지해 로딩 전후 레이아웃이 흔들리지 않게 한다(CLS 방지).
 */
export const skeletonItem = style({
  aspectRatio: '1 / 1',
  borderRadius: '4px',
  backgroundImage: `linear-gradient(90deg, ${vars.colors.surface.cont_1} 25%, ${vars.colors.surface.cont_3} 50%, ${vars.colors.surface.cont_1} 75%)`,
  backgroundSize: '200% 100%',
  animation: `${shimmer} 1.4s ease-in-out infinite`,

  '@media': {
    'screen and (prefers-reduced-motion: reduce)': {
      animation: 'none',
    },
  },
});
