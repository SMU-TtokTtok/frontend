import { adminClient } from '@/common/apis/ttockTtockClient';
import { API } from '@/common/constants/endpoints';
import { ApplicantDetailInfo, ApplicantsInfo } from '@/common/model/applicants';
export type Sort = 'GRADE' | 'SUBMIT';
export type Evaluation = 'DOCUMENT' | 'INTERVIEW';
export type grades = 'FIRST_GRADE' | 'SECOND_GRADE' | 'THIRD_GRADE' | 'FOURTH_GRADE';

export interface ApplicantListParams {
  evaluation: Evaluation;
  sort?: Sort;
  isEvaluating?: boolean;
  cursor?: number;
  size?: number;
}

export const getApplicantList = async ({
  evaluation,
  sort,
  isEvaluating,
  cursor,
  size,
}: ApplicantListParams) => {
  const queryParams = new URLSearchParams();
  if (sort) queryParams.append('sort', sort);
  if (isEvaluating !== undefined) queryParams.append('isEvaluating', String(isEvaluating));
  if (size !== undefined) queryParams.append('size', String(size));
  if (cursor) queryParams.append('cursor', String(cursor));
  queryParams.append('kind', evaluation);

  const data = await adminClient.get<ApplicantsInfo>(
    `${API.ADMIN.APPLICANTS}?${queryParams.toString()}`,
  );

  return data;
};

interface SearchApplicantParams {
  debouncedSearch: string;
  evaluation: Evaluation;
  sort?: Sort;
  size?: number;
  cursor?: number;
}

export const getApplicantSearchList = async ({
  debouncedSearch,
  evaluation,
  size,
  cursor,
}: SearchApplicantParams) => {
  const queryParams = new URLSearchParams();
  if (debouncedSearch) queryParams.append('name', debouncedSearch);
  if (size !== undefined) queryParams.append('size', String(size));
  if (cursor) queryParams.append('cursor', String(cursor));
  queryParams.append('kind', evaluation);

  const data = await adminClient.get<ApplicantsInfo>(
    `${API.ADMIN.APPLICANTS_SEARCH}?${queryParams.toString()}`,
  );
  return data;
};

interface PatchApplicantStatusParams {
  applicantId: string;
  status: string;
  evaluation: Evaluation;
}

export const patchApplicantStatus = async ({
  applicantId,
  status,
  evaluation,
}: PatchApplicantStatusParams) => {
  const queryParams = new URLSearchParams();
  queryParams.append('kind', evaluation);

  const data = await adminClient.patch(
    `${API.ADMIN.APPLICANTS_STATUS(applicantId)}?${queryParams.toString()}`,
    { status },
  );
  return data;
};

interface PassFailListParams {
  evaluation: Evaluation;
  page: number;
  size?: number;
}

export const getPassList = async ({ evaluation, page, size }: PassFailListParams) => {
  const queryParams = new URLSearchParams();
  if (size !== undefined) queryParams.append('size', String(size));
  if (page) queryParams.append('page', String(page));
  queryParams.append('kind', evaluation);
  const data = await adminClient.get<ApplicantsInfo>(
    `${API.ADMIN.APPLICANTS_PASS}?${queryParams.toString()}`,
  );

  return data;
};

export const getFailList = async ({ evaluation, page, size }: PassFailListParams) => {
  const queryParams = new URLSearchParams();
  if (size !== undefined) queryParams.append('size', String(size));
  if (page) queryParams.append('page', String(page));
  queryParams.append('kind', evaluation);
  const data = await adminClient.get<ApplicantsInfo>(
    `${API.ADMIN.APPLICANTS_FAIL}?${queryParams.toString()}`,
  );

  return data;
};

export const getApplicantInfo = async (applicantId: string) => {
  const data = await adminClient.get<ApplicantDetailInfo>(
    `${API.ADMIN.APPLICANTS_DETAIL(applicantId)}`,
  );

  return data;
};

export const postMemo = async (applicantId: string, content: string) => {
  const data = await adminClient.post(`${API.ADMIN.APPLICANTS_MEMO_CREATE(applicantId)}`, {
    content,
  });
  return data;
};
export const deleteMemo = async (applicantId: string, memoId: string) => {
  const data = await adminClient.delete(`${API.ADMIN.APPLICANTS_MEMO_DELETE(applicantId, memoId)}`);
  return data;
};
export const patchMemo = async (applicantId: string, memoId: string, content: string) => {
  const data = await adminClient.patch(`${API.ADMIN.APPLICANTS_MEMO_UPDATE(applicantId, memoId)}`, {
    content,
  });
  return data;
};

export const putConnectApplicant = async (clubId: string) => {
  const data = await adminClient.put(`/applies/${clubId}/finalize`, {});
  return data;
};
