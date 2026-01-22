import { Button } from '@/ui/button';
import { Checkbox } from '@/ui/checkbox';
import { DropDownButton } from '@/ui/dropdownButton';
import dropdown from '@/assets/dropdown.svg';
import * as S from './app.css';
import { SearchBar } from '@/ui/searchBar';
function App() {
  return (
    <>
      <div>
        <Button variant="primary">gd</Button>
        <DropDownButton>드롭다운</DropDownButton>
        <Checkbox
          variant="primary"
          label="체크박스"
          img={<img src={dropdown} alt="check" width={24} height={24} />}
          defaultChecked={true}
          className={S.checkboxStyle}
        />
        <div className={S.searchWrapper}>
          <SearchBar
            variant="tertiary"
            className={S.searchInput}
            iconStyle={S.iconStyle}
            icon={<img src={dropdown} alt="search" width={20} height={20} />}
            placeholder="지원자 이름을 검색해보세요."
            onChange={() => {
              console.log('changed');
            }}
          />
        </div>
      </div>
    </>
  );
}

export default App;
