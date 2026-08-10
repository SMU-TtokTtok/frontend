import { adminClient } from '@/common/apis/ttockTtockClient';
import { API } from '@/common/constants/endpoints';

export interface AdminSignupForm {
  username: string;
  password: string;
  clubName: string;
  clubUniv: string;
}

export const postAdminSignup = async (signupData: AdminSignupForm) => {
  const data = await adminClient.post(`${API.ADMIN.SIGNUP}`, signupData);
  return data;
};
