import { createVar, style } from '@vanilla-extract/css';
import { vars } from '@/common/styles/theme.css';
import { BREAKPOINTS } from '@/common/constants/index';

export const sidebarTop = createVar();

export const wrapper = style({
  display: 'flex',
  gap: '24px',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      flexDirection: 'column',
    },
  },
});

export const rightSideContainer = style({
  display: 'flex',
  gap: '20px',
  width: '330px',
  flexDirection: 'column',
  transition: 'top 0.7s ease-out',
  top: sidebarTop,
  position: 'relative',
  alignSelf: 'flex-start', //!!

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.largeDesktop}px)`]: {
      width: '228px',
    },
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      display: 'none',
    },
  },
});

export const submitButton = style({
  width: '100%',
  borderRadius: '6px',
  padding: '16px 0',
  fontSize: vars.fonts.body2,
  fontWeight: '600',
});

export const submitButtonMobile = style({
  display: 'none',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      display: 'block',
      width: '100%',
      borderRadius: '6px',
      padding: '14px 0',
      fontSize: vars.fonts.m_body1,
      fontWeight: '600',
      marginBottom: '80px',
    },
  },
});

export const BoxFlex = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  backgroundColor: 'white',
  padding: '22px 24px',
  borderRadius: '8px',
});

export const BoxTitle = style({
  fontSize: vars.fonts.title4,
  fontWeight: '700',
  color: '#030304',
});

export const BoxContentContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '6px',
});

export const contentText = style({
  fontSize: vars.fonts.body2,
  color: '#030304',

  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});

export const contentContainer = style({
  padding: '16px',
  display: 'flex',
  flexDirection: 'column',
  gap: '18px',
  borderRadius: '8px',
  background: 'white',
  marginBottom: '200px',
  flexGrow: 1,
  flexShrink: 1,

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.largeDesktop}px)`]: {
      marginBottom: '180px',
    },
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      padding: '0',
      backgroundColor: 'transparent',
      marginBottom: '18px',
      width: '100%',
      gap: '16px',
    },
  },
});

export const FormHeader = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '18px',
  padding: '24px 30px',
  background: '#E9F2FF',
  borderRadius: '6px',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      padding: '16px 20px',
      border: '1px solid #CAE0FF',
    },
  },
});

export const FormTitle = style({
  fontSize: vars.fonts.title4,
  fontWeight: '600',
  color: '#001762',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      fontSize: vars.fonts.m_title3,
      lineHeight: '25px',
    },
  },
});

export const FormSubTitle = style({
  fontSize: vars.fonts.body1,
  fontWeight: '500',
  color: '#2A467E',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      fontSize: vars.fonts.m_body1,
      lineHeight: '21px',
    },
  },
});

export const FormBasicContainer = style({
  padding: '22px',
  borderRadius: '6px',
  background: '#F8F8F9',
  display: 'flex',
  flexDirection: 'column',
  gap: '40px',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      padding: '16px 14px',
      backgroundColor: 'white',
      gap: '20px',
    },
  },
});

export const FormContentFlex = style({
  display: 'flex',
  gap: '12px',
});

export const FormContentContainer = style({
  display: 'flex',
  gap: '8px',
  flexDirection: 'column',
  flexGrow: '1',
  flexShrink: '1',
});

export const FormContentTitle = style({
  fontSize: vars.fonts.body1,
  fontWeight: '600',
  color: '#030304',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      fontSize: vars.fonts.m_title4,
    },
  },
});

export const FormContentTitleEssential = style({
  color: '#254FDB',
});

export const FormContentSubTitle = style({
  fontSize: vars.fonts.m_body1,
  fontWeight: '500',
  color: '#55637D',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      fontSize: vars.fonts.m_body2,
    },
  },
});

export const FormInput = style({
  padding: '12px 16px',
  borderRadius: '6px',
  background: 'white',
  fontSize: vars.fonts.body2,
  lineHeight: '150%',

  selectors: {
    '&::placeholder': {
      color: '#D2D4D8',
    },
  },

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      backgroundColor: '#F8F8F9',
      padding: '10px 12px',
      fontSize: vars.fonts.m_body1,
      flexShrink: '1',
    },
  },
});

export const FormContentRadioContainer = style({
  display: 'flex',
  gap: '20px',
});

export const LabelContainer = style({
  display: 'flex',
  gap: '6px',
  alignItems: 'center',
});

export const RadioText = style({
  fontSize: vars.fonts.body2,
  fontWeight: '500',
  color: '#272E3B',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      fontSize: vars.fonts.m_body1,
    },
  },
});

export const FormGap = style({
  gap: '18px',
  display: 'flex',
  flexDirection: 'column',
});

// Questions Section Styles
// export const questionsSection = style({
//   display: 'flex',
//   flexDirection: 'column',
//   gap: '32px',
//   padding: '22px',
//   borderRadius: '6px',
//   background: '#F8F8F9',
// });

export const questionContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  borderRadius: '6px',
  padding: '22px',
  background: '#F8F8F9',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      backgroundColor: 'white',
      padding: '16px 14px',
      gap: '12px',
    },
  },
});

export const questionHeader = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      gap: '4px',
    },
  },
});

export const questionTitle = style({
  fontSize: vars.fonts.title4,
  fontWeight: '600',
  color: '#030304',
});

export const essential = style({
  color: '#254FDB',
  fontSize: vars.fonts.title4,
  fontWeight: '600',
});

export const questionSubTitle = style({
  fontSize: vars.fonts.body2,
  fontWeight: '500',
  color: '#55637D',
});

export const checkboxGroup = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
});

export const checkboxItem = style({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  cursor: 'pointer',
});

export const checkboxLabel = style({
  fontSize: vars.fonts.body2,
  fontWeight: '500',
  color: '#272E3B',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      fontSize: vars.fonts.m_body1,
    },
  },
});

export const radioGroup = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
});

export const radioItem = style({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  cursor: 'pointer',
});

export const radioLabel = style({
  fontSize: vars.fonts.body2,
  fontWeight: '500',
  color: '#272E3B',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      fontSize: vars.fonts.m_body1,
    },
  },
});

export const shortAnswerInput = style({
  padding: '12px 16px',
  borderRadius: '6px',
  background: 'white',
  fontSize: vars.fonts.body2,
  lineHeight: '150%',

  selectors: {
    '&::placeholder': {
      color: '#D2D4D8',
    },
  },

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      backgroundColor: '#F8F8F9',
      padding: '10px 12px',
      fontSize: vars.fonts.m_body2,
    },
  },
});

export const longAnswerTextarea = style({
  padding: '12px 16px',
  borderRadius: '6px',
  background: 'white',
  fontSize: vars.fonts.body2,
  lineHeight: '150%',
  resize: 'vertical',
  minHeight: '110px',

  selectors: {
    '&::placeholder': {
      color: '#D2D4D8',
    },
  },

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      backgroundColor: '#F8F8F9',
      padding: '10px 12px',
      fontSize: vars.fonts.m_body2,
    },
  },
});

export const fileInput = style({
  padding: '12px 16px',
  borderRadius: '6px',
  background: 'white',
  fontSize: vars.fonts.body2,
  lineHeight: '150%',
  border: '1px solid #E5E7EB',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      backgroundColor: '#F8F8F9',
      padding: '10px 12px',
      fontSize: vars.fonts.m_body1,
    },
  },
});

export const errorMessage = style({
  fontSize: vars.fonts.body2,
  color: '#DC2626',
  fontWeight: '500',
});

export const submitButtonContainer = style({
  display: 'flex',
  justifyContent: 'center',
  padding: '24px 0',
});
