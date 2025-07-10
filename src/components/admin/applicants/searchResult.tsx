import ApplicantItem from './applicantList/applicantItem';
import * as S from './applicants.css';
import { usePatchApplicantStatus } from '@/hooks/applicants';
import { useDebounce } from '@/hooks/useDebounce';
import { useSearchApplicant } from '@/hooks/useSearchAppliacant';
import { ApplicantListParams } from './api/applicants';
interface SearchResultProps {
  selectedOptions: ApplicantListParams;
  search: string;
}
function SearchResult({ search, selectedOptions }: SearchResultProps) {
  const debouncedSearch = useDebounce(search);
  const { data: applicants } = useSearchApplicant({
    debouncedSearch,
    evaluation: selectedOptions.evaluation,
  });
  const { handleFavoriteStatus } = usePatchApplicantStatus();

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
      {applicants?.length === 0 && <p className={S.noResults}>검색하신 지원자가 없어요.😥</p>}
    </ul>
  );
}

export default SearchResult;
