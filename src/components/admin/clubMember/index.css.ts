import { style } from '@vanilla-extract/css';
import { vars } from '@/common/styles/theme.css';

export const wrapper = style({
  paddingLeft: '21.222rem',
  paddingRight: '27.778rem',
});

export const container = style({
  maxWidth: '1038px',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
});

export const title = style({
  fontSize: vars.fonts.title2,
  fontWeight: 600,
  color: '#030304',
  marginTop: '50px',
});

export const memberPanel = style({
  width: '100%',
  backgroundColor: vars.colors.surface.bright,
  padding: '20px',
  borderRadius: '8px',
  marginTop: '20px',
});
