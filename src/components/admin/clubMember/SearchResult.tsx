import { useDebounce } from '@/hooks/useDebounce';
import { useSearchClubMember } from '@/hooks/useClubMember';
import Empty from '@/common/components/empty';
import MemberItem from './MemberItem';

interface SearchResultProps {
  search: string;
  isEditing: boolean;
}

const searchResultContainer = {
  display: 'flex' as const,
  flexDirection: 'column' as const,
  gap: '8px',
};

export default function SearchResult({ search, isEditing }: SearchResultProps) {
  const debouncedSearch = useDebounce(search);
  const { data: clubMembers } = useSearchClubMember({
    search: debouncedSearch,
  });
  const members = clubMembers?.clubMembers || [];

  return (
    <ul style={searchResultContainer}>
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
