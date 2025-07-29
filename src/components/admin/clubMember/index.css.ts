import { style } from '@vanilla-extract/css';
import { vars } from '@/common/styles/theme.css';
import { BREAKPOINTS } from '@/common/constants';

export const wrapper = style({
  paddingLeft: '280px',
  paddingRight: '374px',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.largeDesktop}px)`]: {
      paddingLeft: '246px',
      paddingRight: '20px',
    },
  },
});

export const container = style({
  // maxWidth: '1038px',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
});

export const memberPanel = style({
  width: '100%',
  backgroundColor: vars.colors.surface.bright,
  padding: '20px',
  borderRadius: '8px',
  marginTop: '20px',
  marginBottom: '200px',
});

export const searchResultContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
});
