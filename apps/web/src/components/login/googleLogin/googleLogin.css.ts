import { globalStyle, style } from '@vanilla-extract/css';
import { vars } from '@/common/styles/theme.css';
import { BREAKPOINTS } from '@/common/constants';

export const Container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '16px',
  marginTop: '24px',
});

const dividerLine = {
  content: '""',
  flex: '1 1 0',
  height: '1px',
  backgroundColor: vars.colors.surface.cont_1_var,
} as const;

export const Divider = style({
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  width: '100%',
  color: vars.colors.surface.outline,
  fontSize: vars.fonts.body3,

  '::before': dividerLine,
  '::after': dividerLine,

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.tablet}px)`]: {
      fontSize: vars.fonts.m_body2,
    },
  },
});

/**
 * GIS가 이 div 안에 버튼을 렌더링한다. 높이는 렌더 전 레이아웃 흔들림을 막기 위한 값.
 * GIS의 width 옵션은 "최소" 너비라 라벨이 길면 지정값보다 넓게 그려진다.
 * 좁은 화면에서 카드 밖으로 넘치지 않도록 여기서 한 번 더 가둔다.
 */
export const ButtonSlot = style({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  maxWidth: '100%',
  minHeight: '44px',
  overflow: 'hidden',
});

/**
 * GIS는 버튼을 최대 400px까지만 그리고 그 값을 인라인 style로 박아 넣는다.
 * 카드 폭을 채우려면 인라인을 이겨야 해서 !important가 필요하다.
 * 내부 클래스명은 난독화되어 바뀔 수 있어 구조와 role만으로 선택한다.
 * 선택자가 어긋나도 400px 버튼으로 보일 뿐 동작에는 영향이 없다.
 */
globalStyle(
  `${ButtonSlot} > div, ${ButtonSlot} > div > div, ${ButtonSlot} iframe, ${ButtonSlot} [role='button']`,
  {
    width: '100% !important',
    maxWidth: '100% !important',
  },
);

export const GuideText = style({
  color: vars.colors.surface.outline,
  fontSize: vars.fonts.body3,
  textAlign: 'center',
  lineHeight: 1.5,

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.tablet}px)`]: {
      fontSize: vars.fonts.m_body2,
    },
  },
});
