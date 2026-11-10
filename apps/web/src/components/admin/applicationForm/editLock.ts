import { ApplyFormField } from '@/common/model/applicationForm';

// 지원서가 제출된 폼에서 질문마다 허용되는 편집. 서버 ApplyFormEditLockPolicy와 같은 규칙이다.
export interface QuestionLock {
  canDelete: boolean;
  canChangeType: boolean;
  // 필수 켜기. 필수 끄기(완화)는 항상 허용한다
  canSetEssential: boolean;
  // 앞에서부터 이 개수만큼의 선택지는 문구 수정·삭제를 막는다
  lockedOptionCount: number;
}

export const NO_LOCK: QuestionLock = {
  canDelete: true,
  canChangeType: true,
  canSetEssential: true,
  lockedOptionCount: 0,
};

const isChoice = (type: ApplyFormField['questionType']) => type === 'CHECKBOX' || type === 'RADIO';

// original: 불러올 때 같은 questionId로 있던 질문. 새로 추가한 질문이면 undefined
export const getQuestionLock = (
  original: ApplyFormField | undefined,
  hasApplicants: boolean,
): QuestionLock => {
  if (!hasApplicants) return NO_LOCK;

  if (!original) {
    return { canDelete: true, canChangeType: true, canSetEssential: false, lockedOptionCount: 0 };
  }

  return {
    canDelete: false,
    canChangeType: false,
    canSetEssential: original.isEssential,
    lockedOptionCount: isChoice(original.questionType) ? (original.content?.length ?? 0) : 0,
  };
};
