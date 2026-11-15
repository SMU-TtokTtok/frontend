import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createElement } from 'react';
import { renderToString } from 'react-dom/server';
import { removeFromSession, saveToSession } from '@/common/util/sessionStorageUtil';
import { useStepTwoForm } from './useStepTwoForm';

test('저장된 학년을 복원하고 저장값이 없는 경우와 구분한다', (t) => {
  const storage = new Map<string, string>();
  const originalStorage = Object.getOwnPropertyDescriptor(globalThis, 'sessionStorage');
  Object.defineProperty(globalThis, 'sessionStorage', {
    configurable: true,
    value: {
      getItem: (key: string) => storage.get(key) ?? null,
      setItem: (key: string, value: string) => storage.set(key, value),
      removeItem: (key: string) => storage.delete(key),
    },
  });
  t.after(() => {
    if (originalStorage) Object.defineProperty(globalThis, 'sessionStorage', originalStorage);
    else Reflect.deleteProperty(globalThis, 'sessionStorage');
  });

  const renderInitialGrades = () => {
    function Probe() {
      return JSON.stringify(useStepTwoForm().recruitData.applicableGrades);
    }
    return renderToString(createElement(Probe));
  };

  saveToSession('applicableGrades', [1, 2]);
  assert.equal(renderInitialGrades(), '[1,2]', '저장된 학년이 null로 바뀌면 안 된다');

  saveToSession('applicableGrades', [3]);
  assert.equal(renderInitialGrades(), '[3]', '다시 진입하면 최신 학년을 복원한다');

  saveToSession('selectedGrades', [4]);
  assert.equal(renderInitialGrades(), '[3]', '예전 키의 값보다 현재 저장 키를 따른다');

  saveToSession('applicableGrades', []);
  assert.equal(renderInitialGrades(), '[]', '학년을 모두 해제한 값은 빈 배열로 유지한다');

  removeFromSession('applicableGrades');
  assert.equal(renderInitialGrades(), 'null', '현재 저장값이 없으면 null을 유지한다');
});
