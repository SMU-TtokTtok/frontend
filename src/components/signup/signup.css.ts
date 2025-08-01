import { style } from '@vanilla-extract/css';
import { vars } from '@/common/styles/theme.css';
import { BREAKPOINTS } from '@/common/constants/';

export const Container = style({
  minHeight: 'inherit',
  paddingTop: '100px',
  paddingBottom: '100px',
  display: 'flex',
  justifyContent: 'center',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.largeDesktop}px)`]: {
      display: 'block',
      paddingLeft: '40px',
      paddingRight: '40px',
    },
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      padding: '30px 20px 80px 20px',
    },
  },
});

export const BoxContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  width: '1156px',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.largeDesktop}px)`]: {
      width: '100%',
    },
  },
});

export const TitleText = style({
  fontSize: vars.fonts.title1,
  fontWeight: '600',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      fontSize: '20px',
    },
  },
});

export const LabelBoxContainer = style({
  borderRadius: '6px',
  backgroundColor: 'white',
  padding: '32px',
  display: 'flex',
  // gap: '112px',
  alignItems: 'flex-start',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      display: 'block',
      padding: '20px 16px',
    },
  },
});

export const LabelText = style({
  fontSize: vars.fonts.title4,
  fontWeight: '700',
  whiteSpace: 'nowrap',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      paddingBottom: '16px',
      borderBottom: '1px solid #EDEEF1',
      fontSize: '16px',
    },
  },
});

export const LabelDetailBox = style({
  display: 'flex',
  gap: '18px',
  flex: '1 1 0',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      display: 'block',
    },
  },
});

export const LabelDetailText = style({
  fontSize: vars.fonts.body1,
  fontWeight: '600',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      fontSize: '14px',
    },
  },
});

export const FlexBox = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  flex: '1 1 0',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      paddingTop: '16px',
      gap: '8px',
    },
  },
});

export const FlexBox2 = style({
  display: 'flex',
  gap: '8px',
  flex: '1 1 0',
  justifyContent: 'space-between',
});

export const EmailBox = style({
  display: 'flex',
  gap: '8px',
  alignItems: 'center',
  flex: '1 1',
});
export const EmailText = style({
  fontSize: vars.fonts.body2,
  fontWeight: '500',
  color: '#55637D',
});

export const Input = style({
  backgroundColor: '#F8F8F9',
  borderRadius: '6px',
  padding: '12px 16px',
  fontSize: vars.fonts.body1,
  flex: ' 1 1 0 ',
  height: '48px',
  width: '100%', // !!

  selectors: {
    '&::placeholder': {
      color: '#E0E1E3',
    },
  },

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      height: '40px',
      fontSize: '14px',
    },
  },
});

export const Button = style({
  borderRadius: '6px',
  padding: '16px',
  fontSize: vars.fonts.body2,
  fontWeight: '600',
  whiteSpace: 'nowrap',

  alignSelf: 'flex-start',
  // flexShrink: 0,
  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      padding: '12px 16px',
      fontSize: '14px',
    },
  },
});

export const FlexPolicy = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  flex: '1 0 0',
});

export const PolicyBox = style({
  padding: '20px 24px',
  backgroundColor: '#F8F8F9',
  borderRadius: '6px',
  color: '#272E3B',
  fontSize: vars.fonts.body3,
  whiteSpace: 'pre-line',
  height: '220px',
  overflowY: 'auto',
});

export const FlexAgree = style({
  display: 'flex',
  gap: '8px',
});

export const AgreeText = style({
  color: '#272E3B',
  fontSize: vars.fonts.body2,
});

export const SignupButton = style({
  fontSize: vars.fonts.body1,
  fontWeight: '600',
  padding: '16px',
  width: '330px',
  textAlign: 'center',
  alignSelf: 'flex-end',
  borderRadius: '6px',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      width: '100%',
      fontSize: '14px',
    },
  },
});

export const ErrorText = style({
  color: 'red',
  fontSize: '0.85rem',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      fontSize: '12px',
    },
  },
});
