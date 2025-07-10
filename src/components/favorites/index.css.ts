import { style } from '@vanilla-extract/css';
import { vars } from '@/common/styles/theme.css';
import { BREAKPOINTS } from '@/common/constants';

export const HeaderWrapper = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '80px',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.largeDesktop}px)`]: {
      padding: '0 20px',
    },
  },
});

export const HeaderContainer = style({
  display: 'flex',
  fontSize: vars.fonts.title2,
  justifyContent: 'space-between',
  alignItems: 'center',

  maxWidth: '1392px',
  width: '100%',
});

export const SortFlex = style({
  display: 'flex',
  backgroundColor: 'white',
  borderRadius: '8px',
  padding: '4px',
});

export const TitleText = style({
  fontSize: vars.fonts.title2,
  fontWeight: '700',
});

export const ButtonStyle = style({
  fontSize: vars.fonts.body2,
  fontWeight: '600',
  padding: '10px 16px',
});
