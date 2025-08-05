'use client';
import { useSearchParams } from 'next/navigation';
import SelectTypeStep from './step1';
import RecruitConditionStep from './step2';
import FormQuestionStep from './step3';
import { JSX } from 'react';
import SuccessStep from './step4';

const stepPages: Record<number, JSX.Element> = {
  1: <SelectTypeStep />,
  2: <RecruitConditionStep />,
  3: <FormQuestionStep />,
  4: <SuccessStep />,
};

function CreateFormPage() {
  const params = useSearchParams();
  const step = params.get('step');
  const currentStep = step ? parseInt(step, 10) : 1;
  return <div>{stepPages[currentStep]}</div>;
}

export default CreateFormPage;
