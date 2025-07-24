import { http, HttpResponse } from 'msw';
import applicationForm from './applicationForm.json';
const API = process.env.NEXT_PUBLIC_API_URL ?? '';

export const AdminApplicationForm = http.get(`${API}/api/admin/forms/:clubId`, () => {
  return HttpResponse.json(applicationForm, { status: 200 });
});

export const postApplicantForm = http.post(
  `${API}/api/admin/forms/clubs/:clubId`,
  ({ request }) => {
    return HttpResponse.json({ success: true, data: request.body }, { status: 200 });
  },
);

export const patchApplicantForm = http.patch(`${API}/api/admin/forms/:clubId`, ({ request }) => {
  return HttpResponse.json({ success: true, data: request.body }, { status: 200 });
});
