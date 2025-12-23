import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '@/common/styles/theme.css';
import { BREAKPOINTS } from '@/common/constants';

export const container = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px 20px',
  borderRadius: '6px',
  backgroundColor: '#F8F8F9',
  flexGrow: 1,

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      padding: '10px 12px',
    },
  },
});

export const withOutRoleContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
});

export const grade = style({
  borderRadius: '4px',
  padding: '4px 6px',
  fontSize: vars.fonts.body2,
  fontWeight: '500',
  border: 'none !important',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      fontSize: `${vars.fonts.m_body2}`,
    },
  },
});

export const name = style({
  fontSize: vars.fonts.body2,
  fontWeight: '600',
  color: '#030304',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      fontSize: `${vars.fonts.m_body2}`,
    },
  },
});

export const bar = style({
  color: '#B8BEC9',
  fontSize: vars.fonts.body1,
});

export const major = style({
  color: '#55637D',
  fontSize: vars.fonts.body3,

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      fontSize: `${vars.fonts.m_body3}`,
    },
  },
});

export const role = style({
  borderRadius: '100px',
  padding: '8px 16px',
  fontSize: vars.fonts.body2,
  lineHeight: '150%',
});

export const isEditingContainer = styleVariants({
  true: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
  },
  false: {
    display: 'block',
  },
});

export const dropDownStyle = style({
  padding: '8px 8px 8px 16px',
  fontSize: vars.fonts.body2,
  fontWeight: '600',
  lineHeight: '150%',
  borderRadius: '100px',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      padding: '6px 12px 6px 12px',
      fontSize: `${vars.fonts.m_body2}`,
    },
  },
});

export const panelContainer = style({
  marginTop: '5px',
  width: '100%',
  textAlign: 'center',
});

export const panelItem = style({
  padding: '8px 0',
  color: '#292E39',
  fontSize: vars.fonts.body2,
  fontWeight: 600,
  cursor: 'pointer',
  backgroundColor: vars.colors.surface.bright,
  lineHeight: '150%',

  selectors: {
    '&:not(:last-child)': {
      borderBottom: '1px solid #E7E8EA',
    },
    '&:hover': {
      backgroundColor: '#E9F2FF',
      color: '#0052EC',
    },
    '&:first-child': {
      borderTopLeftRadius: '4px',
      borderTopRightRadius: '4px',
    },
    '&:last-child': {
      borderBottomLeftRadius: '4px',
      borderBottomRightRadius: '4px',
    },
  },

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      padding: '6px 0',
      fontSize: `${vars.fonts.m_body2}`,
    },
  },
});
