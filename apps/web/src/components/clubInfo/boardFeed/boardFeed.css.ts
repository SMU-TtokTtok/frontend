import { keyframes, style } from '@vanilla-extract/css';
import { vars } from '@/common/styles/theme.css';
import { BREAKPOINTS } from '@/common/constants/breakpoints';

/**
 * ?뚭컻 ??낵 ?щ━ ???⑤꼸???먯? ?딅뒗??
 * 移대뱶 ?덉뿉 媛뉙엳硫??몃꽕???щ윭 ?μ씠 ?쒕룞 ?섎굹???ъ쭊泥섎읆 蹂댁뿬?? 諛곌꼍 ?꾩뿉 洹몃━?쒕쭔 ?몄텧?쒕떎.
 */
export const container = style({
  width: '100%',
  minHeight: '300px',
  paddingTop: '20px', // ??踰꾪듉??諛붾줈 遺숈? ?딅룄濡?

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      paddingTop: '12px',
    },
  },
});

/** 4???몃꽕??洹몃━??(?붿옄??湲곗?). ?붾㈃??醫곸븘吏硫?3????2??*/
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
 * ?ㅼ젣 ?몃꽕?쇨낵 媛숈? 洹몃━?쑣룸퉬?⑥쓣 李⑥???濡쒕뵫 ?꾪썑 ?덉씠?꾩썐???붾뱾由ъ? ?딄쾶 ?쒕떎(CLS 諛⑹?).
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
