import { useDebounce } from '@/hooks/useDebounce';
import { useSearchClubMember } from '@/hooks/useClubMember';
import Empty from '@/common/components/empty';
import MemberItem from './MemberItem';
import * as S from './index.css';
import { useAuthStore } from '@/common/store/adminAuthStore';

interface SearchResultProps {
  search: string;
  isEditing: boolean;
}

export default function SearchResult({ search, isEditing }: SearchResultProps) {
  const { profile } = useAuthStore();
  const debouncedSearch = useDebounce(search);
  const { data: clubMembers } = useSearchClubMember({
    search: debouncedSearch,
    clubId: profile!.clubId,
  });
  const members = clubMembers?.clubMembers || [];

  return (
    <ul className={S.searchResultContainer}>
      {members.length === 0 ? (
        <Empty>
          검색하신 부원이 없어요! <br /> 부원 이름을 확인해주세요.
        </Empty>
      ) : (
        members.map((member, index) => <MemberItem key={index} {...member} isEditing={isEditing} />)
      )}
    </ul>
  );
}
