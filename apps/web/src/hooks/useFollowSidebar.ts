import { useState, useEffect, useCallback, useRef } from 'react';

interface UseFollowSidebarProps {
  initialPosition?: number;
  offset?: number;
  debounceMs?: number;
}

export const useFollowSidebar = ({
  initialPosition = 200,
  offset = 0,
  debounceMs = 100,
}: UseFollowSidebarProps = {}) => {
  const [barPosition, setBarPosition] = useState(initialPosition);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleScroll = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      const position = initialPosition + window.scrollY + offset;
      setBarPosition(position);
    }, debounceMs);
  }, [initialPosition, offset, debounceMs]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [handleScroll, initialPosition, offset]);

  return { barPosition };
};
