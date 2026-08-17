import { BREAKPOINTS } from '@/common/constants/breakpoints';
import { keyframes, style } from '@vanilla-extract/css';

const skeletonShimmer = keyframes({
  '0%': {
    backgroundPosition: '100% 0',
  },
  '100%': {
    backgroundPosition: '-100% 0',
  },
});

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  minWidth: '16.666rem',
  maxWidth: '41rem',
  width: '100%',
  backgroundColor: '#FFFFFF',
  padding: '16px',
  borderRadius: '8px',
});

export const skeletonBlock = style({
  display: 'block',
  borderRadius: '6px',
  background: 'linear-gradient(90deg, #eef1f5 25%, #f7f8fa 50%, #eef1f5 75%)',
  backgroundSize: '200% 100%',
  animation: `${skeletonShimmer} 1.2s ease-in-out infinite`,
});

export const headerWrapper = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  marginBottom: '8px',
  padding: '0 4px',
});

export const type = style({
  width: '56px',
  height: '16px',
});

export const star = style({
  width: '20px',
  height: '20px',
  borderRadius: '50%',
});

export const name = style({
  width: '62%',
  height: '24px',
  margin: '0 4px 14px',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.tablet}px)`]: {
      height: '22px',
    },
  },
});

export const tagWrapper = style({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  width: '100%',
  marginTop: '2px',
});

export const tag = style({
  width: '58px',
  height: '24px',
  borderRadius: '999px',
});

export const status = style({
  width: '72px',
  height: '20px',
});
