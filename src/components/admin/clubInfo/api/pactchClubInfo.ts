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
  console.log(body);
  const formData = new FormData();
  let hasData = false;

  if (body.request && Object.keys(body.request).length > 0) {
    formData.append(
      'request',
      new Blob([JSON.stringify(body.request)], { type: 'application/json' }),
    );
    hasData = true;
  }
  if (body.profileImageUrl) {
    formData.append('profileImage', body.profileImageUrl);
    hasData = true;
  }

  if (!hasData) {
    return;
  }

  const data = await adminClient.patch(`/clubs/${clubId}/content`, formData);

  return data;
};
