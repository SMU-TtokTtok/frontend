/**
 * 지원폼 관리 페이지에서 사용하는 스크롤 참조 ID
 */
export const SCROLL_REF_IDS = {
  FORM_TITLE: 'formTitle',
} as const;

export type ScrollRefId = (typeof SCROLL_REF_IDS)[keyof typeof SCROLL_REF_IDS];
