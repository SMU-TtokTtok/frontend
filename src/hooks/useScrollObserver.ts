'use client';
import { useEffect, useRef, useState } from 'react';

export const useScrollObserver = () => {
  const lastScrollTop = useRef(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (Math.abs(currentScroll - lastScrollTop.current) < 20) return;

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
