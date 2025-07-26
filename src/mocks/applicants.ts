import { http, HttpResponse } from 'msw';
import applicantList from './applicantList.json';
import applicantInfo from './applicantInfo.json';

const API = process.env.NEXT_PUBLIC_API_URL ?? '';

export const Applicants = http.get(`${API}/api/admin/:evaluation`, () => {
  return HttpResponse.json(applicantList, { status: 200 });
});

export const PatchApplicantStatus = http.patch(
  `${API}/api/admin/applicants/:applicantId/status`,
  ({ params }) => {
    const { applicantId } = params;
    const status = 'evaluating';
    return HttpResponse.json({ id: applicantId, status }, { status: 200 });
  },
);

export const PassList = http.get(`${API}/api/admin/applicants/pass`, () => {
  return HttpResponse.json(applicantList, { status: 200 });
});

export const FailList = http.get(`${API}/api/admin/applicants/fail`, () => {
  return HttpResponse.json([], { status: 200 });
});

export const ApplicantSearch = http.get(`${API}/api/admin/:evaluation/search`, ({ request }) => {
  const url = new URL(request.url);
  const search = url.searchParams.get('name') || '';
  const rawSearch = search.trim();
  const filteredApplicants = applicantList.filter((applicant) =>
    applicant.name.includes(rawSearch),
  );

  return HttpResponse.json(filteredApplicants, { status: 200 });
});

export const ApplicantInfo = http.get(`${API}/api/admin/applies/:applicantId`, ({ params }) => {
  const { applicantId } = params;
  const applicant = applicantList.find((applicant) => applicant.id === Number(applicantId));

  if (!applicant) {
    return HttpResponse.json({ message: 'Applicant not found' }, { status: 404 });
  }

  return HttpResponse.json(applicantInfo, { status: 200 });
});

export const PostMemo = http.post(
  `${API}/api/admin/applies/:applicantId/memos`,
  async ({ request, params }) => {
    const { applicantId } = params;
    const body = (await request.json()) as { content: string };
    return HttpResponse.json(
      { id: 'newMemoId', applicantId, content: body.content },
      { status: 201 },
    );
  },
);

export const DeleteMemo = http.delete(
  `${API}/api/admin/applies/:applicantId/memos/:memoId`,
  ({ params }) => {
    const { applicantId, memoId } = params;
    return HttpResponse.json(
      { message: `Memo ${memoId} deleted for applicant ${applicantId}` },
      { status: 200 },
    );
  },
);

export const PatchMemo = http.patch(
  `${API}/api/admin/applies/:applicantId/memos/:memoId`,
  async ({ request, params }) => {
    const { applicantId, memoId } = params;
    const content = (await request.json()) as { content: string };

    return HttpResponse.json({ id: memoId, applicantId, content }, { status: 200 });
  },
);
