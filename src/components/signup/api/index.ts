import { mainClient } from '@/common/apis/ttockTtockClient';

export const postEmail = async (body: { email: string }) => {
  const data = await mainClient.post('/api/user/auth/send-verification', body);

  return data;
};

export const postCode = async (body: { email: string; code: string }) => {
  const data = await mainClient.post('/api/user/auth/verify-email', body);

  return data;
};

export const postSignup = async (body: {
  email: string;
  verificationCode: string;
  password: string;
  passwordConfirm: string;
  name: string;
  termsAgreed: boolean;
}) => {
  const data = await mainClient.post('/api/user/auth/signup', body);

  return data;
};
