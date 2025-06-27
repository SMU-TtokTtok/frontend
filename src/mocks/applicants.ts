import { http, HttpResponse } from 'msw';
import applicantList from './applicantList.json';
const API = process.env.NEXT_PUBLIC_API_URL ?? '';

export const Applicants = http.get(`${API}/applicants`, () => {
  return HttpResponse.json(applicantList, { status: 200 });
});

export const PatchApplicantStatus = http.patch(
  `${API}/applicants/:applicantId/status`,
  ({ params }) => {
    const { applicantId } = params;
    const status = 'evaluating';
    return HttpResponse.json({ id: applicantId, status }, { status: 200 });
  },
);
