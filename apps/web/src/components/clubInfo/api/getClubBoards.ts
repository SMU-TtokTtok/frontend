import { mainClient } from '@/common/apis/ttockTtockClient';
import { API } from '@/common/constants/endpoints';
import { ClubBoardDetail, ClubBoardList } from '@/common/model/clubBoard';

interface GetClubBoardsParams {
  clubId: string;
  size?: number;
  cursor?: string;
}

export const getClubBoards = async ({ clubId, size = 20, cursor }: GetClubBoardsParams) => {
  const query = new URLSearchParams({ size: String(size) });
  if (cursor) {
    query.append('cursor', cursor);
  }

  const data = await mainClient.get<ClubBoardList>(
    `${API.USER.CLUB_BOARDS(clubId)}?${query.toString()}`,
  );

  return data;
};

export const getClubBoardDetail = async (clubId: string, boardId: string) => {
  const data = await mainClient.get<ClubBoardDetail>(API.USER.CLUB_BOARD_DETAIL(clubId, boardId));

  return data;
};
