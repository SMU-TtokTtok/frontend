import { style } from '@vanilla-extract/css';
import { vars } from '@/common/styles/theme.css';
import { recipe } from '@vanilla-extract/recipes';
import { BREAKPOINTS } from '@/common/constants';

export const container = style({
  flex: '1 0 0',
  borderRadius: '8px',
  padding: '18px 24px',
  backgroundColor: 'white',
  // marginBottom: '28px',

  minWidth: 0,

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      padding: '18px 16px',
    },
  },
});

export const headerflex = style({
  display: 'flex',
  // justifyContent: 'space-between',
  marginBottom: '8px',
  gap: '8px',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      marginLeft: '72px',
      marginBottom: '6px',
    },
  },
});

export const clubName = style({
  fontSize: vars.fonts.title3,
  marginBottom: '6px',
  fontWeight: '600',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      marginLeft: '72px',
    },
    [`screen and (max-width: ${BREAKPOINTS.tablet}px)`]: {
      marginBottom: '2px',
      fontSize: vars.fonts.m_title3,
    },
  },
});

export const numberFlex = style({
  display: 'flex',
  marginBottom: '14px',
  alignItems: 'center',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      marginLeft: '72px',
    },
  },
});

export const numberText = style({
  fontSize: vars.fonts.body1,
  color: '#878787;',
  fontWeight: '500',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      fontSize: vars.fonts.m_body1,
    },
  },
});
export const desText = recipe({
  base: {
    fontSize: '16px',
    color: '#878787',

    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',

    '@media': {
      [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
        fontSize: vars.fonts.m_body1,
      },
    },
  },
  variants: {
    isEditing: {
      true: {
        marginBottom: '3px',
      },
      false: {
        marginBottom: '21px',

        '@media': {
          [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
            marginBottom: '14px',
          },
        },
      },
    },
  },
});

export const footerFlex = style({
  display: 'flex',
  justifyContent: 'space-between',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      flexDirection: 'column',
      gap: '14px',
    },
  },
});
export const dropDownFlex = style({
  display: 'flex',
  gap: '8px',
  alignItems: 'center',
});

export const finishedButton = style({
  padding: '12px 24px',
  fontSize: vars.fonts.body2,
  fontWeight: '600',
  borderRadius: '6px',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      fontSize: vars.fonts.m_body1,
    },
  },
});

export const dropDownStyle = style({
  display: 'inline-flex',
  alignItems: 'center',
  padding: '4px 12px',
  borderRadius: '100px',
  boxSizing: 'border-box',
  minHeight: '32px',
  width: 'fit-content',
});

export const dropDownStyleWide = style({
  display: 'inline-flex',
  alignItems: 'center',
  padding: '4px 12px',
  borderRadius: '100px',
  boxSizing: 'border-box',
  minHeight: '32px',
  width: '97px',
});

export const dropDownStyle2 = style({
  padding: '6px 0 6px 8px',
  borderRadius: '4px',
  backgroundColor: '#E7E8EA',
  color: '#55637D',
  // minWidth: '80px',
  // width: '80px',
  fontSize: vars.fonts.body3,

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      // fontSize: vars.fonts.m_body3,
    },
  },
});

export const dropDownStyle2Wide = style({
  padding: '6px 0 6px 8px',
  borderRadius: '4px',
  backgroundColor: '#F8F8F9',
  color: '#55637D',

  width: '115px',
});

export const dropdownPanel = style({
  position: 'absolute',
  top: '110%',
  left: 0,
  // minWidth: '80px',
  width: '100%',
  background: '#f8f8f9',
  border: '1px solid #e7e8ea',
  borderRadius: '4px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
  zIndex: 10,
  padding: '4px 0',
});

export const dropdownItem = style({
  padding: '8px 0',
  textAlign: 'center',
  fontFamily: 'Pretendard Variable',
  fontWeight: 500,
  fontSize: '16px',
  color: '#5a6379',
  cursor: 'pointer',
  transition: 'background 0.15s',
  selectors: {
    '&:hover': {
      background: '#ececf0',
    },
  },
});

export const selectedDropdownItem = style({
  background: '#e7e8ea',
  color: '#2d3648',
});

export const categoryDropdownPanel = style({
  position: 'absolute',
  top: '110%',
  left: 0,
  minWidth: '94px',
  width: '94px',
  background: '#fff',
  borderRadius: '8px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
  zIndex: 10,
  padding: 0,
  border: 'none',
});

export const categoryDropdownItem = style({
  height: '40px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: 'Pretendard Variable',
  fontWeight: 600,
  fontSize: '16px',
  color: '#292e39',
  cursor: 'pointer',
  transition: 'background 0.15s',
  selectors: {
    '&:hover': {
      background: '#f8f8f9',
    },
  },
});

export const selectedCategoryDropdownItem = style({
  background: '#e7e8ea',
  color: '#292e39',
});

