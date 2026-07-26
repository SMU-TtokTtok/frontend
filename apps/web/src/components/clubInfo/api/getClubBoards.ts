import { mainClient } from '@/common/apis/ttockTtockClient';
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
    `/api/clubs/${clubId}/boards?${query.toString()}`,
  );

  return data;
};

export const getClubBoardDetail = async (clubId: string, boardId: string) => {
  const data = await mainClient.get<ClubBoardDetail>(`/api/clubs/${clubId}/boards/${boardId}`);

  return data;
};
