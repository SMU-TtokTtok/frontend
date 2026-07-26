import { globalStyle, style } from '@vanilla-extract/css';
import { vars } from '@/common/styles/theme.css';
import { BREAKPOINTS } from '@/common/constants';

export const overlay = style({
  position: 'fixed',
  inset: 0,
  zIndex: 1000,
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '20px',
});

/**
 * 데스크톱은 사진(왼쪽) + 내용(오른쪽) 2단, 좁아지면 위아래로 쌓인다.
 * 높이를 확정해야(height + minmax(0, 1fr)) 두 단의 높이가 맞고 내용 쪽에 스크롤이 생긴다.
 * 행 높이를 auto로 두면 내용만큼 늘어나 사진 아래에 빈 공간이 생기고 스크롤도 안 걸린다.
 */
export const modal = style({
  position: 'relative',
  width: '100%',
  maxWidth: '1000px',
  height: 'min(86vh, 620px)',
  backgroundColor: vars.colors.white,
  borderRadius: '10px',
  overflow: 'hidden',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gridTemplateRows: 'minmax(0, 1fr)',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      height: 'auto',
      maxHeight: '86vh',
      gridTemplateColumns: '1fr',
      gridTemplateRows: 'auto 1fr',
      overflowY: 'auto',
    },
  },
});

export const closeButton = style({
  position: 'absolute',
  top: '12px',
  right: '12px',
  zIndex: 1,
  width: '32px',
  height: '32px',
  borderRadius: '50%',
  border: 'none',
  cursor: 'pointer',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  color: vars.colors.white,
  fontSize: '18px',
  lineHeight: 1,
});

/**
 * 사진 비율이 어떻든 잘리지 않게 contain. 정사각형이 아니면 남는 공간이 배경색으로 보인다.
 * 데스크톱에서는 모달 높이를 그대로 채우고, 모바일에서만 정사각형으로 잡는다.
 */
export const imagePane = style({
  backgroundColor: vars.colors.surface.default,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: 0,
  overflow: 'hidden',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      aspectRatio: '1 / 1',
    },
  },
});

export const image = style({
  width: '100%',
  height: '100%',
  objectFit: 'contain',
  display: 'block',
});

/** 동아리명·제목은 고정하고 본문만 스크롤되도록 자신은 넘치지 않게 둔다 */
export const contentPane = style({
  padding: '32px',
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  minHeight: 0,
  overflow: 'hidden',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      padding: '20px 16px',
      gap: '12px',
      overflow: 'visible',
    },
  },
});

export const clubName = style({
  flexShrink: 0,
  paddingRight: '44px', // 닫기 버튼과 겹치지 않게
  fontSize: vars.fonts.title4,
  fontWeight: 700,
  color: vars.colors.surface.on_surf,

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      fontSize: vars.fonts.m_title4,
    },
  },
});

export const titleRow = style({
  flexShrink: 0,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'baseline',
  gap: '12px',
  paddingBottom: '16px',
  borderBottom: `1px solid ${vars.colors.surface.cont_1_var}`,
});

export const title = style({
  fontSize: vars.fonts.title3,
  fontWeight: 600,
  color: vars.colors.surface.on_surf,
  wordBreak: 'break-word',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      fontSize: vars.fonts.m_title4,
    },
  },
});

export const date = style({
  flexShrink: 0,
  fontSize: vars.fonts.body3,
  color: vars.colors.surface.outline,

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      fontSize: vars.fonts.m_body2,
    },
  },
});

/**
 * 내용은 에디터가 만든 HTML이다.
 * 소개글용 .content-container는 패딩·min-height가 탭 패널 기준이라 쓰지 않고,
 * 자식 요소 스타일만 같은 크기 체계로 맞춘다.
 */
export const content = style({
  flex: '1 1 0',
  minHeight: 0,
  overflowY: 'auto',
  color: vars.colors.charcoal,
  wordBreak: 'break-word',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      flex: 'initial',
      overflowY: 'visible',
    },
  },
});

globalStyle(`${content} p`, {
  fontSize: '16px',
  fontWeight: 400,
  lineHeight: '150%',
});

globalStyle(`${content} h1`, { fontSize: '24px', fontWeight: 600, lineHeight: '130%' });
globalStyle(`${content} h2`, { fontSize: '21px', fontWeight: 600, lineHeight: '130%' });
globalStyle(`${content} h3`, { fontSize: '19px', fontWeight: 600, lineHeight: '140%' });
globalStyle(`${content} h4`, { fontSize: '16px', fontWeight: 400, lineHeight: '150%' });

globalStyle(`${content} ul, ${content} ol`, {
  paddingLeft: '20px',
  fontSize: '16px',
  lineHeight: '150%',
});

globalStyle(`${content} blockquote`, {
  paddingLeft: '12px',
  borderLeft: `3px solid ${vars.colors.surface.cont_3}`,
  color: vars.colors.surface.on_surf_var,
});

globalStyle(`${content} img`, {
  maxWidth: '100%',
  height: 'auto',
  display: 'block',
});

globalStyle(`${content} a`, {
  color: '#0000ee',
  textDecoration: 'underline',
});

/** 빈 줄도 소개글과 동일하게 높이를 유지한다 */
globalStyle(`${content} p:empty:before`, {
  content: '\\00a0',
  display: 'block',
  minHeight: '1.5em',
});

globalStyle(`${content} p, ${content} h1, ${content} h2, ${content} h3, ${content} h4`, {
  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      fontSize: '14px',
    },
  },
});

export const stateText = style({
  gridColumn: '1 / -1',
  padding: '80px 0',
  textAlign: 'center',
  color: vars.colors.surface.outline,
  fontSize: vars.fonts.body2,
});
