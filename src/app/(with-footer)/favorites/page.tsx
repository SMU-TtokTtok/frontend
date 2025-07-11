'use client';

import FavoritesClub from '@/components/favorites/FavoritesClub';
import { useSearchQuery } from '@/hooks/useSearchQuery';
import SortButtonGroup from '@/components/favorites/SortButtonGroup';
import { ROUTES } from '@/common/constants/routes';

export default function Page() {
  const { filter } = useSearchQuery();

  return (
    <div>
      <SortButtonGroup title="즐겨찾기" filter={filter} path={ROUTES.FAVORITES} />
      <FavoritesClub selectedOptions={filter} />
    </div>
  );
}
