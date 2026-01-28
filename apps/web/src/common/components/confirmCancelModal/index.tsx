import Modal from '@/common/ui/modal/modal';
import { useOutsideClick } from '@/hooks/useOutsideClick';
import { usePreventScroll } from '@/hooks/usepreventScroll';
import * as S from './connectModal.css';
import Button from '@/common/ui/button';
import { ReactNode } from 'react';

interface ConfirmCancelModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: ReactNode;
}

function ConfirmCancelModal({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
}: ConfirmCancelModalProps) {
  usePreventScroll(isOpen);
  const ref = useOutsideClick(() => onClose());

  const handleConfirm = () => {
    onConfirm();
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Modal.Content ref={ref} className={S.modalContent}>
        <Modal.Header title={title} labelClassName={S.title} />
        <Modal.Body className={S.modalBody}>
          <div className={S.warningBox}>
            <p className={S.warningText}>{message}</p>
          </div>
        </Modal.Body>
        <div className={S.buttonWrapper}>
          <Button variant="tertiary" onClick={onClose} className={S.cancelButton}>
            취소
          </Button>
          <Button variant="primary" onClick={handleConfirm} className={S.confirmButton}>
            확인
          </Button>
        </div>
      </Modal.Content>
    </Modal>
  );
}

export default ConfirmCancelModal;
