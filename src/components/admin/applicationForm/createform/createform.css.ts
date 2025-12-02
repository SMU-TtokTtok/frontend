import { BREAKPOINTS } from '@/common/constants';
import { vars } from '@/common/styles/theme.css';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const indicatorContainer = style({
  display: 'flex',
  justifyContent: 'start',
  alignItems: 'center',
  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop - 1}px)`]: {
      marginBottom: '6px',
    },
  },
});

export const step = recipe({
  base: {
    fontSize: vars.fonts.body1,
    fontWeight: 400,
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    '@media': {
      [`screen and (max-width: ${BREAKPOINTS.desktop - 1}px)`]: {
        fontSize: vars.fonts.m_body1,
      },
    },
  },
  variants: {
    isActive: {
      true: {
        fontWeight: 500,
        color: vars.colors.surface.outline,
      },
      false: {
        fontWeight: 500,
        color: vars.colors.surface.outline_var,
      },
    },
  },
});

export const stepNumber = recipe({
  base: {
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '22px',
    height: '23px',
    fontSize: vars.fonts.body3,
    '@media': {
      [`screen and (max-width: ${BREAKPOINTS.desktop - 1}px)`]: {
        width: '20px',
        height: '21px',
        fontSize: vars.fonts.m_body3,
      },
    },
  },
  variants: {
    isActive: {
      false: {
        color: vars.colors.white,
        backgroundColor: vars.colors.surface.outline_var,
      },
      true: {
        color: vars.colors.white,
        backgroundColor: vars.colors.primary.default,
      },
    },
  },
});

export const stepActive = style({
  fontSize: vars.fonts.body1,
});
export const indicator = recipe({
  base: {
    '@media': {
      [`screen and (max-width: ${BREAKPOINTS.tablet}px)`]: {
        display: 'none',
      },
    },
  },
  variants: {
    isActive: {
      true: {
        textDecoration: 'underline',
      },
      false: {},
    },
  },
});

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
  paddingTop: '80px',
  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop - 1}px)`]: {
      padding: '0 20px',
    },
    [`screen and (max-width: ${BREAKPOINTS.tablet}px)`]: {
      padding: '40px 20px',
    },
  },
});

export const IndicatorArrow = style({
  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.tablet}px)`]: {
      width: '16px',
      height: '16px',
    },
  },
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
        maxWidth: '1156px',
        width: '100%',
        '@media': {
          [`screen and (max-width: ${BREAKPOINTS.largeDesktop}px)`]: {
            maxWidth: '944px',
            width: '100%',
          },
        },
      },
      2: {
        width: '1392px',
        '@media': {
          [`screen and (max-width: ${BREAKPOINTS.largeDesktop}px)`]: {
            maxWidth: '944px',
            width: '100%',
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

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop - 1}px)`]: {
      fontSize: vars.fonts.m_title2,
    },
  },
});

export const descriptionInBox = style({
  fontSize: vars.fonts.title4,
  fontWeight: 500,
  color: '#5A6379',
  textAlign: 'center',
  marginTop: '10px',
  marginBottom: '32px',
  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop - 1}px)`]: {
      fontSize: vars.fonts.m_title4,
    },
    [`screen and (max-width: ${BREAKPOINTS.tablet}px)`]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'start',
    },
  },
});
export const TitleInBox = style({
  fontSize: vars.fonts.title3,
  fontWeight: 600,
  color: vars.colors.surface.on_surf,
  textAlign: 'center',
  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop - 1}px)`]: {
      fontSize: vars.fonts.m_title3,
    },
  },
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
    [`screen and (max-width: ${BREAKPOINTS.desktop - 1}px)`]: {
      maxWidth: '944px',
      width: '100%',
      padding: '44px 14px',
    },
  },
});

export const selectTypeLabel = recipe({
  base: {
    fontSize: vars.fonts.title4,
    fontWeight: 600,
    color: vars.colors.surface.on_surf,
    textAlign: 'center',
    '@media': {
      [`screen and (max-width: ${BREAKPOINTS.desktop - 1}px)`]: {
        fontSize: vars.fonts.m_title4,
      },
    },
  },
  variants: {
    isSelected: {
      true: {
        color: vars.colors.primary.default,
      },
      false: {},
    },
  },
});

