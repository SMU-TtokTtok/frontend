import { useState, useEffect } from 'react';

interface UseFollowSidebarProps {
  initialPosition?: number;
  offset?: number;
}

export const useFollowSidebar = ({
  initialPosition = 200,
  offset = 0,
}: UseFollowSidebarProps = {}) => {
  const [barPosition, setBarPosition] = useState(initialPosition);

  const handleScroll = () => {
    const position = initialPosition + window.scrollY + offset;
    setBarPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [initialPosition, offset]);

  return { barPosition };
};
