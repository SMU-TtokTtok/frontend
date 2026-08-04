import Button from '@/common/ui/button';
import Modal from '@/common/ui/modal/modal';
import { useOutsideClick } from '@/hooks/useOutsideClick';
import { usePreventScroll } from '@/hooks/usepreventScroll';
import { PropsWithChildren } from 'react';
import { useRouter } from 'next/navigation';
import * as S from './confirmModal.css';
type ConfirmModalType = 'success' | 'error';
interface ConfirmModalProps {
  type?: ConfirmModalType;
  isOpen: boolean;
  onClose: () => void;
  redirectTo?: string;
}
function ConfirmModal({
  type = 'success',
  isOpen,
  onClose,
  redirectTo,
  children,
}: PropsWithChildren<ConfirmModalProps>) {
  usePreventScroll(isOpen);
  const router = useRouter();

  const handleClose = () => {
    onClose();
    if (redirectTo) {
      router.push(redirectTo);
    }
  };
  const ref = useOutsideClick(() => handleClose());
  const buttonVariant = type === 'error' ? 'danger' : 'primary';

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Modal.Content ref={ref} className={[S.content, S.contentType[type]].join(' ')}>
        <Modal.Body className={[S.body, S.bodyType[type]].join(' ')}>{children}</Modal.Body>
        <Button variant={buttonVariant} className={S.Button} onClick={handleClose}>
          확인
        </Button>
      </Modal.Content>
    </Modal>
  );
}

export default ConfirmModal;
