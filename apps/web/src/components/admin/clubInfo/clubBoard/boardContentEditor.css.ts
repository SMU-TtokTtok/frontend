import { globalStyle, style } from '@vanilla-extract/css';
import { vars } from '@/common/styles/theme.css';

export const wrapper = style({
  border: `1px solid ${vars.colors.surface.cont_3}`,
  borderRadius: '6px',
  overflow: 'hidden',
});

/**
 * 소개글 에디터와 같은 전역 클래스(custom-tiptap-*)를 재사용하되,
 * 그쪽은 전체 페이지 기준으로 커서 모달 안에서는 여백/크기만 줄인다.
 */
globalStyle(`${wrapper} .custom-tiptap-toolbar`, {
  flexWrap: 'wrap',
  padding: '8px',
  borderBottom: `1px solid ${vars.colors.surface.cont_1_var}`,
});

globalStyle(`${wrapper} .custom-tiptap-editor`, {
  minHeight: '200px',
  maxHeight: '320px',
  overflowY: 'auto',
  padding: '16px',
  fontSize: '15px',
  borderRadius: 0,
});
