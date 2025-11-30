import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { BREAKPOINTS } from '@/common/constants';
import { vars } from '@/common/styles/theme.css';

export const button = style({
  display: 'flex',
  alignItems: 'center',
  gap: '6px',
  padding: '10px',
  alignSelf: 'flex-start',
  borderRadius: '4px',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      padding: '8px',
    },
  },
});

export const text = style({
  fontSize: vars.fonts.body2,
  fontWeight: '500',
  color: '#55637D',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      fontSize: `${vars.fonts.m_body2}`,
    },
  },
});

export const addMemberButton = recipe({
  base: {
    marginBottom: '8px',
  },
  variants: {
    marginTop: {
      true: {
        marginTop: '16px',
      },
      false: {},
    },
  },
  defaultVariants: {
    marginTop: false,
  },
});
