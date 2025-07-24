import { style, createVar } from '@vanilla-extract/css';
import { vars } from '@/common/styles/theme.css';

export const sidebarTop = createVar();

export const container = style({
  position: 'absolute',
  width: '330px',
  backgroundColor: 'white',
  padding: '22px 26px',
  borderRadius: '8px',
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
  transition: 'top 0.7s ease-out',
  top: sidebarTop,
  right: '146px',
});

export const ItemFlex = style({
  display: 'flex',
  gap: '32px',
  alignItems: 'center',
});

export const GradeText = style({
  fontSize: vars.fonts.body3,
  color: '#818181',
});

export const NumberText = style({
  fontSize: vars.fonts.body1,
  color: '#030304',
  fontWeight: 500,
});
