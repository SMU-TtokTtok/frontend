'use client';
import Button from '@/common/ui/button';
import * as S from './passFailSidebar.css';
import { convertToKor } from '@/common/util/convertToKor';
import { ROUTES } from '@/common/constants/routes';
import Link from 'next/link';
import ApplicantGroup from './applicantGroup';
import { useFailList, usePassList } from '@/hooks/usePassFailList';
import { ApplicantListParams } from '../api/applicants';
import { useModal } from '@/hooks/useModal';
import PassFailListModal from './passFailListModal';
import { useState } from 'react';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import { useFollowSidebar } from '@/hooks/useFollowSidebar';
import { useConnectApplicant } from '@/hooks/useConnectAplicant';
import { useAuthStore } from '@/common/store/adminAuthStore';
import ConfirmCancelModal from '../../../../common/components/confirmCancelModal';

interface PassFailSidebarProps {
  selectedOptions: ApplicantListParams;
  openConfirmModalWithMessage: (message: string) => void;
  isMessage?: boolean;
}

function PassFailSidebar({
  selectedOptions,
  openConfirmModalWithMessage,
  isMessage = false,
}: PassFailSidebarProps) {
  const { evaluation } = selectedOptions;
  const { passApplicants, hasInterview } = usePassList({ selectedOptions });
  const { failApplicants } = useFailList({ selectedOptions });
  const [isPass, setIsPass] = useState<boolean | null>(null);
  const { handleConnectApplicants } = useConnectApplicant({
    openConfirmModalWithMessage: openConfirmModalWithMessage,
  });
  const { profile } = useAuthStore();

  const handlePassTypeChange = (isPass: boolean) => {
    setIsPass(isPass);
  };

  const { barPosition } = useFollowSidebar({ initialPosition: 35 });

  const {
    isOpen: isListModalOpen,
    handleModalOpen: handleListModalOpen,
    handleModalClose: handleListModalClose,
  } = useModal();

  const {
    isOpen: isConnectModalOpen,
    handleModalOpen: handleConnectModalOpen,
    handleModalClose: handleConnectModalClose,
  } = useModal();

  const handleConnectList = () => {
    if (!profile?.clubId) {
      openConfirmModalWithMessage('클럽 정보를 불러올 수 없습니다.');
      return;
    }
    handleConnectApplicants({
      evaluation,
      clubId: profile.clubId,
    });
  };

  const connectTitle =
    evaluation === 'DOCUMENT'
      ? hasInterview
        ? '면접 명단연동'
        : '최종 부원연동'
      : '최종 부원연동';

  return (
    <>
      <div
        className={isMessage ? S.rightSidebarWithMessage : S.rightSidebar}
        style={assignInlineVars({
          [S.sidebarTop]: `${barPosition}px`,
        })}
      >
        <div className={S.panel}>
          <ApplicantGroup
            isPass={true}
            handlePassTypeChange={handlePassTypeChange}
            openConfirmModalWithMessage={openConfirmModalWithMessage}
            handleListModalOpen={handleListModalOpen}
            label={`${convertToKor(evaluation)} 합격 예정자`}
            selectedOptions={selectedOptions}
            applicants={passApplicants}
          />
          <ApplicantGroup
            isPass={false}
            handlePassTypeChange={handlePassTypeChange}
            openConfirmModalWithMessage={openConfirmModalWithMessage}
            handleListModalOpen={handleListModalOpen}
            label={`${convertToKor(evaluation)} 불합격 예정자`}
            selectedOptions={selectedOptions}
            applicants={failApplicants}
          />
        </div>
        {!isMessage && (
          <div className={S.buttonWrapper}>
            <div className={S.connectButtonWrapper}>
              <Button
                variant="secondary"
                className={S.baseButton['connectButton']}
                onClick={handleConnectModalOpen}
              >
                {connectTitle}
              </Button>
            </div>
            <div className={S.sendButtonWrapper}>
              <Link href={ROUTES.ADMIN_APPLICATIONS_MESSAGE(evaluation)}>
                <Button variant="primary" className={S.baseButton['sendButton']}>
                  결과 전송하기
                </Button>
              </Link>

              <small className={S.buttonDescription}>클릭 시, 메시지 작성란으로 이동합니다.</small>
            </div>
          </div>
        )}
      </div>
      <PassFailListModal
        isPass={isPass}
        isOpen={isListModalOpen}
        onClose={handleListModalClose}
        applicants={isPass ? passApplicants : failApplicants}
        evaluation={evaluation}
      />
      <ConfirmCancelModal
        isOpen={isConnectModalOpen}
        onClose={handleConnectModalClose}
        onConfirm={handleConnectList}
        title={connectTitle}
        message={
          <>
            ⚠️ 한 번 실행하면 되돌릴 수 없어요.
            <br />
            계속 진행하시겠습니까?
          </>
        }
      />
    </>
  );
}

export default PassFailSidebar;
