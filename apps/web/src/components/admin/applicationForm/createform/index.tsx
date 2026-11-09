'use client';
import { useSearchParams } from 'next/navigation';
import dynamic from 'next/dynamic';
import SelectTypeStep from './step1';
import FormQuestionStep from './step3';
import { JSX } from 'react';
import SuccessStep from './step4';

// 2단계는 렌더링 중 sessionStorage를 읽으므로, 새로고침 때 서버 화면(빈 값)이 남지 않게 브라우저에서만 그린다
const RecruitConditionStep = dynamic(() => import('./step2'), { ssr: false });

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
