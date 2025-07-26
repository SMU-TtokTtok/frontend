import { vars } from '@/common/styles/theme.css';
import { style, styleVariants } from '@vanilla-extract/css';

export const applicantDetailModal = style({
  width: '90vw',
  height: '90vh',
  borderRadius: '8px',
});

export const closeButton = style({
  position: 'absolute',
  top: '12px',
  right: '12px',
  cursor: 'pointer',
});

export const header = style({
  backgroundColor: vars.colors.primary.default,
  height: '65px',
  flexShrink: 0,
});

export const body = style({
  backgroundColor: vars.colors.white,
  display: 'flex',
  justifyContent: 'start',
  alignItems: 'start',
  overflowY: 'auto',
  padding: '20px 20px 0 20px',
});

export const userInfo = style({
  backgroundColor: vars.colors.surface.default,
  borderRadius: '8px',
  padding: '16px',
  marginRight: 320,
  width: '100%',
});

export const basicInfo = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'start',
  alignItems: 'start',
  gap: '40px',
  backgroundColor: vars.colors.surface.bright,
  padding: '22px',
  borderRadius: '6px',
});

export const rowSort = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '8px',
  width: '100%',
});

export const LabelWithText = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'start',
  alignItems: 'start',
  width: '100%',
  gap: '8px',
});

export const label = style({
  fontSize: vars.fonts.title4,
  fontWeight: 600,
  color: vars.colors.surface.on_surf,
});

export const essential = style({
  color: vars.colors.primary.default,
});

export const input = style({
  padding: '12px 16px',
  fontSize: vars.fonts.body2,
  width: '100%',
});

export const applicantInfoField = style({
  width: '100%',
  backgroundColor: vars.colors.surface.default,
  padding: '22px',
  marginBottom: '18px',
  borderRadius: '6px',
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
});

export const applicantInfoInput = style({
  width: '100%',
  fontSize: vars.fonts.body2,
  color: vars.colors.surface.outline,
  fontWeight: 400,
  padding: '12px 16px',
  borderRadius: '6px',
  selectors: {
    '&::placeholder': {
      color: vars.colors.surface.cont_5,
    },
  },
});
export const applicantInfoLabel = style({
  fontSize: vars.fonts.title4,
  color: vars.colors.surface.on_surf,
  fontWeight: 600,
});

export const applicantInfoBlock = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  width: '100%',
});
export const rawsort = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '20px',
});

export const columnSort = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'start',
  gap: '12px',
  width: '100%',
});

export const applicantInfoRadio = style({
  width: '20px',
  height: '20px',
  border: `1px solid ${vars.colors.surface.outline_var}`,
  cursor: 'not-allowed !important',
});

export const imgStyle = style({
  width: '20px',
  height: '20px',
});

export const answer = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'start',
  alignItems: 'start',
  backgroundColor: vars.colors.surface.bright,
  padding: '22px',
  borderRadius: '6px',
  marginTop: '16px',
});

export const subTitle = style({
  fontSize: vars.fonts.body2,
  color: vars.colors.surface.outline,
  fontWeight: 500,
  marginTop: '8px',
  marginBottom: '16px',
});

export const AnswerInput = style({
  padding: '12px 16px',
  fontSize: vars.fonts.body2,
  fontWeight: 400,
  width: '100%',
});

export const AnswerTextarea = style({
  padding: '12px 16px',
  fontSize: vars.fonts.body2,
  fontWeight: 400,
  width: '100%',
  resize: 'none',
  backgroundColor: vars.colors.surface.default,
});

export const answerCheckbox = style({
  width: '20px',
  height: '20px',
});

export const answerCheckboxContainer = style({
  marginBottom: '8px',
});

export const footerContainer = style({
  width: '100%',
  height: '69px',
  padding: '18px 20px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const footerButton = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '4px',
  cursor: 'pointer',
});

export const arrowIcon = styleVariants({
  default: {
    width: '24px',
    height: '24px',
  },
  back: {
    width: '24px',
    height: '24px',
    transform: 'rotate(180deg)',
  },
});

export const footerNextStep = style({
  color: '#898989',
  fontSize: vars.fonts.body1,
  fontWeight: 500,
});
