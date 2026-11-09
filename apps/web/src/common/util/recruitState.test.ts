import { test } from 'node:test';
import assert from 'node:assert/strict';
import { toRecruitState } from './recruitState';

test('서버가 준 모집 상태를 그대로 쓴다', () => {
  assert.equal(toRecruitState('UPCOMING', false), 'UPCOMING');
  assert.equal(toRecruitState('OPEN', true), 'OPEN');
  assert.equal(toRecruitState('CLOSED', false), 'CLOSED');
});

test('모집 상태가 없으면 recruiting으로 판단한다', () => {
  assert.equal(toRecruitState(undefined, true), 'OPEN');
  assert.equal(toRecruitState(undefined, false), 'CLOSED');
  assert.equal(toRecruitState(null, false), 'CLOSED');
});

test('모르는 값(FINISHED 등)이면 recruiting으로 판단한다', () => {
  assert.equal(toRecruitState('FINISHED', false), 'CLOSED');
  assert.equal(toRecruitState('SOMETHING', true), 'OPEN');
});
