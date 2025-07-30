import Button from '@/common/ui/button';
import Modal from '@/common/ui/modal/modal';
import { useOutsideClick } from '@/hooks/useOutsideClick';
import { usePreventScroll } from '@/hooks/usepreventScroll';
import { PropsWithChildren } from 'react';
import { useRouter } from 'next/navigation';
import * as S from './confirmModal.css';

interface ConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  redirectTo?: string;
}
function ConfirmModal({
  isOpen,
  onClose,
  redirectTo,
  children,
}: PropsWithChildren<ConfirmModalProps>) {
  usePreventScroll(isOpen);
  const router = useRouter();
  const ref = useOutsideClick(() => onClose());

  const handleConfirm = () => {
    onClose();
    if (redirectTo) {
      router.push(redirectTo);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Modal.Content ref={ref} className={S.content}>
        <Modal.Body className={S.body}>{children}</Modal.Body>
        <Button variant="primary" className={S.Button} onClick={handleConfirm}>
          확인
        </Button>
      </Modal.Content>
    </Modal>
  );
}

export default ConfirmModal;
