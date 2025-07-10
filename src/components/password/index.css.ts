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
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      padding: '30px 20px 90px 20px',
      display: 'block',
    },
  },
});

export const Container = style({
  width: '1156px',
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      width: '100%',
    },
  },
});

export const Title = style({
  fontSize: vars.fonts.title2,
  fontWeight: '600',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      fontSize: '20px',
    },
  },
});

export const BoxContainer = recipe({
  base: {
    padding: '32px',
    backgroundColor: 'white',
    display: 'flex',
    borderRadius: '8px',

    '@media': {
      [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
        flexDirection: 'column',
      },
    },
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
          [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
            gap: 0,
          },
        },
      },
      large: {
        gap: '134px',
        '@media': {
          [`screen and (max-width: ${BREAKPOINTS.largeDesktop}px)`]: {
            gap: '122px',
          },
          [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
            gap: 0,
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

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      paddingBottom: '16px',
      borderBottom: '1px solid #EDEEF1',
      fontSize: '16px',
      fontWeight: '700',
    },
  },
});

export const BoxSubTitle = style({
  fontSize: vars.fonts.body1,
  fontWeight: '600',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      fontSize: '14px',
    },
  },
});

export const SubContainer = style({
  display: 'flex',
  gap: '18px',
  flex: '1 0 0',
  alignItems: 'flex-start',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      flexDirection: 'column',
      marginTop: '16px',
      alignItems: 'stretch',
    },
  },
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

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      fontSize: '14px',
      // flex: '1 1 0',
      minWidth: '0',
    },
  },
});

export const Button = style({
  padding: '16px',
  fontSize: vars.fonts.body2,
  fontWeight: '600',
  borderRadius: '6px',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      fontSize: '12px',
    },
  },
});

export const SubmitButton = style({
  width: '330px',
  padding: '16px 0',
  borderRadius: '6px',
  fontSize: vars.fonts.body2,
  fontWeight: '600',
  alignSelf: 'flex-end',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      width: '100%',
      fontSize: '14px',
    },
  },
});

export const responsiveBr = style({
  display: 'inline',
  '@media': {
    'screen and (max-width: 1024px)': {
      display: 'none',
    },
  },
});

export const ErrorMessage = style({
  color: 'red',
  fontSize: '14px',
});
