import { http, HttpResponse } from 'msw';

export const postMessage = http.post('/api/admin/applies/:clubId/send-email', () => {
  return HttpResponse.json({ message: 'success' }, { status: 200 });
});
