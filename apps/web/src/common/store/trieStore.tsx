import { create } from 'zustand';
import { ClubItemInfo } from '../model/club';
import Trie from '../util/trie';

type State = {
  trie: Trie;
  clubs: ClubItemInfo[];
};

const initialState: State = {
  trie: new Trie(),
  clubs: [],
};

type Action = {
  setInit: (clubs: ClubItemInfo[]) => void;
  search: (keyword: string) => ClubItemInfo[];
  add: (club: ClubItemInfo) => void;
};

const useTrie = create<State & Action>((set, get) => ({
  ...initialState,
  setInit: (clubs: ClubItemInfo[]) => {
    set({ trie: new Trie(clubs), clubs });
  },
  search: (keyword: string) => {
    const trimmed = keyword.trim();
    if (!trimmed) return [];
    return get().trie.search(trimmed);
  },
  add: (club: ClubItemInfo) => {
    const next = new Trie(get().clubs);
    next.add(club);
    set({ trie: next, clubs: [...get().clubs, club] });
  },
}));

export default useTrie;
