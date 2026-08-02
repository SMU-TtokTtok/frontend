import { globalStyle, style } from '@vanilla-extract/css';
import { vars } from '@/common/styles/theme.css';
import { BREAKPOINTS } from '@/common/constants/breakpoints';

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
 * ?곗뒪?ы넲? ?ъ쭊(?쇱そ) + ?댁슜(?ㅻⅨ履? 2?? 醫곸븘吏硫??꾩븘?섎줈 ?볦씤??
 * ?믪씠瑜??뺤젙?댁빞(height + minmax(0, 1fr)) ???⑥쓽 ?믪씠媛 留욊퀬 ?댁슜 履쎌뿉 ?ㅽ겕濡ㅼ씠 ?앷릿??
 * ???믪씠瑜?auto濡??먮㈃ ?댁슜留뚰겮 ?섏뼱???ъ쭊 ?꾨옒??鍮?怨듦컙???앷린怨??ㅽ겕濡ㅻ룄 ??嫄몃┛??
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
 * ?ъ쭊 鍮꾩쑉???대뼸???섎━吏 ?딄쾶 contain. ?뺤궗媛곹삎???꾨땲硫??⑤뒗 怨듦컙??諛곌꼍?됱쑝濡?蹂댁씤??
 * ?곗뒪?ы넲?먯꽌??紐⑤떖 ?믪씠瑜?洹몃?濡?梨꾩슦怨? 紐⑤컮?쇱뿉?쒕쭔 ?뺤궗媛곹삎?쇰줈 ?〓뒗??
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

/** ?숈븘由щ챸쨌?쒕ぉ? 怨좎젙?섍퀬 蹂몃Ц留??ㅽ겕濡ㅻ릺?꾨줉 ?먯떊? ?섏튂吏 ?딄쾶 ?붾떎 */
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

/** ?쒕ぉ??二쇱씤怨듭씠誘濡??숈븘由щ챸? 洹??꾩뿉 ?뱁엳???묒? ?쇰꺼濡??붾떎 */
export const clubName = style({
  flexShrink: 0,
  paddingRight: '44px', // ?リ린 踰꾪듉怨?寃뱀튂吏 ?딄쾶
  fontSize: vars.fonts.body2,
  fontWeight: 500,
  color: vars.colors.surface.on_surf_var,

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      fontSize: vars.fonts.m_body2,
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
  fontSize: vars.fonts.title2,
  fontWeight: 700,
  lineHeight: '140%',
  color: vars.colors.surface.on_surf,
  wordBreak: 'break-word',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      fontSize: vars.fonts.m_title3,
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
 * ?댁슜? ?먮뵒?곌? 留뚮뱺 HTML?대떎.
 * ?뚭컻湲??.content-container???⑤뵫쨌min-height媛 ???⑤꼸 湲곗??대씪 ?곗? ?딄퀬,
 * ?먯떇 ?붿냼 ?ㅽ??쇰쭔 媛숈? ?ш린 泥닿퀎濡?留욎텣??
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

/** 鍮?以꾨룄 ?뚭컻湲怨??숈씪?섍쾶 ?믪씠瑜??좎??쒕떎 */
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
