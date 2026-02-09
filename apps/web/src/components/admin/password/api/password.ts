import { adminClient } from '@/common/apis/ttockTtockClient';
import { API } from '@/common/constants/endpoints';

export interface AdminPasswordForm {
  username: string;
  newPassword: string;
  newPasswordConfirm: string;
}

export const postAdminPassword = async (passwordData: AdminPasswordForm) => {
  const data = await adminClient.post(`${API.ADMIN.PASSWORD}`, passwordData);
  return data;
};
