import { style } from '@vanilla-extract/css';
import { vars } from '@/common/styles/theme.css';

export const Container = style({
  minHeight: 'inherit',
  paddingTop: '100px',
  paddingBottom: '100px',
  display: 'flex',
  justifyContent: 'center',
});

export const BoxContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  width: '1156px',
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
