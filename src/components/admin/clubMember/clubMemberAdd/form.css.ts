import { style } from '@vanilla-extract/css';
import { vars } from '@/common/styles/theme.css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  borderRadius: '10px',
  padding: '20px 16px 16px 16px',
  backgroundColor: 'white',
  marginBottom: '276px',
});

export const title = style({
  fontSize: vars.fonts.title4,
  fontWeight: '600',
  color: '#030304',
});

export const ButtonContainer = style({
  display: 'flex',
  gap: '18px',
  marginTop: '18px',
});

export const Button = style({
  flexGrow: 1,
  padding: '16px 0',
  fontSize: vars.fonts.body2,
  fontWeight: '600',
  borderRadius: '6px',
});
