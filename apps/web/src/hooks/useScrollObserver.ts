'use client';
import { useEffect, useRef, useState } from 'react';

export const useScrollObserver = () => {
  const lastScrollTop = useRef(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const TOP_LOCK_PX = 8;
    const DELTA_THRESHOLD = 20;

    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll <= TOP_LOCK_PX) {
        setIsVisible(true);
        lastScrollTop.current = currentScroll;
        return;
      }

      if (Math.abs(currentScroll - lastScrollTop.current) < DELTA_THRESHOLD) return;

      if (currentScroll > lastScrollTop.current) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      lastScrollTop.current = currentScroll;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return isVisible;
};
