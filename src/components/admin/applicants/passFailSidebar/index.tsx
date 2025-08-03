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

interface PassFailSidebarProps {
  selectedOptions: ApplicantListParams;
  openConfirmModalWithMessage: (message: string) => void;
}

function PassFailSidebar({ selectedOptions, openConfirmModalWithMessage }: PassFailSidebarProps) {
  const evaluation = selectedOptions.evaluation;
  const { passApplicants } = usePassList({ selectedOptions });
  const { failApplicants } = useFailList({ selectedOptions });
  const [isPass, setIsPass] = useState<boolean | null>(null);
  const { handleConnectApplicants } = useConnectApplicant({
    openConfirmModalWithMessage: openConfirmModalWithMessage,
  });
  const { profile } = useAuthStore();

  const handlePassTypeChange = (isPass: boolean) => {
    setIsPass(isPass);
  };

  const { barPosition } = useFollowSidebar({ initialPosition: 55 });

  const {
    isOpen: isListModalOpen,
    handleModalOpen: handleListModalOpen,
    handleModalClose: handleListModalClose,
  } = useModal();

  return (
    <>
      <div
        className={S.rightSidebar}
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

        <div className={S.buttonWrapper}>
          <div className={S.connectButtonWrapper}>
            <Button
              variant="secondary"
              className={S.baseButton['connectButton']}
              onClick={() => handleConnectApplicants({ evaluation, clubId: profile!.clubId })}
            >
              {evaluation === 'DOCUMENT' ? '면접 명단연동' : '최종 부원연동'}
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
      </div>
      <PassFailListModal
        isPass={isPass}
        isOpen={isListModalOpen}
        onClose={handleListModalClose}
        applicants={isPass ? passApplicants : failApplicants}
        evaluation={evaluation}
      />
    </>
  );
}

export default PassFailSidebar;
