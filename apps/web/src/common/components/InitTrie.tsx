'use client';

import { useEffect } from 'react';
import useTrie from '../store/trieStore';
import { useClubsInfinite } from '@/hooks/useClubsInfinite';

const InitTrie = () => {
  const { clubs } = useClubsInfinite({ selectedOptions: { sort: 'latest' } });
  const setInit = useTrie((state) => state.setInit);

  useEffect(() => {
    if (clubs) {
      setInit(clubs);
    }
  }, [clubs, setInit]);

  return null;
};

export default InitTrie;
