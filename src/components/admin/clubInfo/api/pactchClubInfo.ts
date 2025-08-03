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
  request: Partial<Request>;
  profileImageUrl: File | null;
}

export const patchClubInfo = async (body: PatchClubInfoBody, clubId: string) => {
  const formData = new FormData();
  if (body.request && Object.keys(body.request).length > 0) {
    formData.append(
      'request',
      new Blob([JSON.stringify(body.request)], { type: 'application/json' }),
    );
  }
  if (body.profileImageUrl) {
    formData.append('profileImageUrl', body.profileImageUrl);
  }
  //추후에 id반영
  const data = await adminClient.patch(`/clubs/${clubId}/content`, body);

  return data;
};
