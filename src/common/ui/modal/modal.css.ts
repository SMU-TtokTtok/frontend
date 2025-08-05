import { vars } from '@/common/styles/theme.css';
import { style } from '@vanilla-extract/css';
import { fadeIn } from '@/common/styles/animation.css';

export const modalBase = style({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  zIndex: 1000,
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
});

export const contentBaseStyle = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  borderRadius: '6px',
  backgroundColor: vars.colors.white,
  maxWidth: '80%',
  animation: `${fadeIn} 0.3s ease-in-out forwards`,
});

export const bodyBaseStyle = style({
  color: vars.colors.surface.on_surf,
  width: '100%',
});

export const headerBaseStyle = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  position: 'relative',
});

export const labelBaseStyle = style({
  fontSize: vars.fonts.title4,
  fontWeight: 700,
  color: vars.colors.surface.on_surf,
});

export const closeButtonStyle = style({
  cursor: 'pointer',
  width: '24px',
  height: '24px',
});
