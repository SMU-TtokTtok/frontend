import { vars } from '@/common/styles/theme.css';
import { style } from '@vanilla-extract/css';
export const step4Container = style({
  width: '100%',
  height: '90vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
});

export const innerWrapper = style({
  width: '920px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'start',
});

export const content = style({
  backgroundColor: vars.colors.white,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '20px',
  padding: '120px 236px',
  borderRadius: '8px',
});

export const title = style({
  color: vars.colors.surface.on_surf,
  fontSize: vars.fonts.title3,
  fontWeight: 600,
  textAlign: 'center',
  marginBottom: '20px',
});

export const button = style({
  fontSize: vars.fonts.body2,
  padding: '16px 173px',
  borderRadius: '6px',
});
