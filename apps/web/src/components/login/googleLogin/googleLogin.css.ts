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


export const ButtonSlot = style({
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  maxWidth: '100%',
  minHeight: '44px',
  // overflow: 'hidden',
});


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
