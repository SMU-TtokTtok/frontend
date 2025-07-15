import { vars } from '@/common/styles/theme.css';
import { style } from '@vanilla-extract/css';

export const Logo = style({
  width: '50px',
  height: '36px',
});
export const InnerWrapper = style({
  padding: '1.111rem 0',
  maxWidth: '1392px',
});

export const ButtonStyle = style({
  borderRadius: '100px',
  padding: '8px 16px',
  fontWeight: '600',
  fontSize: vars.fonts.body3,
  marginRight: '8px',
  flexShrink: 0,
});

export const RightArea = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'end',
});

export const SearchBar = style({
  width: '100%',
  padding: '10.5px 16px',
  marginRight: '24px',
});

export const searchIcon = style({
  width: '31px',
  height: '31px',
  right: '7px',
  cursor: 'pointer',
});

export const InputCombobox = style({
  width: '435px',
  marginRight: '24px',
});
