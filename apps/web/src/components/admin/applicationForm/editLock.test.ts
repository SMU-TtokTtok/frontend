import { test } from 'node:test';
import assert from 'node:assert/strict';
import { ApplyFormField } from '@/common/model/applicationForm';
import { getQuestionLock, NO_LOCK } from './editLock';

const question = (overrides: Partial<ApplyFormField> = {}): ApplyFormField => ({
  questionId: 'q1',
  title: '질문',
  subTitle: '',
  questionType: 'SHORT_ANSWER',
  isEssential: false,
  content: [],
  ...overrides,
});

test('지원서가 없으면 모든 편집을 허용한다', () => {
  assert.deepEqual(getQuestionLock(question({ isEssential: true }), false), NO_LOCK);
  assert.deepEqual(getQuestionLock(undefined, false), NO_LOCK);
});

test('지원서가 있으면 기존 질문은 삭제와 유형 변경을 막는다', () => {
  const lock = getQuestionLock(question(), true);
  assert.equal(lock.canDelete, false);
  assert.equal(lock.canChangeType, false);
});

test('기존 선택 질문은 필수로 바꿀 수 없다', () => {
  assert.equal(getQuestionLock(question({ isEssential: false }), true).canSetEssential, false);
});

test('원래 필수였던 질문은 선택으로 완화한 뒤 다시 필수로 되돌릴 수 있다', () => {
  assert.equal(getQuestionLock(question({ isEssential: true }), true).canSetEssential, true);
});

test('기존 선택형 질문은 원래 선택지 수만큼 잠근다', () => {
  const checkbox = question({ questionType: 'CHECKBOX', content: ['가', '나', '다'] });
  const radio = question({ questionType: 'RADIO', content: ['예', '아니오'] });
  assert.equal(getQuestionLock(checkbox, true).lockedOptionCount, 3);
  assert.equal(getQuestionLock(radio, true).lockedOptionCount, 2);
});

test('선택형이 아닌 기존 질문은 잠글 선택지가 없다', () => {
  assert.equal(getQuestionLock(question({ content: ['x'] }), true).lockedOptionCount, 0);
});

test('새로 추가한 질문은 모든 편집을 허용하되 필수는 켤 수 없다', () => {
  assert.deepEqual(getQuestionLock(undefined, true), {
    canDelete: true,
    canChangeType: true,
    canSetEssential: false,
    lockedOptionCount: 0,
  });
});
