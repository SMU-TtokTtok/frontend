import * as S from './popularClubList.css';
import ClubList from './clubList';
import Slider from './slider';

function PopularClubList() {
  return (
    <div>
      <div className={S.TitleWrapper}>
        <h3 className={S.Title}>🏆 인기 동아리</h3>
        <p className={S.Plus}>더보기</p>
      </div>
      <Slider>
        <ClubList />
      </Slider>
    </div>
  );
}

export default PopularClubList;
