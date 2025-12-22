import Modal from '@/common/ui/modal/modal';
import { PropsWithChildren } from 'react';
import { usePreventScroll } from '@/hooks/usepreventScroll';
import React from 'react';
import * as S from './applicantDetailModal.css';
import { useOutsideClick } from '@/hooks/useOutsideClick';
import ApplicantDetail from './applicantDetail';
import ApplicantHeader from './applicantHeader';
import QueryErrorBoundary from '@/components/error/queryErrorBoundary';

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
        <QueryErrorBoundary>
          <ApplicantHeader applicantId={applicantId} />
          <ApplicantDetail applicantId={applicantId} />
        </QueryErrorBoundary>
      </Modal.Content>
    </Modal>
  );
}

export default ApplicantDetailModal;