export const selectButtonContainer = style({
  display: 'flex',
  justifyContent: 'start',
  alignItems: 'start',
  gap: '24px',
  marginTop: '30px',
  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.tablet}px)`]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'start',
    },
  },
});

export const selectButton = recipe({
  base: {
    backgroundColor: vars.colors.surface.default,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '42px 0',
    width: '100%',
    maxWidth: '448px',
    cursor: 'pointer',

    '@media': {
      [`screen and (max-width: ${BREAKPOINTS.largeDesktop}px)`]: {
        width: '400px',
      },
      [`screen and (max-width: ${BREAKPOINTS.desktop - 1}px)`]: {
        maxWidth: '700px',
        width: '100%',
      },
    },
  },
  variants: {
    isSelected: {
      true: {
        backgroundColor: vars.colors.primary.base,
      },
      false: {},
    },
  },
});

export const selected = style({
  backgroundColor: vars.colors.primary.base,
  color: vars.colors.primary.default,
});

export const selectButtonDescription = recipe({
  base: {
    fontSize: vars.fonts.body1,
    fontWeight: 500,
    color: vars.colors.surface.outline,
    textAlign: 'center',
    marginTop: '10px',
    '@media': {
      [`screen and (max-width: ${BREAKPOINTS.desktop - 1}px)`]: {
        fontSize: vars.fonts.m_body1,
      },
    },
  },
  variants: {
    isSelected: {
      true: {
        color: vars.colors.primary.default,
      },
      false: {},
    },
  },
});

export const nextStepButton = style({
  marginTop: '20px',
  padding: '16px 137px',
  fontSize: vars.fonts.body2,
  fontWeight: 600,
  color: vars.colors.white,
  borderRadius: '6px',
  display: 'block',
  maxWidth: '330px',
  width: '100%',
  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop - 1}px)`]: {
      fontSize: vars.fonts.m_title4,
      maxWidth: '335px',
      width: '100%',
    },
    [`screen and (max-width: ${BREAKPOINTS.tablet}px)`]: {
      maxWidth: '944px',
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '16px 0',
    },
  },
});

export const nextStepButtonContainer = recipe({
  base: {
    display: 'flex',
    justifyContent: 'end',
    maxWidth: '1156px',
    width: '100%',
  },
  variants: {
    step: {
      1: {
        '@media': {
          [`screen and (max-width: ${BREAKPOINTS.largeDesktop}px)`]: {
            maxWidth: '944px',
            width: '100%',
          },
          [`screen and (max-width: ${BREAKPOINTS.tablet}px)`]: {
            display: 'flex',
            justifyContent: 'center',
          },
        },
      },
      2: {
        '@media': {
          [`screen and (max-width: ${BREAKPOINTS.largeDesktop}px)`]: {
            maxWidth: '944px',
            width: '100%',
          },
        },
      },
    },
    isInterview: {
      default: {},
      true: {
        '@media': {
          [`screen and (max-width: ${BREAKPOINTS.largeDesktop}px)`]: {
            marginTop: '177px',
          },
          [`screen and (max-width: ${BREAKPOINTS.tablet}px)`]: {
            marginTop: '197px',
          },
        },
      },
      false: {
        marginTop: '0px',
      },
    },
  },
});

export const buttonWrapper = style({
  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.tablet}px)`]: {
      maxWidth: '944px',
      width: '100%',
      marginBottom: '40px',
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
  position: 'relative',
  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.tablet}px)`]: {
      flexDirection: 'column',
    },
  },
});

export const recruitConditionBox = style({
  marginTop: '26px',
  backgroundColor: vars.colors.surface.bright,
  padding: '68px 118px',
  position: 'relative',
  maxWidth: '1392px',
  width: '100%',
  borderRadius: '6px',
  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.largeDesktop}px)`]: {
      width: '944px',
      padding: '68px 40px',
    },
    [`screen and (max-width: ${BREAKPOINTS.desktop - 1}px)`]: {
      maxWidth: '944px',
      width: '100%',
      padding: '44px 14px',
    },
    [`screen and (max-width: ${BREAKPOINTS.tablet}px)`]: {
      padding: '36px 14px 14px 14px',
    },
  },
});
