'use client';

import { useEffect } from 'react';

/**
 * 페이지(컴포넌트) 마운트 시 스크롤을 최상단으로 이동시키는 훅
 */
export const useScrollTop = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);
};

