import { vars } from '@/common/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const applicantItemWrapper = style({
  padding: ' 16px 1.111rem',
  backgroundColor: vars.colors.surface.default,
  marginBottom: '0.556rem',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  cursor: 'pointer',
  borderRadius: '6px',
});

export const profileSection = style({
  display: 'flex',
  justifyContent: 'start',
  alignItems: 'center',
  gap: 8,
});

export const applicantGrade = style({
  width: '49px',
  height: '1.5rem',
  fontSize: vars.fonts.body2,
  padding: '0.222rem  ',
  textAlign: 'center',
  border: 'none',
  borderRadius: '4px',
});

export const applicantName = style({
  fontSize: vars.fonts.body1,
  fontWeight: 600,
  color: vars.colors.surface.on_surf,
});

export const verticalLine = style({
  width: '1px',
  height: '21px',
  backgroundColor: vars.colors.surface.outline_var,
});

export const applicantDepartment = style({
  fontSize: vars.fonts.body2,
  fontWeight: 400,
  color: vars.colors.surface.outline,
});

export const applicantStatus = style({
  fontSize: vars.fonts.body1,
  fontWeight: 400,
  color: vars.colors.surface.on_surf,
});

export const dropDownButtonStyle = style({
  padding: '8px 8px 8px 16px',
  fontSize: vars.fonts.body2,
  width: '92px',
  borderRadius: '100px',
});

export const dropDownItem = style({
  width: '92px',
  cursor: 'pointer',
  color: vars.colors.surface.on_surf,
  fontSize: vars.fonts.body2,
  fontWeight: 600,
  textAlign: 'center',
  padding: '12px 20px',
  selectors: {
    '&:hover': {
      backgroundColor: vars.colors.primary.base,
      color: vars.colors.primary.default,
    },
  },
});

export const empty = style({
  fontSize: vars.fonts.body1,
  fontWeight: 500,
  color: vars.colors.surface.outline,
  marginTop: '20px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '190px',
});
