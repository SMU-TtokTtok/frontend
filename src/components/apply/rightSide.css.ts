import { style } from '@vanilla-extract/css';
import { vars } from '@/common/styles/theme.css';

export const container = style({
  position: 'fixed',
  width: '330px',
  right: '100px',
  top: '200px',
});

export const BoxFlex = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  backgroundColor: 'white',
  padding: '22px 24px',
  borderRadius: '8px',
  marginBottom: '20px',
});

export const BoxTitle = style({
  fontSize: vars.fonts.title4,
  fontWeight: '700',
  color: '#030304',
});

export const ContentContainer = style({
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

export const Button = style({
  width: '100%',
  fontSize: vars.fonts.body2,
  fontWeight: '600',
  borderRadius: '6px',
  padding: '16px 0',
});
