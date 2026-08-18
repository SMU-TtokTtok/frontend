import { style } from '@vanilla-extract/css';
import { keyframes } from '@vanilla-extract/css';
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
  display: 'flex',
  gap: '24px',
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
  display: 'flex',
  gap: '24px',
  // maxWidth: '1392px',
  width: '1392px',
  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.largeDesktop}px)`]: {
      width: '100%',
    },
  },
});

export const leftcontainer = style({
  maxWidth: '1038px',
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  flexGrow: 1,
  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.largeDesktop}px)`]: {
      maxWidth: '100%',
    },
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      gap: '16px',
    },
  },
});

export const skeletonBlock = style({
  display: 'block',
  borderRadius: '6px',
  background: 'linear-gradient(90deg, #eef1f5 25%, #f7f8fa 50%, #eef1f5 75%)',
  backgroundSize: '200% 100%',
  animation: `${skeletonShimmer} 1.2s ease-in-out infinite`,
});

export const profileSkeleton = style({
  display: 'flex',
  gap: '24px',
  padding: '28px',
  borderRadius: '8px',
  backgroundColor: vars.colors.white,

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      flexDirection: 'column',
      padding: '20px',
    },
  },
});

export const profileImageSkeleton = style({
  width: '180px',
  height: '180px',
  flexShrink: 0,

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      width: '100%',
      height: '180px',
    },
  },
});

export const profileTextSkeleton = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '14px',
  flexGrow: 1,
});

export const clubNameSkeleton = style({
  width: '42%',
  height: '32px',
});

export const clubSummarySkeleton = style({
  width: '76%',
  height: '20px',
});

export const profileTagsSkeleton = style({
  display: 'flex',
  gap: '8px',
});

export const tagSkeleton = style({
  width: '72px',
  height: '28px',
  borderRadius: '999px',
});

export const introSkeleton = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '14px',
  padding: '28px',
  borderRadius: '8px',
  backgroundColor: vars.colors.white,
});

export const introTitleSkeleton = style({
  width: '160px',
  height: '28px',
});

export const introLineSkeleton = style({
  width: '100%',
  height: '18px',
});

export const introLineShortSkeleton = style({
  width: '64%',
  height: '18px',
});

export const rightSkeleton = style({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  flexBasis: '330px',
  top: '124px',
  flexShrink: 0,
  flexGrow: 0,
  padding: '24px',
  borderRadius: '8px',
  backgroundColor: vars.colors.white,
  alignSelf: 'flex-start',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.largeDesktop}px)`]: {
      display: 'none',
      top: '0',
    },
  },
});

export const sideTitleSkeleton = style({
  width: '120px',
  height: '24px',
});

export const sideButtonSkeleton = style({
  width: '100%',
  height: '48px',
});

export const sideLineSkeleton = style({
  width: '100%',
  height: '18px',
});
