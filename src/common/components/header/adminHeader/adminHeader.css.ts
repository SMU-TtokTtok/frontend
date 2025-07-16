import { vars } from '@/common/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const Logo = style({
  width: '50px',
  height: '36px',
});

export const AdminMessage = style({
  fontSize: vars.fonts.body2,
  color: vars.colors.primary.fixed_dim,
  fontWeight: 400,
});

export const InnerWrapper = style({
  padding: '10px 40px',
  maxWidth: '1840px',
});

export const RightArea = style({
  backgroundColor: vars.colors.primary.base,
  borderRadius: '8px',
  padding: '8px 12px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'start',
});
export const RightAreaIcon = style({
  width: '29px',
  height: '29px',
  backgroundColor: '#A5BDF5',
  borderRadius: '50%',
});

export const RightAreaText = style({
  fontSize: vars.fonts.body1,
  color: vars.colors.primary.default,
  fontWeight: 600,
  marginLeft: '8px',
});
