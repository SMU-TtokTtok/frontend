import SearchBar from '@/common/ui/searchBar';
import * as S from './index.css';

import SearchIcon from '@/assets/search.svg';
interface SearchBarAreaProps {
  search: string;
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function SearchBarArea({ search, handleSearchChange }: SearchBarAreaProps) {
  return (
    <div className={S.searchWrapper}>
      <SearchBar
        variant="tertiary"
        className={S.searchInput}
        iconStyle={S.iconStyle}
        icon={SearchIcon}
        placeholder="부원 이름을 검색해보세요."
        value={search}
        onChange={handleSearchChange}
      />
    </div>
  );
}

export default SearchBarArea;
