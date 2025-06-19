import { useRef } from 'react';

export const useSlider = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScrollX = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const scrollAmount = 300;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return {
    scrollRef,
    handleScrollX,
  };
};
