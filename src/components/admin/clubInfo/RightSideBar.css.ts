import { style } from '@vanilla-extract/css';
import { vars } from '@/common/styles/theme.css';

export const container = style({
  position: 'fixed',
  top: '212px',
  right: '3.8%',
  width: '330px',
});

export const contentBox = style({
  background: 'white',
  borderRadius: '8px',
  padding: '24px 26px',
  marginBottom: '20px',
});

export const flexRow = style({
  display: 'flex',
  gap: '28px',
});

export const grayText = style({
  color: '#818181',
  fontSize: '16px',
});

export const blackText = style({
  color: '#030304',
  fontSize: '18px',
});

export const modifyButton = style({
  width: '100%',
  textAlign: 'center',
  padding: '16px 0',
  borderRadius: '6px',
  fontSize: vars.fonts.body1,
  fontWeight: '600',
});
