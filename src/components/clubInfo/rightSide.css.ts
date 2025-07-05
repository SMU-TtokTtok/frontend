import { vars } from '@/common/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  position: 'fixed',
  width: '330px',
  right: '100px', //
  top: '200px', //
});

export const contentFlex = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  backgroundColor: 'white',
  padding: '24px 26px',
  borderRadius: '8px',
  marginBottom: '20px',
});

export const itemFlex = style({
  display: 'flex',
  gap: '28px',
  alignItems: 'center',
});

export const itemTitle = style({
  fontWeight: 600,
  color: '#818181',
  fontSize: vars.fonts.body3,
});

export const itemContent = style({
  fontWeight: 500,
  fontSize: vars.fonts.body1,
});

export const button = style({
  width: '100%',
  padding: '16px 0',
  fontWeight: 600,
  fontSize: vars.fonts.body2,
  borderRadius: '6px',
});

export const buttonDisabled = style({
  cursor: 'not-allowed',
});

export const notRecruiting = style({
  fontWeight: 500,
  fontSize: vars.fonts.body1,
  color: '#55637D',
});
