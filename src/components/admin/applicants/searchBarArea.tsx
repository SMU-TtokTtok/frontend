import SearchBar from '@/common/ui/searchBar';
import * as S from './applicants.css';
import SearchIcon from '@/assets/search.svg';

function SearchBarArea() {
  return (
    <div className={S.searchWrapper}>
      <SearchBar
        className={S.searchInput}
        icon={SearchIcon}
        placeholder="지원자 이름을 검색해보세요."
      />
    </div>
  );
}

export default SearchBarArea;
