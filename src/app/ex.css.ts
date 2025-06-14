import { style } from '@vanilla-extract/css';
import { vars } from '../common/styles/theme.css';
export const myStyle2 = style({
  color: vars.colors.error.primary,
  fontSize: vars.fonts.display2,
});
