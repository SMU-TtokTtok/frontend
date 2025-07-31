import { adminClient } from '@/common/apis/ttockTtockClient';

export interface Request {
  name: string;
  clubType: string;
  clubCategory: string;
  clubUniv: string;
  customCategory: string;
  summary: string;
  content: string;
  applyStartDate: string;
  applyEndDate: string;
  grades: string[];
  maxApplyCount: number;
}

export interface PatchClubInfoBody {
  request: Request;
  profileImageUrl: string;
}

export const patchClubInfo = async (body: PatchClubInfoBody) => {
  const clubId = 1;
  //추후에 id반영
  const data = await adminClient.patch(`/clubs/${clubId}/content`, body);

  return data;
};
