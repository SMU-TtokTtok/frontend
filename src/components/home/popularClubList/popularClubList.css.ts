import { BREAKPOINTS } from '@/common/constants';
import { vars } from '@/common/styles/theme.css';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const Container = style({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: vars.colors.surface.cont_1_var,
  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.largeDesktop}px)`]: {
      padding: '0 20px',
    },
  },
});
export const InnerWrapper = style({
  width: '100%',
  padding: '76px 0 96px 0',
  position: 'relative',
  maxWidth: '1392px',
  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.tablet}px)`]: {
      padding: '22px 0',
    },
  },
});
export const TitleWrapper = style({
  display: 'flex',
  justifyContent: 'space-between',
  margin: '0 64px 1rem 64px',
  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.tablet}px)`]: {
      margin: '0 0 14px 0',
    },
  },
});

export const Title = style({
  fontSize: '1.333rem',
  fontWeight: '700',
  color: vars.colors.primary.default,
  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.tablet}px)`]: {
      fontSize: vars.fonts.m_title3,
    },
  },
});

export const Plus = style({
  fontSize: '1rem',
  fontWeight: '500',
  textDecoration: 'underline',
  color: vars.colors.primary.default,
  cursor: 'pointer',
  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.tablet}px)`]: {
      fontSize: vars.fonts.m_body1,
    },
  },
});

export const PopularClubListWrapper = style({
  display: 'flex',
  justifyContent: 'start',
  alignItems: 'center',
});

export const sliderWrapper = style({
  display: 'flex',
  justifyContent: 'start',
  alignItems: 'center',
  overflowX: 'auto',
  margin: '0 64px',
  scrollBehavior: 'smooth',
  maxWidth: '1260px',
  selectors: {
    '&::-webkit-scrollbar': {
      display: 'none',
    },
    '&': {
      scrollbarWidth: 'none',
      msOverflowStyle: 'none',
    },
  },
  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.tablet}px)`]: {
      margin: '0',
    },
  },
});

export const sliderBtn = recipe({
  base: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '2.722rem',
    height: '2.722rem',
    position: 'absolute',
    zIndex: 0,
    borderRadius: '50%',
    background: vars.colors.white,
    '@media': {
      [`screen and (max-width: ${BREAKPOINTS.tablet}px)`]: {
        display: 'none',
      },
    },
  },
  variants: {
    direction: {
      left: {
        left: 0,
      },
      right: {
        transform: 'rotate(180deg)',
        right: 0,
      },
    },
  },
});

export const cardStyle = style({
  margin: '0 0.444rem',
  width: '18.33rem',
  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.largeDesktop}px)`]: {
      width: '300px',
    },
  },
});

export const empty = style({
  padding: '40px 0',
  fontSize: vars.fonts.title3,
  fontWeight: 500,
  color: vars.colors.surface.outline,
});

export const emptyWrapper = style({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
});
