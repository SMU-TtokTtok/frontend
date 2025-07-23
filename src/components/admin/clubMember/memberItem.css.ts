import { style } from '@vanilla-extract/css';
import { vars } from '@/common/styles/theme.css';

export const memberItemList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
});

export const container = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px 20px',
  borderRadius: '6px',
  backgroundColor: '#F8F8F9',
});

export const withOutRoleContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
});

export const grade = style({
  borderRadius: '4px',
  padding: '4px 6px',
  fontSize: vars.fonts.body2,
  fontWeight: '500',
});

export const name = style({
  fontSize: vars.fonts.body2,
  fontWeight: '600',
  color: '#030304',
});

export const bar = style({
  color: '#B8BEC9',
  fontSize: vars.fonts.body1,
});

export const major = style({
  color: '#55637D',
  fontSize: vars.fonts.body3,
});

export const role = style({
  borderRadius: '100px',
  padding: '8px 16px',
  fontSize: vars.fonts.body2,
  lineHeight: '150%',
});
