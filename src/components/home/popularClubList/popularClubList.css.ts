import { vars } from '@/common/styles/theme.css';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const Container = style({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: vars.colors.surface.cont_1_var,
});
export const InnerWrapper = style({
  width: '100%',
  padding: '76px 0 96px 0',
  position: 'relative',
  maxWidth: '1493px',
});
export const TitleWrapper = style({
  display: 'flex',
  justifyContent: 'space-between',
  margin: '0 64px 1rem 64px',
});

export const Title = style({
  fontSize: '1.333rem',
  fontWeight: '700',
  color: vars.colors.primary.default,
});

export const Plus = style({
  fontSize: '1rem',
  fontWeight: '500',
  textDecoration: 'underline',
  color: vars.colors.primary.default,
  cursor: 'pointer',
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
  width: '1365px',
  selectors: {
    '&::-webkit-scrollbar': {
      display: 'none',
    },
    '&': {
      scrollbarWidth: 'none',
      msOverflowStyle: 'none',
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
});
