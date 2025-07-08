import { adminClient } from '@/common/apis/ttockTtockClient';
import { ApplicantsInfo } from '@/common/model/applicants';
export type ApplicantListParams = {
  isEvaluating: boolean;
  evaluation: string;
  grade: boolean;
};

export const getApplicantList = async () => {
  const data = await adminClient.get<ApplicantsInfo[]>(`/applicants`);

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
