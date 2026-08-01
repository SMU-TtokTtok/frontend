import { adminClient } from '@/common/apis/ttockTtockClient';
import { API } from '@/common/constants/endpoints';
import { ClubBoardCreateResponse, ClubBoardFormValues } from '@/common/model/clubBoard';

/**
 * 활동 생성/수정은 multipart/form-data로 보낸다.
 * request 파트는 서버가 JSON으로 파싱하므로 Blob에 application/json 타입을 지정해야 한다.
 */
const buildBoardFormData = (values: ClubBoardFormValues, thumbnail?: File | null) => {
  const formData = new FormData();
  formData.append('request', new Blob([JSON.stringify(values)], { type: 'application/json' }));

  if (thumbnail) {
    formData.append('thumbnail', thumbnail);
  }

  return formData;
};

/** 썸네일 이미지는 생성 시 필수 */
export const postClubBoard = async (
  clubId: string,
  values: ClubBoardFormValues,
  thumbnail: File,
) => {
  const data = await adminClient.post<ClubBoardCreateResponse>(
    API.ADMIN.CLUB_BOARDS(clubId),
    buildBoardFormData(values, thumbnail),
  );

  return data;
};

/** 수정 시 썸네일을 바꾸지 않으면 thumbnail 파트를 생략한다 */
export const patchClubBoard = async (
  clubId: string,
  boardId: string,
  values: ClubBoardFormValues,
  thumbnail?: File | null,
) => {
  const data = await adminClient.patch(
    API.ADMIN.CLUB_BOARD_DETAIL(clubId, boardId),
    buildBoardFormData(values, thumbnail),
  );

  return data;
};

export const deleteClubBoard = async (clubId: string, boardId: string) => {
  const data = await adminClient.delete(API.ADMIN.CLUB_BOARD_DETAIL(clubId, boardId));

  return data;
};
