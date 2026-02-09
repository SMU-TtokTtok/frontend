import { useEffect } from 'react';

export const usePreventScroll = (
  isOpen: boolean,
  allowScrollRef?: React.RefObject<HTMLElement | null>,
) => {
  useEffect(() => {
    if (!isOpen) return;

    const prevOverflow = document.documentElement.style.overflow;
    document.documentElement.style.overflow = 'hidden';

    const onTouchMove = (e: TouchEvent) => {
      const allowEl = allowScrollRef?.current;
      if (allowEl && e.target instanceof Node && allowEl.contains(e.target)) {
        return;
      }
      e.preventDefault();
    };

    document.addEventListener('touchmove', onTouchMove, { passive: false });

    return () => {
      document.documentElement.style.overflow = prevOverflow;
      document.removeEventListener('touchmove', onTouchMove);
    };
  }, [isOpen, allowScrollRef]);
};
