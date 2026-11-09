import { test } from 'node:test';
import assert from 'node:assert/strict';
import { getRecruitToggleAction, getRecruitToggleMessage } from './recruitToggle';

const TODAY = '2026-11-09';

test('모집 중이거나 모집 예정이면 마감한다', () => {
  assert.equal(getRecruitToggleAction('OPEN', '2026-11-30', TODAY), 'END');
  assert.equal(getRecruitToggleAction('UPCOMING', '2026-12-30', TODAY), 'END');
});

test('마감 상태이고 날짜가 없으면 활성 폼이 없으므로 되살린다', () => {
  assert.equal(getRecruitToggleAction('CLOSED', null, TODAY), 'REACTIVATE');
  assert.equal(getRecruitToggleAction('CLOSED', undefined, TODAY), 'REACTIVATE');
});

test('마감 상태이고 마감일이 오늘이거나 이후면 시작한다', () => {
  assert.equal(getRecruitToggleAction('CLOSED', TODAY, TODAY), 'START');
  assert.equal(getRecruitToggleAction('CLOSED', '2026-12-01', TODAY), 'START');
});

test('마감 상태이고 마감일이 지났으면 다시 시작할 수 없다', () => {
  assert.equal(getRecruitToggleAction('CLOSED', '2026-11-08', TODAY), 'EXPIRED');
});

test('다시 조회한 상태가 모집 중이면 시작 안내를 한다', () => {
  assert.equal(getRecruitToggleMessage('START', 'OPEN'), '모집이 시작되었습니다');
  // 이전 서버는 날짜를 비워 보내므로 REACTIVATE로 판정돼도 실제로는 시작될 수 있다
  assert.equal(getRecruitToggleMessage('REACTIVATE', 'OPEN'), '모집이 시작되었습니다');
});

test('되살린 뒤 마감 상태면 되살리기 안내를 한다', () => {
  assert.match(getRecruitToggleMessage('REACTIVATE', 'CLOSED'), /이전 지원 폼을 불러왔습니다/);
});

test('마감한 뒤에는 마감 안내를 한다', () => {
  assert.equal(getRecruitToggleMessage('END', 'CLOSED'), '지원마감이 완료되었습니다');
});
