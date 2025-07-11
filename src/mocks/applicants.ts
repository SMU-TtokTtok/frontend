import { http, HttpResponse } from 'msw';
import applicantList from './applicantList.json';
const API = process.env.NEXT_PUBLIC_API_URL ?? '';

export const Applicants = http.get(`${API}/admin/:evaluation`, () => {
  return HttpResponse.json(applicantList, { status: 200 });
});

export const PatchApplicantStatus = http.patch(
  `${API}/admin/applicants/:applicantId/status`,
  ({ params }) => {
    const { applicantId } = params;
    const status = 'evaluating';
    return HttpResponse.json({ id: applicantId, status }, { status: 200 });
  },
);

export const PassList = http.get(`${API}/admin/applicants/pass`, () => {
  return HttpResponse.json(applicantList, { status: 200 });
});

export const FailList = http.get(`${API}/admin/applicants/fail`, () => {
  return HttpResponse.json([], { status: 200 });
});

export const ApplicantSearch = http.get(`${API}/admin/:evaluation/search`, ({ request }) => {
  const url = new URL(request.url);
  const search = url.searchParams.get('name') || '';
  const rawSearch = search.trim();
  const filteredApplicants = applicantList.filter((applicant) =>
    applicant.name.includes(rawSearch),
  );

  return HttpResponse.json(filteredApplicants, { status: 200 });
});
