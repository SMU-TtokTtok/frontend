import { style } from '@vanilla-extract/css';

export const searchBarContainer = style({
  position: 'relative',
});

export const iconContainerBase = style({
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
});
