import { vars } from '@/common/styles/theme.css';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { BREAKPOINTS } from '@/common/constants/';

export const Wrapper = style({
  minHeight: 'inherit',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.largeDesktop}px)`]: {
      padding: '0 40px',
    },
  },
});

export const Container = style({
  width: '1156px',
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
});

export const Title = style({
  fontSize: vars.fonts.title2,
  fontWeight: '600',
});

export const BoxContainer = recipe({
  base: {
    padding: '32px',
    backgroundColor: 'white',
    display: 'flex',
    borderRadius: '8px',
  },
  variants: {
    gap: {
      none: { gap: '0' },
      small: {
        gap: '112px',
        '@media': {
          [`screen and (max-width: ${BREAKPOINTS.largeDesktop}px)`]: {
            gap: '100px',
          },
        },
      },
      large: {
        gap: '134px',
        '@media': {
          [`screen and (max-width: ${BREAKPOINTS.largeDesktop}px)`]: {
            gap: '122px',
          },
        },
      },
    },
  },
  defaultVariants: {
    gap: 'none',
  },
});

export const BoxTitle = style({
  fontSize: vars.fonts.title4,
  fontWeight: '600',
});

export const BoxSubTitle = style({
  fontSize: vars.fonts.body1,
  fontWeight: '600',
});

export const SubContainer = style({
  display: 'flex',
  gap: '18px',
  flex: '1 0 0',
});

export const SubDetailContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  flex: '1 0 0',
});

export const InputButtonFlex = style({
  display: 'flex',
  gap: '8px',
});

export const Input = style({
  flex: '1 0 0',
  padding: '12px 16px',
  backgroundColor: '#F8F8F9 !important',
  selectors: {
    '&::placeholder': {
      color: '#D2D4D8',
    },
  },
});

export const Button = style({
  padding: '16px',
  fontSize: vars.fonts.body2,
  fontWeight: '600',
  borderRadius: '6px',
});

export const SubmitButton = style({
  width: '330px',
  padding: '16px 0',
  borderRadius: '6px',
  fontSize: vars.fonts.body2,
  fontWeight: '600',
  alignSelf: 'flex-end',
});
