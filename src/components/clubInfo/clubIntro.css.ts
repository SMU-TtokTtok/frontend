import { style } from '@vanilla-extract/css';
import { vars } from '@/common/styles/theme.css';

export const container = style({
  width: '100%',
  marginBottom: '180px',
});

export const headerContainer = style({
  display: 'flex',
});

export const headerItem = style({
  flex: '1 0 0',
  textAlign: 'center',
  cursor: 'pointer',
  padding: '20px 0 ',
  borderRadius: '6px 6px 0px 0px',
  fontWeight: 700,
  fontSize: vars.fonts.body2,
});

export const contentContainer = style({
  width: '100%',
  padding: '26px 28px',
  backgroundColor: 'white',
  minHeight: '300px',
  borderRadius: '0 0 8px 8px',
});
