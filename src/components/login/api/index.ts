import { mainClient } from '@/common/apis/ttockTtockClient';

export const postLogin = async (body: { email: string; password: string }) => {
  const data = await mainClient.post('/api/user/auth/login', body);
  localStorage.setItem('name', data.data.user.name);
  localStorage.setItem('email', data.data.user.email);
  return data;
};

export const postLogout = async (email: string) => {
  const data = await mainClient.post(`/api/user/auth/logout?useremail=${email}`, null);
  localStorage.removeItem('name');
  localStorage.removeItem('email');

  window.location.href = '/login';

  return data;
};
