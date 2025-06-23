import { style } from '@vanilla-extract/css';

export const container = style({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const innerWrapper = style({
  maxWidth: '1392px',
  width: '100%',
  marginTop: '0.722rem',
  marginBottom: '8.222rem',
  display: 'flex',
  justifyContent: 'start',
  alignItems: 'center',
  flexWrap: 'wrap',
});

export const cardStyle = style({
  margin: '0.722rem 0.6rem',
  selectors: {
    '&:nth-child(4n+1)': {
      marginLeft: '0',
    },
    '&:nth-child(4n+4)': {
      marginRight: '0',
    },
  },
});
