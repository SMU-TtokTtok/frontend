import { adminClient } from '@/common/apis/ttockTtockClient';
import { API } from '@/common/constants/endpoints';
import { QuestionStepForm } from '@/common/model/applicationForm';

export const getFormInfo = async (clubId: string) => {
  const data = await adminClient.get<QuestionStepForm>(`${API.ADMIN.FORMS(clubId)}`);

  return data;
};

export const patchApplicantForm = async (formId: string, formData: QuestionStepForm) => {
  const data = await adminClient.patch<QuestionStepForm>(
    `${API.ADMIN.FORMS_UPDATE(formId)}`,
    formData,
  );

  return data;
};
