import { BREAKPOINTS } from '@/common/constants';
import { vars } from '@/common/styles/theme.css';
import { style, styleVariants } from '@vanilla-extract/css';

export const applicantDetailModal = style({
  width: '90vw',
  height: '90vh',
  borderRadius: '8px',
  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop - 1}px)`]: {
      width: '93vw',
      maxWidth: '93vw',
    },
  },
});

export const headerLabelContent = style({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
});

export const closeButton = style({
  position: 'absolute',
  top: '12px',
  right: '12px',
  cursor: 'pointer',
  color: vars.colors.white,
  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop - 1}px)`]: {
      width: '30px',
      height: '30px',
      filter:
        'brightness(0) saturate(100%) invert(40%) sepia(8%) saturate(1015%) hue-rotate(187deg) brightness(94%) contrast(87%)',
    },
  },
});

export const header = style({
  backgroundColor: vars.colors.primary.default,
  height: '65px',
  flexShrink: 0,
  borderTopLeftRadius: '8px',
  borderTopRightRadius: '8px',
  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop - 1}px)`]: {
      backgroundColor: '#F5F5F6',
      height: '55px',
      padding: '0 20px',
    },
  },
});

export const body = style({
  backgroundColor: vars.colors.white,
  display: 'flex',
  justifyContent: 'start',
  alignItems: 'start',
  overflowY: 'auto',
  overflowX: 'hidden',
  padding: '20px 20px 0 20px',
  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop - 1}px)`]: {
      flexDirection: 'column',
      height: 'auto',
      maxHeight: 'calc(90vh - 65px)',
      padding: '14px 12px 20px 12px',
    },
  },
});

export const userInfo = style({
  backgroundColor: vars.colors.surface.default,
  borderRadius: '8px',
  padding: '16px',
  marginRight: 320,
  width: '100%',
  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop - 1}px)`]: {
      marginRight: 0,
      padding: '0px',
      backgroundColor: vars.colors.white,
    },
  },
});

export const basicInfo = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'start',
  alignItems: 'start',
  gap: '40px',
  backgroundColor: vars.colors.surface.bright,
  padding: '22px',
  borderRadius: '6px',
  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop - 1}px)`]: {
      padding: '14px 12px',
      backgroundColor: vars.colors.surface.default,
    },
  },
});

export const rowSort = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '8px',
  width: '100%',
  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop - 1}px)`]: {
      flexDirection: 'column',
    },
  },
});

export const LabelWithText = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'start',
  alignItems: 'start',
  width: '100%',
  gap: '8px',
});

export const label = style({
  fontSize: vars.fonts.title4,
  fontWeight: 600,
  color: vars.colors.surface.on_surf,
  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop - 1}px)`]: {
      fontSize: vars.fonts.m_title4,
    },
  },
});

export const essential = style({
  color: vars.colors.primary.default,
});

export const input = style({
  padding: '12px 16px',
  fontSize: vars.fonts.body2,
  width: '100%',
  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop - 1}px)`]: {
      backgroundColor: vars.colors.white,
      padding: '10px 12px',
      fontSize: vars.fonts.m_body1,
    },
  },
});

export const applicantInfoField = style({
  width: '100%',
  backgroundColor: vars.colors.surface.default,
  padding: '22px',
  marginBottom: '18px',
  borderRadius: '6px',
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
});

export const applicantInfoInput = style({
  width: '100%',
  fontSize: vars.fonts.body2,
  color: vars.colors.surface.outline,
  fontWeight: 400,
  padding: '12px 16px',
  borderRadius: '6px',
  selectors: {
    '&::placeholder': {
      color: vars.colors.surface.cont_5,
    },
  },
});
export const applicantInfoLabel = style({
  fontSize: vars.fonts.title4,
  color: vars.colors.surface.on_surf,
  fontWeight: 600,
  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop - 1}px)`]: {
      fontSize: vars.fonts.m_title4,
    },
  },
});

export const applicantInfoBlock = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  width: '100%',
});
export const rawsort = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '20px',
  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop - 1}px)`]: {
      gap: '8px',
      flexWrap: 'wrap',
    },
  },
});

export const columnSort = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'start',
  gap: '12px',
  width: '100%',
});

export const applicantInfoRadio = style({
  width: '20px',
  height: '20px',
  border: `1px solid ${vars.colors.surface.outline_var}`,
  cursor: 'not-allowed !important',
});

export const imgStyle = style({
  width: '20px',
  height: '20px',
});

export const answer = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'start',
  alignItems: 'start',
  backgroundColor: vars.colors.surface.bright,
  padding: '22px',
  borderRadius: '6px',
  marginTop: '16px',
  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop - 1}px)`]: {
      padding: '14px 12px',
      backgroundColor: vars.colors.surface.default,
    },
  },
});

export const subTitle = style({
  fontSize: vars.fonts.body2,
  color: vars.colors.surface.outline,
  fontWeight: 500,
  marginTop: '8px',
  marginBottom: '16px',
  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop - 1}px)`]: {
      fontSize: vars.fonts.m_body1,
    },
  },
});

export const AnswerInput = style({
  padding: '12px 16px',
  fontSize: vars.fonts.body2,
  fontWeight: 400,
  width: '100%',
  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop - 1}px)`]: {
      backgroundColor: vars.colors.white,
      padding: '10px 12px',
      fontSize: vars.fonts.m_body1,
    },
  },
});

export const AnswerTextarea = style({
  padding: '12px 16px',
  fontSize: vars.fonts.body2,
  fontWeight: 400,
  width: '100%',
  resize: 'none',
  backgroundColor: vars.colors.surface.default,
  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop - 1}px)`]: {
      backgroundColor: vars.colors.white,
      padding: '10px 12px',
      fontSize: vars.fonts.m_body1,
    },
  },
});

export const answerCheckbox = style({
  width: '20px',
  height: '20px',
});

export const answerCheckboxContainer = style({
  marginBottom: '8px',
});

export const footerContainer = style({
  width: '100%',
  height: '69px',
  padding: '18px 20px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const footerButton = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '4px',
  cursor: 'pointer',
});

export const arrowIcon = styleVariants({
  default: {
    width: '24px',
    height: '24px',
  },
  back: {
    width: '24px',
    height: '24px',
    transform: 'rotate(180deg)',
  },
});

export const footerNextStep = style({
  color: '#898989',
  fontSize: vars.fonts.body1,
  fontWeight: 500,
});

export const fileDownload = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '4px',
  cursor: 'pointer',
});
export const fileDownloadText = style({
  color: vars.colors.primary.default,
  fontSize: vars.fonts.body2,
  fontWeight: 500,
  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop - 1}px)`]: {
      fontSize: vars.fonts.m_body1,
    },
  },
});

export const headerLabel = style({
  display: 'none',
  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop - 1}px)`]: {
      display: 'block',
      fontSize: vars.fonts.m_title3,
      fontWeight: 600,
      color: vars.colors.surface.on_surf,
    },
  },
});

export const headerTag = style({
  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop - 1}px)`]: {
      fontSize: vars.fonts.m_body1,
      padding: '4px 6px',
    },
  },
});

export const hideOnMobile = style({
  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop - 1}px)`]: {
      display: 'none',
    },
  },
});