export const recruitDropdownPanel = style({
  position: 'absolute',
  top: '110%',
  left: 0,
  minWidth: '80px',
  width: '80px',
  background: '#fff',
  borderRadius: '8px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
  zIndex: 10,
  padding: 0,
  border: 'none',
});

export const recruitDropdownItem = style({
  height: '40px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: 'Pretendard Variable',
  fontWeight: 600,
  fontSize: '16px',
  color: '#292e39',
  cursor: 'pointer',
  transition: 'background 0.15s',
  selectors: {
    '&:hover': {
      background: '#f8f8f9',
    },
  },
});

export const selectedRecruitDropdownItem = style({
  background: '#e7e8ea',
  color: '#292e39',
});

export const userInputTag = style({
  display: 'flex',
  alignItems: 'center',
  background: '#f8f8f9',
  border: '1px solid #e7e8ea',
  borderRadius: '100px',
  padding: '4px 8px 4px 12px',
  position: 'relative',
  fontWeight: 600,
  fontSize: '16px',
});

export const relative = style({
  position: 'relative',
});

export const cursorText = style({
  cursor: 'text',
});

export const cursorPointer = style({
  cursor: 'pointer',
});

export const editIconWrapper = style({
  position: 'absolute',
  right: 12,
  top: '50%',
  transform: 'translateY(-50%)',
  cursor: 'pointer',
});

export const customFieldInput = style({
  minWidth: 20,
  border: 'none',
  background: 'transparent',
  fontSize: 16,
  fontWeight: 600,
  fontFamily: 'Pretendard Variable',
  color: '#5a6379',
  textAlign: 'center',
  outline: 'none',
  padding: 0,
});

export const customFieldSpan = style({
  position: 'absolute',
  visibility: 'hidden',
  height: 0,
  overflow: 'hidden',
  whiteSpace: 'pre',
  fontSize: 16,
  fontWeight: 600,
  fontFamily: 'Pretendard Variable',
  padding: 0,
});

export const customFieldText = style({
  fontWeight: 600,
  fontSize: 16,
  color: '#5a6379',
  lineHeight: '24px',
  textAlign: 'center',
  // whiteSpace: 'nowrap',
  // display: 'inline-block',
  // width: 'auto',
});

export const clubNameInput = style({
  fontSize: vars.fonts.title3,
  fontWeight: 600,
  fontFamily: 'Pretendard Variable',
  color: 'inherit',
  border: '1px solid #E0E1E3',
  background: 'transparent',
  outline: 'none',
  padding: '4px',
  borderRadius: '4px',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      fontSize: vars.fonts.m_title3,
    },
  },
});

export const desTextInput = style({
  fontSize: '16px',
  fontWeight: 400,
  fontFamily: 'Pretendard Variable',
  color: 'inherit',
  border: '1px solid #E0E1E3',
  background: 'transparent',
  outline: 'none',
  padding: '4px',
  width: '100%',
  borderRadius: '4px',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      fontSize: vars.fonts.m_body1,
    },
  },
});

export const underlineInput = style({
  textDecoration: 'underline',
});

export const selectedTypeText = recipe({
  base: {
    fontSize: vars.fonts.body3,
    fontWeight: 500,
    display: 'inline-block',
    lineHeight: '150%',
  },
  variants: {
    position: {
      header: {
        padding: '4px 8px',
        borderRadius: '4px',
        '@media': {
          [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
            fontSize: vars.fonts.m_body1,
          },
        },
      },
      footer: {
        padding: '4px 12px',
        borderRadius: '100px',
        '@media': {
          [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
            fontSize: vars.fonts.m_body2,
          },
        },
      },
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
  color: '#55637D',
  fontSize: vars.fonts.body2,
  fontWeight: 500,
  cursor: 'pointer',
  backgroundColor: vars.colors.surface.default,

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
});

export const panelItem2 = style({
  padding: '12px 0',
  color: '#272E3B',
  fontSize: vars.fonts.body2,
  fontWeight: 600,
  cursor: 'pointer',
  backgroundColor: vars.colors.surface.default,

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
});

export const detailFlex = style({
  display: 'flex',
  alignItems: 'center',
  borderRadius: '100px',
  padding: '4px 8px 4px 12px',
  backgroundColor: '#F8F8F9',
  border: '1px solid #E7E8EA',
});
export const detailInput = style({
  // width: 'auto',
  minWidth: '0px',
  color: '#55637D',
  fontSize: '14x',
  fontWeight: 600,
  lineHeight: '150%',
});

export const divider = style({
  display: 'none',
  height: '1px',
  backgroundColor: '#EDEEF1',
  marginBottom: '14px',

  '@media': {
    [`screen and (max-width: ${BREAKPOINTS.desktop}px)`]: {
      display: 'block',
    },
  },
});
