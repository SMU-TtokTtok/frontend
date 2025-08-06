import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';


export const button = style({
  display: 'flex',
  alignItems: 'center',
  gap: '6px',
  padding: '10px',
  alignSelf: 'flex-start',
  borderRadius: '4px',
});

export const text = style({
  fontSize: '16px',
  fontWeight: '500',
  color: '#55637D',
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
