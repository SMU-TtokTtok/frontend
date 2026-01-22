import { useEffect } from 'react';

export const usePreventScroll = (isOpen: boolean): void => {
  const preventTouchMove = (event: TouchEvent) => event.preventDefault();

  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflow = 'hidden';
      document.addEventListener('touchmove', preventTouchMove, {
        passive: false,
      });
    }

    return () => {
      document.documentElement.style.overflow = 'auto';
      document.removeEventListener('touchmove', preventTouchMove);
    };
  }, [isOpen]);
};
