import Button from '@/common/ui/button';
import * as S from './passFailSidebar.css';
import { convertToKor } from '@/common/util/convertToKor';
import { ROUTES } from '@/common/constants/routes';
import Link from 'next/link';
import ApplicantGroup from './applicantGroup';
import { useFailList, usePassList } from '@/hooks/usePassFailList';
import { ApplicantListParams } from '../api/applicants';
interface PassFailSidebarProps {
  selectedOptions: ApplicantListParams;
  handleModalOpen: () => void;
}

function PassFailSidebar({ selectedOptions, handleModalOpen }: PassFailSidebarProps) {
  const evaluation = selectedOptions.evaluation;
  const { data: passApplicants } = usePassList({ selectedOptions });
  const { data: failApplicants } = useFailList({ selectedOptions });
  return (
    <>
      <div className={S.rightSidebar}>
        <div className={S.panel}>
          <ApplicantGroup
            handleModalOpen={handleModalOpen}
            label={`${convertToKor(evaluation)} 합격 예정자`}
            selectedOptions={selectedOptions}
            applicants={passApplicants}
          />
          <ApplicantGroup
            handleModalOpen={handleModalOpen}
            label={`${convertToKor(evaluation)} 불합격자`}
            selectedOptions={selectedOptions}
            applicants={failApplicants}
          />
        </div>

        <div className={S.sendButtonWrapper}>
          <Link href={ROUTES.ADMIN_APPLICATIONS_MESSAGE}>
            <Button variant="primary" className={S.sendButton}>
              결과 전송하기
            </Button>
          </Link>

          <small className={S.buttonDescription}>클릭 시, 메시지 작성란으로 이동합니다.</small>
        </div>
      </div>
    </>
  );
}

export default PassFailSidebar;
