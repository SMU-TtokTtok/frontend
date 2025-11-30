import { style } from '@vanilla-extract/css';
import { vars } from '@/common/styles/theme.css';
import { BREAKPOINTS } from '@/common/constants';

export const headerContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: '50px',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      marginTop: '30px',
    },
  },
});

export const iconContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: '14px',
});
export const excelContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: '4px',
  cursor: 'pointer',
});
export const excelText = style({
  fontSize: vars.fonts.body2,
  color: '#ABABAB',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      fontSize: vars.fonts.m_body2,
    },
  },
});

export const title = style({
  fontSize: vars.fonts.title2,
  fontWeight: 600,
  color: '#030304',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      fontSize: vars.fonts.m_title2,
    },
  },
});

export const memberPanel = style({
  width: '100%',
  backgroundColor: vars.colors.surface.bright,
  padding: '20px',
  borderRadius: '8px',
  marginTop: '20px',
  marginBottom: '200px',
});

export const editAndCloseIcon = style({
  cursor: 'pointer',
});
