import { BREAKPOINTS } from '@/common/constants';
import { vars } from '@/common/styles/theme.css';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const indicatorContainer = style({
  display: 'flex',
  justifyContent: 'start',
  alignItems: 'center',
});

export const step = style({
  fontSize: vars.fonts.body1,
  fontWeight: 400,
  color: vars.colors.surface.outline_var,
});

export const stepActive = style({
  fontSize: vars.fonts.body1,
  fontWeight: 500,
  color: vars.colors.surface.outline,
  textDecoration: 'underline',
});

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100vh',
});

export const header = recipe({
  base: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'start',
    alignItems: 'start',
  },
  variants: {
    step: {
      1: {
        width: '1156px',
        '@media': {
          [`screen and (max-width: ${BREAKPOINTS.largeDesktop}px)`]: {
            width: '944px',
          },
        },
      },
      2: {
        width: '1392px',
        '@media': {
          [`screen and (max-width: ${BREAKPOINTS.largeDesktop}px)`]: {
            width: '944px',
          },
        },
      },
      3: {
        marginTop: '20px',
      },
    },
  },
});

export const Title = style({
  marginTop: '12px',
  fontSize: vars.fonts.title2,
  fontWeight: 600,
  color: vars.colors.surface.on_surf,
  textAlign: 'start',
});

export const descriptionInBox = style({
  fontSize: vars.fonts.title4,
  fontWeight: 500,
  color: vars.colors.surface.on_surf,
  textAlign: 'center',
  marginTop: '10px',
  marginBottom: '32px',
});
export const TitleInBox = style({
  fontSize: vars.fonts.title3,
  fontWeight: 600,
  color: vars.colors.surface.on_surf,
  textAlign: 'center',
});

//면접,서류 전형 선택페이지
export const selectTypeContainer = style({
  marginTop: '26px',
  backgroundColor: vars.colors.surface.bright,
  padding: '70px 118px',
  position: 'relative',
  maxWidth: '1156px',
  width: '100%',
  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.largeDesktop}px)`]: {
      width: '944px',
      padding: '70px 60px',
    },
  },
});

export const selectTypeLabel = style({
  fontSize: vars.fonts.title4,
  fontWeight: 600,
  color: vars.colors.surface.on_surf,
  textAlign: 'center',
});

export const selectButtonContainer = style({
  display: 'flex',
  justifyContent: 'start',
  alignItems: 'start',
  gap: '24px',
  marginTop: '30px',
});

export const selectButton = recipe({
  base: {
    backgroundColor: vars.colors.surface.default,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '42px 0',
    width: '448px',
    cursor: 'pointer',

    '@media': {
      [`screen and (max-width: ${BREAKPOINTS.largeDesktop}px)`]: {
        width: '400px',
      },
    },
  },
});

export const selected = style({
  backgroundColor: vars.colors.surface.cont_5,
});

export const selectButtonDescription = style({
  textAlign: 'center',
  fontSize: vars.fonts.body1,
  color: vars.colors.surface.outline,
  fontWeight: 500,
  marginTop: '10px',
});

export const nextStepButton = style({
  marginTop: '20px',
  padding: '16px 137px',
  fontSize: vars.fonts.body2,
  fontWeight: 600,
  color: vars.colors.white,
  borderRadius: '6px',
  display: 'flex',
  justifyContent: 'end',
});

export const nextStepButtonWrapper = recipe({
  base: {
    display: 'flex',
    justifyContent: 'end',
    width: '1156px',
  },
  variants: {
    step: {
      1: {
        '@media': {
          [`screen and (max-width: ${BREAKPOINTS.largeDesktop}px)`]: {
            width: '944px',
          },
        },
      },
      2: {
        '@media': {
          [`screen and (max-width: ${BREAKPOINTS.largeDesktop}px)`]: {
            width: '864px',
          },
        },
      },
    },
  },
});

// 모집기간 대상설정 페이지
export const targetMemberContainer = style({
  display: 'flex',
  justifyContent: 'start',
  alignItems: 'center',
  gap: '16px',
  marginTop: '18px',
});

export const recruitConditionBox = style({
  marginTop: '26px',
  backgroundColor: vars.colors.surface.bright,
  padding: '68px 118px',
  position: 'relative',
  maxWidth: '1392px',
  width: '100%',
  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.largeDesktop}px)`]: {
      width: '944px',
      padding: '68px 40px',
    },
  },
});
