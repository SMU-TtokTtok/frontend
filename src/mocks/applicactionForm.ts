import { http, HttpResponse } from 'msw';
const API = process.env.NEXT_PUBLIC_API_URL ?? '';

export const AdminApplicationForm = http.get(`${API}/admin/applicationForm`, () => {
  return HttpResponse.json({}, { status: 200 });
});

export const postApplicantForm = http.post(`${API}/admin/forms/clubs/:clubId`, ({ request }) => {
  return HttpResponse.json({ success: true, data: request.body }, { status: 200 });
});
