'use client';
import ApplicantItem from './applicantList/applicantItem';
import * as S from './applicants.css';
import { usePatchApplicantStatus } from '@/hooks/applicants';
import { useDebounce } from '@/hooks/useDebounce';
import { useSearchApplicant } from '@/hooks/useSearchAppliacant';
import { ApplicantListParams } from './api/applicants';
import Empty from '@/common/components/empty';
import * as L from './applicantList/applicantList.css';

const SEARCH_SKELETON_COUNT = 4;

function SearchResultSkeleton() {
  return (
    <ul aria-label="지원자 검색 결과를 불러오는 중입니다.">
      {Array.from({ length: SEARCH_SKELETON_COUNT }).map((_, index) => (
        <li key={index} className={L.applicantItemWrapper} aria-hidden="true">
          <div className={L.profileSection}>
            <span className={`${L.skeletonBlock} ${L.skeletonMenu}`} />
            <span className={`${L.skeletonBlock} ${L.skeletonGrade}`} />
            <span className={`${L.skeletonBlock} ${L.skeletonName}`} />
            <span className={L.verticalLine} />
            <span className={`${L.skeletonBlock} ${L.skeletonDepartment}`} />
          </div>
          <span className={`${L.skeletonBlock} ${L.skeletonStatus}`} />
        </li>
      ))}
    </ul>
  );
}

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
  const { applicants, isLoading } = useSearchApplicant({
    debouncedSearch,
    evaluation: selectedOptions.evaluation,
  });
  const { handleApplicantStatus } = usePatchApplicantStatus({
    openConfirmModalWithMessage,
  });
  const isDebouncing = search.trim() !== debouncedSearch.trim();

  if (isDebouncing || isLoading) {
    return <SearchResultSkeleton />;
  }

  return (
    <ul>
      {applicants?.map((applicant) => {
        return (
          <ApplicantItem
            key={applicant.id}
            selectedOptions={selectedOptions}
            applicant={applicant}
            handleApplicantStatus={handleApplicantStatus}
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
