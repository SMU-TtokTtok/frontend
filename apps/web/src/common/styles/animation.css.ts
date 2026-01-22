import { globalKeyframes } from '@vanilla-extract/css';

export const fadeInRight = 'fadeInRight';
globalKeyframes(fadeInRight, {
  '0%': { opacity: 0, transform: 'translateX(100%)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
});

export const fadeOutRight = 'fadeOutRight';
globalKeyframes(fadeOutRight, {
  '0%': { opacity: 1, transform: 'translateX(0)' },
  '100%': { opacity: 0, transform: 'translateX(100%)' },
});

export const fadeIn = 'fadeIn';
globalKeyframes(fadeIn, {
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
});
