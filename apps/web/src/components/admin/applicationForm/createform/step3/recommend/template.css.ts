import { vars } from '@/common/styles/theme.css';
import { style } from '@vanilla-extract/css';
import { BREAKPOINTS } from '@/common/constants';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'start',
  alignItems: 'start',
  position: 'fixed',
  top: '85px',
  left: '20px',
  backgroundColor: vars.colors.surface.bright,
  borderRadius: '8px',
  zIndex: 1000,
  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop - 1}px)`]: {
      display: 'none',
    },
  },
});

export const dropdownContainer = style({
  display: 'none',
  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop - 1}px)`]: {
      display: 'block',
      marginBottom: '24px',
      position: 'absolute',
      top: '695px',
      left: '20px',
    },
  },
});

export const dropdownButton = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '8px',
  padding: '18px 8px 18px 14px',
  backgroundColor: vars.colors.surface.cont_2_var,
  border: `1px solid ${vars.colors.surface.cont_3_var}`,
  borderRadius: '6px',
  width: '162px',
  cursor: 'pointer',
  fontSize: vars.fonts.m_body1,
  fontWeight: 600,
  color: vars.colors.surface.on_surf,
  ':hover': {
    backgroundColor: vars.colors.surface.cont_1_var,
  },
});

export const dropdownPanel = style({
  marginTop: '8px',
  backgroundColor: vars.colors.surface.bright,
  borderRadius: '8px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
});

export const header = style({
  backgroundColor: vars.colors.surface.cont_2_var,
  padding: '20px 24px',
});

export const label = style({
  fontSize: vars.fonts.title4,
  color: vars.colors.surface.on_surf,
  fontWeight: 600,
});

export const description = style({
  fontSize: vars.fonts.body1,
  color: vars.colors.surface.outline,
  fontWeight: 500,
  marginTop: '8px',
});

export const templateList = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  padding: '14px',
  width: '100%',
  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop - 1}px)`]: {
      padding: '0px',
    },
  },
});

export const templateItemContainer = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '16px 16px 16px 20px',
  backgroundColor: vars.colors.surface.default,
  borderRadius: '8px',
  width: '100%',
  cursor: 'pointer',
  ':hover': {
    backgroundColor: vars.colors.surface.cont_2_var,
  },
  transition: 'background-color 0.3s ease-in-out',
  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop - 1}px)`]: {
      backgroundColor: vars.colors.white,
      padding: '12px 14px',
      borderBottom: `1px solid ${vars.colors.surface.cont_2}`,
      ':last-child': {
        borderBottom: 'none',
      },
    },
  },
});

export const dropdownIcon = style({
  width: '24px',
  height: '24px',
  transition: 'transform 0.2s ease',
});

export const templateItemLabel = style({
  fontSize: vars.fonts.body1,
  color: vars.colors.surface.on_surf_var,
  fontWeight: 500,
  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop - 1}px)`]: {
      fontSize: vars.fonts.m_body1,
    },
  },
});
