import { globalStyle, style } from '@vanilla-extract/css';
import { vars } from '@/common/styles/theme.css';
import { BREAKPOINTS } from '@/common/constants/breakpoints';

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
 * GIS媛 ??div ?덉뿉 踰꾪듉???뚮뜑留곹븳?? ?믪씠???뚮뜑 ???덉씠?꾩썐 ?붾뱾由쇱쓣 留됯린 ?꾪븳 媛?
 * GIS??width ?듭뀡? "理쒖냼" ?덈퉬???쇰꺼??湲몃㈃ 吏?뺢컪蹂대떎 ?볤쾶 洹몃젮吏꾨떎.
 * 醫곸? ?붾㈃?먯꽌 移대뱶 諛뽰쑝濡??섏튂吏 ?딅룄濡??ш린????踰???媛?붾떎.
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
 * GIS??踰꾪듉??理쒕? 400px源뚯?留?洹몃━怨?洹?媛믪쓣 ?몃씪??style濡?諛뺤븘 ?ｋ뒗??
 * 移대뱶 ??쓣 梨꾩슦?ㅻ㈃ ?몃씪?몄쓣 ?닿꺼???댁꽌 !important媛 ?꾩슂?섎떎.
 * ?대? ?대옒?ㅻ챸? ?쒕룆?붾릺??諛붾????덉뼱 援ъ“? role留뚯쑝濡??좏깮?쒕떎.
 * ?좏깮?먭? ?닿툔?섎룄 400px 踰꾪듉?쇰줈 蹂댁씪 肉??숈옉?먮뒗 ?곹뼢???녿떎.
 */
globalStyle(
  `${ButtonSlot} > div, ${ButtonSlot} > div > div, ${ButtonSlot} iframe, ${ButtonSlot} [role='button']`,
  {
    width: '100% !important',
    maxWidth: '100% !important',
  },
);

globalStyle(
  `${ButtonSlot}:focus:not(:focus-visible), ${ButtonSlot} iframe:focus:not(:focus-visible), ${ButtonSlot} [role='button']:focus:not(:focus-visible)`,
  {
    outline: 'none !important',
    boxShadow: 'none !important',
    borderColor: '#dadce0 !important',
  },
);

globalStyle(
  `${ButtonSlot}:focus-visible, ${ButtonSlot} iframe:focus-visible, ${ButtonSlot} [role='button']:focus-visible`,
  {
    outline: `2px solid ${vars.colors.primary.base} !important`,
    outlineOffset: '-2px',
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
