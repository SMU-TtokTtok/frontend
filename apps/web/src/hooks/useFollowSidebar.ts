import { useState, useEffect, useCallback } from 'react';

interface UseFollowSidebarProps {
  initialPosition?: number;
  offset?: number;
}

export const useFollowSidebar = ({
  initialPosition = 200,
  offset = 0,
}: UseFollowSidebarProps = {}) => {
  const [barPosition, setBarPosition] = useState(initialPosition);

  const handleScroll = useCallback(() => {
    const position = initialPosition + window.scrollY + offset;
    setBarPosition(position);
  }, [initialPosition, offset]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return { barPosition };
};
