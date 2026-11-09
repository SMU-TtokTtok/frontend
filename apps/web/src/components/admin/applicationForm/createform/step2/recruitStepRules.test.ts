import { test } from 'node:test';
import assert from 'node:assert/strict';
import { isRecruitStepValid, RecruitStepValues } from './recruitStepRules';

const valid: RecruitStepValues = {
  recruitStartDate: '2026-03-01',
  recruitEndDate: '2026-03-31',
  maxApplyCount: 10,
  applicableGrades: [1, 2],
  interviewStartDate: null,
  interviewEndDate: null,
};

test('모든 값이 맞으면 통과한다', () => {
  assert.equal(isRecruitStepValid(valid, false), true);
});

test('모집 기간이 비었거나 뒤집히면 막는다', () => {
  assert.equal(isRecruitStepValid({ ...valid, recruitEndDate: null }, false), false);
  assert.equal(isRecruitStepValid({ ...valid, recruitEndDate: '2026-02-28' }, false), false);
});

test('모집 기간은 시작일의 3개월 뒤 같은 날까지다', () => {
  assert.equal(isRecruitStepValid({ ...valid, recruitEndDate: '2026-06-01' }, false), true);
  assert.equal(isRecruitStepValid({ ...valid, recruitEndDate: '2026-06-02' }, false), false);
});

test('모집 인원은 1명 이상이어야 한다', () => {
  assert.equal(isRecruitStepValid({ ...valid, maxApplyCount: 0 }, false), false);
  assert.equal(isRecruitStepValid({ ...valid, maxApplyCount: null }, false), false);
  assert.equal(isRecruitStepValid({ ...valid, maxApplyCount: 1 }, false), true);
});

test('대상 학년은 1개 이상이어야 한다', () => {
  assert.equal(isRecruitStepValid({ ...valid, applicableGrades: [] }, false), false);
  assert.equal(isRecruitStepValid({ ...valid, applicableGrades: null }, false), false);
});

test('면접이 있으면 면접 일정이 있고 순서가 맞아야 한다', () => {
  assert.equal(isRecruitStepValid(valid, true), false);
  const interview = { interviewStartDate: '2026-04-02', interviewEndDate: '2026-04-03' };
  assert.equal(isRecruitStepValid({ ...valid, ...interview }, true), true);
  assert.equal(
    isRecruitStepValid({ ...valid, ...interview, interviewEndDate: '2026-04-01' }, true),
    false,
  );
});
