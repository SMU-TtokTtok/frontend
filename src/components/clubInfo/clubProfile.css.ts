import { style } from '@vanilla-extract/css';
import { vars } from '@/common/styles/theme.css';

export const clubProfile = style({
  display: 'flex',
  gap: '24px',
});

export const imageStyle = style({
  borderRadius: '8px',
});

export const RightFlex = style({
  flex: '1 0 0',
  backgroundColor: 'white',
  borderRadius: '8px',
  padding: '22px',
  position: 'relative',
});

export const type = style({
  fontSize: vars.fonts.body1,
  fontWeight: 500,
});

export const name = style({
  fontSize: vars.fonts.title3,
  fontWeight: 600,
});

export const memberFlex = style({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '13px',
});

export const member = style({
  fontSize: vars.fonts.body1,
  fontWeight: 500,
  color: '#55637D',
});

export const description = style({
  fontSize: vars.fonts.body2,
  marginBottom: '16px',
});

export const tagFlex = style({
  display: 'flex',
  gap: '8px',
});

export const tagStyle = style({
  padding: '4px 12px',
  borderRadius: '100px',
});

export const star = style({
  position: 'absolute',
  top: '22px',
  right: '30px',
});
