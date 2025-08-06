'use client';

import * as S from './index.css';
import { useSearchParams } from 'next/navigation';
import Header from './Header';
import Form from './Form';
import PassFailSidebar from '@/components/admin/applicants/passFailSidebar';
import { Evaluation } from '../applicants/api/applicants';
import { MESSAGE } from '@/common/constants/message';
import { useState } from 'react';
import ConfirmModal from '@/common/components/confirmModal';
import { useModal } from '@/hooks/useModal';

function Message() {
  const searchParams = useSearchParams();
  const evaluation = searchParams.get('evaluation') || 'DOCUMENT';
  const [confirmMessage, setConfirmMessage] = useState<string>(MESSAGE.applicantsStatus.confirm);

  const {
    isOpen: isConfirmModalOpen,
    handleModalOpen: handleConfirmModalOpen,
    handleModalClose: handleConfirmModalClose,
  } = useModal();

  const openConfirmModalWithMessage = (message: string) => {
    setConfirmMessage(message);
    handleConfirmModalOpen();
  };
  return (
    <>
      <div className={S.wrapper}>
        <Header evaluation={evaluation} />
        <PassFailSidebar
          selectedOptions={{ evaluation: evaluation as Evaluation }}
          openConfirmModalWithMessage={openConfirmModalWithMessage}
          isMessage={true}
        />
        <Form kind={evaluation} />
      </div>
      <ConfirmModal isOpen={isConfirmModalOpen} onClose={handleConfirmModalClose}>
        {confirmMessage}
      </ConfirmModal>
    </>
  );
}

export default Message;
