import { adminClient } from '@/common/apis/ttockTtockClient';
import { ApplicantInfo, ApplicantsInfo } from '@/common/model/applicants';
export type Sort = 'grade' | 'submit';
export type Evaluation = 'applies' | 'interviews';
export interface ApplicantListParams {
  evaluation: Evaluation;
  sort?: Sort;
  isEvaluating?: boolean;
}

export const getApplicantList = async ({ evaluation, sort, isEvaluating }: ApplicantListParams) => {
  const data = await adminClient.get<ApplicantsInfo[]>(
    `/${evaluation}?sort=${sort ?? 'applies'}&isEvaluating=${isEvaluating ?? false}`,
  );

  return data;
};

export const getApplicantSearchList = async (search: string, evaluation: string) => {
  const data = await adminClient.get<ApplicantsInfo[]>(`/${evaluation}/search?name=${search}`);
  return data;
};

export const patchApplicantStatus = async (applicantId: number, status: string) => {
  const data = await adminClient.patch(`/applicants/${applicantId}/status`, { status });
  return data;
};

export const getPassList = async () => {
  const data = await adminClient.get<ApplicantsInfo[]>(`/applicants/pass`);

  return data;
};

export const getFailList = async () => {
  const data = await adminClient.get<ApplicantsInfo[]>(`/applicants/fail`);

  return data;
};

export const getApplicantInfo = async (applicantId: number) => {
  const data = await adminClient.get<ApplicantInfo>(`/applies/${applicantId}`);

  return data;
};

export const postMemo = async (applicantId: number, content: string) => {
  const data = await adminClient.post(`/applies/${applicantId}/memos`, { content });
  return data;
};
export const deleteMemo = async (applicantId: number, memoId: string) => {
  const data = await adminClient.delete(`/applies/${applicantId}/memos/${memoId}`);
  return data;
};
export const patchMemo = async (applicantId: number, memoId: string, content: string) => {
  const data = await adminClient.patch(`/applies/${applicantId}/memos/${memoId}`, { content });
  return data;
};
