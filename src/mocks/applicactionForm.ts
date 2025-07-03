import { http, HttpResponse } from 'msw';
const API = process.env.NEXT_PUBLIC_API_URL ?? '';

export const AdminApplicationForm = http.get(`${API}/applicationForm`, () => {
  return HttpResponse.json({}, { status: 200 });
});
