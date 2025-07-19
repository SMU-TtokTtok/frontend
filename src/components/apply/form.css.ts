import { style } from '@vanilla-extract/css';
import { vars } from '@/common/styles/theme.css';

export const container = style({
  padding: '16px',
  display: 'flex',
  flexDirection: 'column',
  gap: '18px',
  borderRadius: '8px',
  background: 'white',
  marginBottom: '200px',
});

export const FormHeader = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '18px',
  padding: '24px 30px',
  background: '#E9F2FF',
  borderRadius: '6px',
});

export const FormTitle = style({
  fontSize: vars.fonts.title3,
  fontWeight: '600',
  color: '#001762',
});

export const FormSubTitle = style({
  fontSize: vars.fonts.body1,
  fontWeight: '500',
  color: '#2A467E',
});

export const FormBasicContainer = style({
  padding: '22px',
  borderRadius: '6px',
  background: '#F8F8F9',
  display: 'flex',
  flexDirection: 'column',
  gap: '40px',
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
});

export const FormContentTitle = style({
  fontSize: vars.fonts.title4,
  fontWeight: '600',
  color: '#030304',
});

export const FormContentTitleEssential = style({
  color: '#254FDB',
});

export const FormContentSubTitle = style({
  fontSize: vars.fonts.body2,
  fontWeight: '500',
  color: '#55637D',
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
  fontSize: vars.fonts.body1,
  fontWeight: '500',
  color: '#272E3B',
});
