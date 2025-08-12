import { vars } from '@/common/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const container = style({
  height: '100%',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '2rem',
});

export const pageContainer = style({
  height: '100vh',
  width: '100vw',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '2rem',
});

export const icon = style({
  width: 80,
  height: 80,
  marginBottom: '1rem',
});

export const title = style({
  fontSize: '2rem',
  fontWeight: 700,
  color: vars.colors.primary.default,
  marginBottom: '0.5rem',
});

export const message = style({
  fontSize: '1.1rem',
  color: '#334155',
  marginBottom: '1.5rem',
  textAlign: 'center',
});

export const button = style({
  padding: '0.75rem 2rem',
  borderRadius: 8,
  fontWeight: 600,
  fontSize: '1rem',
  cursor: 'pointer',
  boxShadow: '0 2px 8px 0 rgba(0,0,0,0.04)',
});
