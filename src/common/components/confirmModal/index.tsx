import Button from '@/common/ui/button';
import Modal from '@/common/ui/modal/modal';
import { useOutsideClick } from '@/hooks/useOutsideClick';
import { usePreventScroll } from '@/hooks/usepreventScroll';
import { PropsWithChildren } from 'react';
import * as S from './confirmModal.css';

interface ConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
}
function ConfirmModal({ isOpen, onClose, children }: PropsWithChildren<ConfirmModalProps>) {
  usePreventScroll(isOpen);
  const ref = useOutsideClick(() => onClose());

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Modal.Content ref={ref} className={S.content}>
        <Modal.Body className={S.body}>{children}</Modal.Body>
        <Button variant="primary" className={S.Button} onClick={onClose}>
          확인
        </Button>
      </Modal.Content>
    </Modal>
  );
}

export default ConfirmModal;
