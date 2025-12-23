import { BREAKPOINTS } from '@/common/constants';
import { vars } from '@/common/styles/theme.css';
import { globalStyle, style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const container = style({
  backgroundColor: vars.colors.surface.default,
  padding: '26px 24px',
  width: '100%',
  height: 'auto',
  position: 'relative',
  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.tablet}px)`]: {
      padding: '16px 12px',
    },
  },
});

export const interviewContainer = style({
  backgroundColor: vars.colors.surface.default,
  padding: '26px 24px',
  width: '100%',
  height: 'auto',
  position: 'relative',
  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.largeDesktop}px)`]: {
      position: 'absolute',
      top: '157px',
    },
    [`screen and (max-width: ${BREAKPOINTS.tablet}px)`]: {
      position: 'absolute',
      top: '237px',
      padding: '16px 12px',
    },
  },
});

export const label = style({
  fontSize: vars.fonts.title4,
  fontWeight: 600,
  color: vars.colors.surface.on_surf,
  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.tablet}px)`]: {
      fontSize: vars.fonts.m_title4,
    },
  },
});

export const required = style({
  color: vars.colors.primary.default,
});

export const datePickerContainer = style({
  display: 'flex',
  justifyContent: 'start',
  alignItems: 'center',
  marginTop: '12px',
  width: '100%',
  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.tablet}px)`]: {
      flexDirection: 'column',
    },
  },
});

export const datePickerInput = style({
  width: '100%',
  padding: '12px 0 12px 16px',
  height: '52px',
  borderTopLeftRadius: '6px',
  borderBottomLeftRadius: '6px',
  fontSize: vars.fonts.body2,
  color: vars.colors.surface.on_surf,
  backgroundColor: vars.colors.surface.bright,
  cursor: 'pointer',

  selectors: {
    '&::placeholder': {
      color: vars.colors.surface.cont_5,
    },
  },

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.tablet}px)`]: {
      padding: '10px 12px',
      fontSize: vars.fonts.m_body1,
      height: 'auto',
    },
  },
});

export const recruitTargetContainer = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '12px',
  gap: '8px',
});

export const gradeButton = recipe({
  base: {
    padding: '15px 0',
    maxWidth: '124px',
    width: '100%',
    fontSize: vars.fonts.body1,
    fontWeight: 500,
    color: vars.colors.surface.outline,
    backgroundColor: vars.colors.surface.bright,
    borderRadius: '6px',
    '@media': {
      [`screen and (max-width: ${BREAKPOINTS.tablet}px)`]: {
        padding: '12px 0',
        fontSize: vars.fonts.m_body1,
      },
    },
  },
  variants: {
    active: {
      true: {
        backgroundColor: vars.colors.primary.base,
        color: vars.colors.primary.default,
      },
      false: {},
    },
  },
});

export const recruitMember = style({
  padding: '15px 16px',
  marginTop: '12px',
  fontSize: vars.fonts.body2,
  width: '100%',
  selectors: {
    '&::placeholder': {
      color: vars.colors.surface.cont_5,
    },
  },
  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.tablet}px)`]: {
      fontSize: vars.fonts.m_body1,
      padding: '10px 12px',
    },
  },
});

export const DateContainer = style({
  display: 'flex',
  justifyContent: 'start',
  alignItems: 'center',
  marginTop: '12px',
  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.tablet}px)`]: {
      flexDirection: 'column',
    },
  },
});

export const calendarContainer = style({
  position: 'absolute',
  zIndex: 2,
  bottom: '-305px',
  right: '0',
  backgroundColor: vars.colors.white,
  boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.1)',
});

export const inputDateContainer = style({
  width: '100%',
  display: 'flex',
  justifyContent: 'start',
  alignItems: 'center',
  position: 'relative',
});

export const imgBox = style({
  padding: '12px 8px',
  backgroundColor: vars.colors.primary.base,
  borderTopRightRadius: '6px',
  borderBottomRightRadius: '6px',
  cursor: 'pointer',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.tablet}px)`]: {
      padding: '5px',
    },
  },
});

globalStyle('.custom-calendar .rdp-caption_label', {
  paddingLeft: '15px',
});
