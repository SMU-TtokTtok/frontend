import { mainClient } from '@/common/apis/ttockTtockClient';

export const postEmail = async (body: { email: string }) => {
  const data = await mainClient.post('/api/user/auth/send-reset-code', body);

  return data;
};

export const postCode = async (body: { email: string; code: string }) => {
  const data = await mainClient.post('/api/user/auth/verify-email', body);

  return data;
};

export const postResetPassword = async (body: {
  email: string;
  verificationCode: string;
  newPassword: string;
  newPasswordConfirm: string;
}) => {
  console.log(body);
  const data = await mainClient.post('/api/user/auth/reset-password', body);

  return data;
};
