import { style } from '@vanilla-extract/css';

export const searchBarContainer = style({
  position: 'relative',
  width: '100%',
});

export const iconContainerBase = style({
  position: 'absolute',
  right: 14,
  top: '50%',
  transform: 'translateY(-50%)',
});
