import { style } from '@vanilla-extract/css';
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

/** GIS가 이 div 안에 버튼을 렌더링한다. 높이는 렌더 전 레이아웃 흔들림을 막기 위한 값. */
export const ButtonSlot = style({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  minHeight: '44px',
});

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
