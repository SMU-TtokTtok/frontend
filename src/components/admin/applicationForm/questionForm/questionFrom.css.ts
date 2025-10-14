import { vars } from '@/common/styles/theme.css';
import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'start',
  alignItems: 'start',
  backgroundColor: vars.colors.surface.bright,
  borderRadius: '8px',
  padding: '16px',
  marginTop: '21px',
  width: '100%',
});

export const header = style({
  backgroundColor: vars.colors.primary.base,
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'start',
  alignItems: 'start',
  padding: '24px 30px',
  borderRadius: '6px',
  marginBottom: '18px',
});

export const title = style({
  fontSize: vars.fonts.title4,
  fontWeight: 600,
  padding: '7px 5px',
  width: '100%',
  borderBottom: `1px solid ${vars.colors.primary.fixed}`,
  transition: 'background-color 0.3s ease-in-out',
  selectors: {
    '&:hover': {
      backgroundColor: vars.colors.surface.bright,
    },
    '&:focus': {
      backgroundColor: vars.colors.surface.bright,
    },
    '&::placeholder': {
      color: vars.colors.primary.on_cont,
    },
  },
});

export const titleContainer = recipe({
  base: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  variants: {
    title: {
      formTitle: {
        marginBottom: '16px',
      },
      questionTitle: {
        marginBottom: '8px',
      },
    },
  },
});

export const description = style({
  width: '100%',
  fontSize: vars.fonts.body1,
  fontWeight: 500,
  color: vars.colors.primary.on_cont,
  padding: '12px 5px',
  resize: 'none',
  height: '50px',
  borderBottom: `1px solid ${vars.colors.primary.fixed}`,
  transition: 'background-color 0.3s ease-in-out',
  selectors: {
    '&:hover': {
      backgroundColor: vars.colors.surface.bright,
    },
    '&:focus': {
      backgroundColor: vars.colors.surface.bright,
      textDecoration: 'none',
    },
    '&::placeholder': {
      color: vars.colors.primary.on_cont,
    },
  },
});

export const errorMessage = style({
  color: vars.colors.error.primary,
  fontSize: vars.fonts.body3,
  marginTop: '8px',
  marginLeft: '5px',
});

export const formFeildBlock = style({
  width: '100%',
  backgroundColor: vars.colors.surface.default,
  padding: '0px 22px 22px 22px',
  marginBottom: '18px',
});

export const fieldToolBar = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '16px',
});

export const dropDownButton = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  border: 'none',
  borderRadius: '6px',
  width: '97.31px',
  fontSize: vars.fonts.body2,
  padding: '9px 6px 9px 12px',
});

export const dropDownList = style({
  width: '97.31px',
  backgroundColor: '#F1F2F3',
  borderRadius: '6px',
});

export const dropDownListItem = style({
  padding: '15px',
  cursor: 'pointer',
  textAlign: 'center',
  transition: 'background-color 0.3s ease-in-out',

  ':hover': {
    backgroundColor: vars.colors.surface.cont_1_var,
  },
  fontSize: vars.fonts.body2,
  fontWeight: 600,
  color: vars.colors.surface.on_surf_var,
  borderBottom: `1px solid ${vars.colors.surface.cont_2}`,
  ':last-child': {
    borderBottom: 'none',
  },
});

export const optionContainer = style({
  display: 'flex',
  justifyContent: 'start',
  alignItems: 'center',
});

export const essentialCheckbox = style({
  width: '22px',
  height: '22px',
  border: `1px solid ${vars.colors.surface.outline_var}`,
});

export const horizonLine = style({
  width: '1px',
  height: '29px',
  backgroundColor: vars.colors.surface.cont_5_var,
  margin: '0 16px',
});

export const deleteButton = style({
  cursor: 'pointer',
});

export const questionTitle = style({
  fontSize: vars.fonts.body1,
  width: '100%',
  fontWeight: 600,
  color: vars.colors.surface.outline,
  borderBottom: `1px solid ${vars.colors.surface.outline}`,
  padding: '12px 5px',
  transition: 'background-color 0.3s ease-in-out',
  selectors: {
    '&:hover': {
      backgroundColor: vars.colors.surface.cont_1_var,
    },
    '&:focus': {
      backgroundColor: vars.colors.surface.cont_1_var,
    },
  },
});

export const questionDescription = style({
  fontSize: vars.fonts.body2,
  width: '100%',
  fontWeight: 500,
  height: '40px',
  color: vars.colors.surface.outline,
  borderBottom: `1px solid ${vars.colors.surface.outline_var}`,
  marginBottom: '16px',
  padding: '12px 5px',
  resize: 'none',
  transition: 'background-color 0.3s ease-in-out',
  selectors: {
    '&:hover': {
      backgroundColor: vars.colors.surface.cont_1_var,
    },
    '&:focus': {
      backgroundColor: vars.colors.surface.cont_1_var,
    },
  },
});
export const checkImg = style({
  width: '22px',
  height: '22px',
});

export const previewFeild = style({
  backgroundColor: vars.colors.surface.cont_1,
  color: vars.colors.surface.outline_var,
  fontSize: vars.fonts.body2,
  padding: '12px 16px',
  width: '100%',
});

export const fieldAddButton = style({
  cursor: 'pointer',
});

export const fieldRadioOptions = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  marginTop: '8px',
});

export const radioOption = style({
  display: 'flex',
  justifyContent: 'start',
  alignItems: 'center',
  padding: '8px 0',
});

export const radioOptionInput = style({
  fontSize: vars.fonts.body2,
  color: vars.colors.surface.outline,
  marginLeft: '8px',
  width: '100px',
  padding: '4px',
  borderBottom: `1px solid ${vars.colors.surface.outline_var}`,
  transition: 'background-color 0.3s ease-in-out',

  selectors: {
    '&:hover': {
      backgroundColor: vars.colors.surface.cont_1_var,
    },
    '&:focus': {
      backgroundColor: vars.colors.surface.cont_1_var,
    },
  },
});

export const addOptionButton = style({
  marginTop: '16px',
  width: '29px',
  height: '29px',
  cursor: 'pointer',
});

export const addFieldButton = style({
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const deleteOptionButton = style({
  marginLeft: '8px',
  cursor: 'pointer',
});

// 기본 인적사항
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
  fontSize: vars.fonts.body1,
  color: vars.colors.surface.on_surf,
  fontWeight: 600,
  marginBottom: '8px',
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
  marginBottom: '40px',
});

export const columnSort = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'start',
  width: '100%',
});

export const applicantInfoRadio = style({
  width: '20px',
  height: '20px',
  border: `1px solid ${vars.colors.surface.outline_var}`,
  cursor: 'not-allowed !important',
});

export const checkbox = style({
  width: '20px',
  height: '20px',
});

export const radio = style({
  width: '20px',
  height: '20px',
});
export const dragWrapper = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'grab',
});
export const dragHandle = style({
  width: '40px',
  height: '40px',
  transform: 'rotate(90deg)',
});
