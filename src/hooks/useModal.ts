import { useCallback, useState } from 'react';

export const useModal = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleModalOpen = useCallback(() => {
    setIsOpen(true);
  }, []);

  const handleModalClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  return {
    isOpen,
    handleModalClose,
    handleModalOpen,
  };
};
