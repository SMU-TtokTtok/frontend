import { adminClient } from '@/common/apis/ttockTtockClient';

//필드값은 아직 백엔드에서 안나와서 수정가능성 존재
export interface postClubMemberBody {
  name: string;
  studentNum: number;
  major: string;
  email: string;
  phoneNumber: string;
  grade: string;
  gender: string;
}

export const postClubMember = async (body: postClubMemberBody, role: string, clubId: string) => {
  // console.log(body);
  // console.log(role);
  // console.log(clubId);
  const data = await adminClient.post(`/members/${clubId}/add?role=${role}`, body);

  return data;
};
