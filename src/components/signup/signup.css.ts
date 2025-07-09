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
});

export const LabelBoxContainer = style({
  borderRadius: '6px',
  backgroundColor: 'white',
  padding: '32px',
  display: 'flex',
  // gap: '112px',
  alignItems: 'flex-start',
});

export const LabelText = style({
  fontSize: vars.fonts.title4,
  fontWeight: '700',
});

export const LabelDetailBox = style({
  display: 'flex',
  gap: '18px',
  flex: '1 0 0',
});

export const LabelDetailText = style({
  fontSize: vars.fonts.body1,
  fontWeight: '600',
});

export const FlexBox = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  flex: '1 0 0',
});

export const FlexBox2 = style({
  display: 'flex',
  gap: '8px',
  flex: '1 0 0',
});

export const Input = style({
  backgroundColor: '#F8F8F9',
  borderRadius: '6px',
  padding: '12px 16px',
  fontSize: vars.fonts.body1,
  flex: ' 1 0 0 ',
  height: '48px',
  // minWidth: '0',

  selectors: {
    '&::placeholder': {
      color: '#E0E1E3',
    },
  },
});

export const Button = style({
  borderRadius: '6px',
  padding: '16px',
  fontSize: vars.fonts.body2,
  fontWeight: '600',

  alignSelf: 'flex-start',
  // flexShrink: 0,
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
});

export const CompleteBox = style({
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',

  backgroundColor: 'white',
  borderRadius: '12px',
  padding: '48px',
  width: '100%',
  maxWidth: '586px',
  textAlign: 'center',
  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.06)',
});

export const CompleteTitle = style({
  fontSize: vars.fonts.title3,
  fontWeight: 700,
  marginBottom: '16px',
});

export const CompleteText = style({
  fontSize: vars.fonts.body2,
  color: '#272E3B',
  lineHeight: 1.6,
  marginBottom: '24px',
});

export const CompleteHighlight = style({
  color: '#2563eb',
  fontWeight: 600,
});

export const CompleteButton = style({
  width: '100%',
  padding: '16px',
  fontSize: vars.fonts.body1,
  fontWeight: 600,
  borderRadius: '6px',
});

export const ErrorText = style({
  color: 'red',
  fontSize: '0.85rem',
  marginTop: '4px',
});
