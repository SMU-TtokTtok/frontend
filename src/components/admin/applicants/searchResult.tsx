'use client';
import ApplicantItem from './applicantList/applicantItem';
import * as S from './applicants.css';
import { usePatchApplicantStatus } from '@/hooks/applicants';
import { useDebounce } from '@/hooks/useDebounce';
import { useSearchApplicant } from '@/hooks/useSearchAppliacant';
import { ApplicantListParams } from './api/applicants';
import Empty from '@/common/components/empty';
interface SearchResultProps {
  selectedOptions: ApplicantListParams;
  search: string;
  openConfirmModalWithMessage: (message: string) => void;
  handleSelectApplicant: (applicantId: string) => void;
}
function SearchResult({
  search,
  selectedOptions,
  openConfirmModalWithMessage,
  handleSelectApplicant,
}: SearchResultProps) {
  const debouncedSearch = useDebounce(search);
  const { applicants } = useSearchApplicant({
    debouncedSearch,
    evaluation: selectedOptions.evaluation,
  });
  const { handleFavoriteStatus } = usePatchApplicantStatus({
    openConfirmModalWithMessage,
  });

  return (
    <ul>
      {applicants?.map((applicant) => {
        return (
          <ApplicantItem
            key={applicant.id}
            selectedOptions={selectedOptions}
            applicant={applicant}
            handleFavoriteStatus={handleFavoriteStatus}
            handleSelectApplicant={() => handleSelectApplicant(applicant.id)}
          />
        );
      })}
      {applicants?.length === 0 && (
        <Empty className={S.noResults}>
          검색하신 지원자가 없어요! <br /> 지원자 이름을 확인해주세요.
        </Empty>
      )}
    </ul>
  );
}

export default SearchResult;
