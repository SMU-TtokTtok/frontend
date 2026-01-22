import { vars } from '@/styles/theme.css';
import { style, styleVariants } from '@vanilla-extract/css';

export const tagStyle = styleVariants({
  //배경: 흰색
  default: {
    backgroundColor: vars.colors.surface.default,
    border: `1px solid ${vars.colors.surface.cont_3}`,
    color: vars.colors.surface.outline,
    fontWeight: '600',
  },
  //모집 중
  secondary: {
    backgroundColor: vars.colors.tertiary.base,
    border: `1px solid ${vars.colors.tertiary.fixed_dim}`,
    color: vars.colors.tertiary.default,
    fontWeight: '600',
  },
  //모집 마감
  tertiary: {
    backgroundColor: vars.colors.surface.default,
    border: `1px solid ${vars.colors.surface.cont_3}`,
    color: vars.colors.surface.cont_5,
    fontWeight: '600',
  },
  light_blue: {
    backgroundColor: vars.colors.tertiary.base,
    color: vars.colors.tertiary.default,
    fontWeight: '500',
  },
  blue: {
    backgroundColor: vars.colors.primary.base,
    color: '#0593FA',
    fontWeight: '500',
  },
  navy: {
    backgroundColor: vars.colors.primary.base,
    color: vars.colors.primary.default,
    fontWeight: '500',
  },
  deep_navy: {
    backgroundColor: vars.colors.primary.base,
    color: vars.colors.primary.on_cont,
    fontWeight: '500',
  },

  //역할 태그
  white: {
    backgroundColor: vars.colors.white,
    color: vars.colors.charcoal,
    fontWeight: '600',
    border: `1px solid ${vars.colors.surface.cont_3}`,
  },

  //마감 임박
  red: {
    backgroundColor: '#FFEFEF',
    color: '#E20029',
    fontWeight: '600',
    border: `1px solid #FFD6D3`,
    textOverflow: 'clip !important',
  },
} as const);

export type TagVariant = keyof typeof tagStyle;

export const baseTagStyle = style({
  display: 'inline-block',
  maxWidth: '120px',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
});
