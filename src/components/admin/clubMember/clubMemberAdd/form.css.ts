import { style } from '@vanilla-extract/css';
import { vars } from '@/common/styles/theme.css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  borderRadius: '10px',
  padding: '20px 16px 16px 16px',
  backgroundColor: 'white',
});

export const title = style({
  fontSize: vars.fonts.title4,
  fontWeight: '600',
  color: '#030304',
});
