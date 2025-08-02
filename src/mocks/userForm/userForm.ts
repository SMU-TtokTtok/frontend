import { http, HttpResponse } from 'msw';
import formInfo from './formInfo.json';

export const getUserForm = http.get('/api/forms/:clubId', () => {
  return HttpResponse.json(formInfo, { status: 200 });
});

export const postUserForm = http.post('/api/user/applies/:clubId', () => {
  return HttpResponse.json({ message: 'success' }, { status: 200 });
});
