import { http, HttpResponse } from 'msw';
import formInfo from './formInfo.json';

export const getUserForm = http.get('/api/club/:clubId/form', () => {
  return HttpResponse.json(formInfo, { status: 200 });
});
