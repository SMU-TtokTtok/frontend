import { vars } from '@/common/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  paddingLeft: '100px',
  paddingRight: '200px',
});

export const wrapper = style({
  maxWidth: '1038px',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
});
