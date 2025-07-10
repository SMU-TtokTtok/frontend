import { vars } from '@/common/styles/theme.css';
import { style, keyframes } from '@vanilla-extract/css';

const fadeIn = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
});

const fadeOut = keyframes({
  from: { opacity: 1 },
  to: { opacity: 0 },
});

export const modalBase = style({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  zIndex: 1000,
  backgroundColor: 'rgba(0, 0, 0, 0.6)',
});

export const fadeInStyle = style({
  animation: `${fadeIn} 0.3s ease-in-out forwards`,
});

export const fadeOutStyle = style({
  animation: `${fadeOut} 0.3s ease-in-out forwards`,
});

export const modalContent = style({
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
});

export const modalBody = style({
  color: vars.colors.surface.on_surf,
});
