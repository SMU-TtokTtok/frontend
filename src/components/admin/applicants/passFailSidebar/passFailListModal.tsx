import { ApplicantsInfo } from '@/common/model/applicants';
import Modal from '@/common/ui/modal/modal';
import { convertToKor } from '@/common/util/convertToKor';
import { useOutsideClick } from '@/hooks/useOutsideClick';
import { usePreventScroll } from '@/hooks/usepreventScroll';
import { PropsWithChildren } from 'react';
import * as S from './passFailSidebar.css';
import PassFailItem from './passFailItem';
import { MESSAGE } from '@/common/constants/message';
import Empty from '@/common/components/empty';

interface PassFailListModalProps {
  isPass: boolean | null;
  applicants: ApplicantsInfo[];
  evaluation: string;
  isOpen: boolean;
  onClose: () => void;
}

function PassFailListModal({
  isPass,
  applicants,
  evaluation,
  isOpen,
  onClose,
}: PropsWithChildren<PassFailListModalProps>) {
  usePreventScroll(isOpen);
  const ref = useOutsideClick(() => onClose());
  const title = isPass ? `${convertToKor(evaluation)} 합격` : `${convertToKor(evaluation)} 불합격`;
  const isEmpty = applicants.length === 0;
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Modal.Content ref={ref} className={S.passFailListModal}>
        <Modal.Header title={title} />
        <Modal.Body className={S.modalBody}>
          {isEmpty && (
            <Empty className={S.empty['modal']}>
              {title} {MESSAGE.empty.noApplicant}
            </Empty>
          )}
          {!isEmpty && (
            <ul>
              {applicants.map((applicant) => {
                return (
                  <PassFailItem key={applicant.id} disableCursor={true} applicant={applicant} />
                );
              })}
            </ul>
          )}
        </Modal.Body>
      </Modal.Content>
    </Modal>
  );
}

export default PassFailListModal;
