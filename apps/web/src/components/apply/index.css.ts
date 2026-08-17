import { keyframes, style } from '@vanilla-extract/css';
import { BREAKPOINTS } from '@/common/constants/breakpoints';
import { vars } from '@/common/styles/theme.css';

const skeletonShimmer = keyframes({
  '0%': {
    backgroundPosition: '100% 0',
  },
  '100%': {
    backgroundPosition: '-100% 0',
  },
});

export const wrapper = style({
  // paddingLeft: '264px',
  // paddingRight: '450px',

  display: 'flex',
  justifyContent: 'center',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.largeDesktop}px)`]: {
      paddingLeft: '40px',
      paddingRight: '40px',
    },
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      paddingLeft: '20px',
      paddingRight: '20px',
    },
  },
});

export const container = style({
  // maxWidth: '1038px',
  width: '1392px',
  // width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      width: '100%',
    },
  },
});

export const applyHeader = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  padding: '4px 0 8px',
});

export const clubName = style({
  color: vars.colors.charcoal,
  fontSize: vars.fonts.title3,
  fontWeight: 700,
});

export const applyTitle = style({
  color: vars.colors.surface.outline,
  fontSize: vars.fonts.body2,
  fontWeight: 500,
});

const skeletonBlock = style({
  borderRadius: '6px',
  background: 'linear-gradient(90deg, #eef1f5 25%, #f7f8fa 50%, #eef1f5 75%)',
  backgroundSize: '200% 100%',
  animation: `${skeletonShimmer} 1.2s ease-in-out infinite`,
});

export const clubNameSkeleton = style([
  skeletonBlock,
  {
    width: '180px',
    height: '28px',
  },
]);

export const applyTitleSkeleton = style([
  skeletonBlock,
  {
    width: '96px',
    height: '20px',
  },
]);
