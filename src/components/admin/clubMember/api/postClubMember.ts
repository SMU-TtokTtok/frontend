import { adminClient } from '@/common/apis/ttockTtockClient';

//필드값은 아직 백엔드에서 안나와서 수정가능성 존재
export interface postClubMemberBody {
  name: string;
  studentNum: number;
  major: string;
  email: string;
  phone: string;
  grade: string;
  gender: string;
}

export const postClubMember = async (body: postClubMemberBody, role: string) => {
  //clubId는 로그인 로직 후에 수정 by현우
  const clubId = 1;
  const data = await adminClient.post(`/members/${clubId}/add?role=${role}`, body);

  return data;
};
