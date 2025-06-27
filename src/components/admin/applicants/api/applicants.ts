import { mainClient } from '@/common/apis/ttockTtockClient';
import { ApplicantsInfo } from '@/common/model/applicants';
export type ApplicantListParams = {
  isEvaluating: boolean;
  evaluation: string;
  grade: boolean;
};

export const getApplicantList = async () => {
  const data = await mainClient.get<ApplicantsInfo[]>(`/applicants`);

  return data;
};

export const patchApplicantStatus = async (applicantId: number, status: string) => {
  const data = await mainClient.patch(`/applicants/${applicantId}/status`, { status });
  return data;
};
