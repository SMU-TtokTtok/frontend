import Modal from '@/common/ui/modal/modal';
import { PropsWithChildren } from 'react';
import { usePreventScroll } from '@/hooks/usepreventScroll';
import Image from 'next/image';
import React from 'react';
import * as S from './applicantDetailModal.css';
import close_white from '@/assets/cancel_white.svg';
import { useOutsideClick } from '@/hooks/useOutsideClick';
import ApplicantDetail from './applicantDetail';

interface ApplicantDetailModalProps {
  applicantId: string;
  onClose: () => void;
  isOpen: boolean;
}

function ApplicantDetailModal({
  applicantId,
  onClose,
  isOpen,
}: PropsWithChildren<ApplicantDetailModalProps>) {
  usePreventScroll(isOpen);
  const ref = useOutsideClick(() => onClose());

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Modal.Content ref={ref} className={S.applicantDetailModal}>
        <Modal.Header
          img={<Image src={close_white} alt="닫기" className={S.closeButton} />}
          className={S.header}
        />
        <ApplicantDetail applicantId={applicantId} />
      </Modal.Content>
    </Modal>
  );
}

export default ApplicantDetailModal;
