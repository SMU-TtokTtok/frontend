import { http, HttpResponse } from 'msw';
import applicationForm from './applicationForm.json';
import { API } from '@/common/constants/endpoints';
const BASE_API = process.env.NEXT_PUBLIC_API_URL ?? '';

export const AdminApplicationForm = http.get(`${BASE_API}${API.ADMIN.FORMS(':clubId')}`, () => {
  return HttpResponse.json(applicationForm, { status: 200 });
});

export const postApplicantForm = http.post(
  `${BASE_API}${API.ADMIN.FORMS(':clubId')}`,
  ({ request }) => {
    return HttpResponse.json({ success: true, data: request.body }, { status: 200 });
  },
);

export const patchApplicantForm = http.patch(
  `${BASE_API}${API.ADMIN.FORMS_UPDATE(':formId')}`,
  ({ request }) => {
    return HttpResponse.json({ success: true, data: request.body }, { status: 200 });
  },
);
