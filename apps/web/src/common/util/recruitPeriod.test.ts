import { test } from 'node:test';
import assert from 'node:assert/strict';
import { getMaxRecruitEndDateString } from './recruitPeriod';

test('마감일 상한은 시작일의 3개월 뒤 같은 날이다', () => {
  assert.equal(getMaxRecruitEndDateString('2026-03-15'), '2026-06-15');
});

test('3개월 뒤에 같은 날이 없으면 그 달의 마지막 날이다', () => {
  assert.equal(getMaxRecruitEndDateString('2026-01-31'), '2026-04-30');
  assert.equal(getMaxRecruitEndDateString('2026-11-30'), '2027-02-28');
});

test('시작일이 비었거나 잘못되면 상한이 없다', () => {
  assert.equal(getMaxRecruitEndDateString(''), undefined);
  assert.equal(getMaxRecruitEndDateString(null), undefined);
  assert.equal(getMaxRecruitEndDateString('not-a-date'), undefined);
});
