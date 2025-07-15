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
  handleModalOpen: () => void;
}
function SearchResult({ search, selectedOptions, handleModalOpen }: SearchResultProps) {
  const debouncedSearch = useDebounce(search);
  const { data: applicants } = useSearchApplicant({
    debouncedSearch,
    evaluation: selectedOptions.evaluation,
  });
  const { handleFavoriteStatus } = usePatchApplicantStatus({ handleModalOpen });

  return (
    <ul>
      {applicants?.map((applicant) => {
        return (
          <ApplicantItem
            key={applicant.id}
            applicant={applicant}
            handleFavoriteStatus={handleFavoriteStatus}
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
