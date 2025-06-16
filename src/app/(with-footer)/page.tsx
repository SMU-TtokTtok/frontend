import ClubList from '@/components/home/clubList';
import Filter from '@/components/home/filter';
import PopularClubList from '@/components/home/popularClubList/index';

export default function Home() {
  return (
    <div>
      <PopularClubList />
      <Filter />
      <ClubList />
    </div>
  );
}
