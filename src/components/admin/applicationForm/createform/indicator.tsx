import * as S from './createform.css';
interface IndicatorProps {
  step: number;
}

const formSteps = [
  { step: 1, label: '모집 전형 선택  ' },
  { step: 2, label: '모집 기간 및 대상 설정  ' },
  { step: 3, label: '질문 작성  ' },
  { step: 4, label: '제작완료  ' },
];

function Indicator({ step }: IndicatorProps) {
  const currentStep = step ? step : 1;

  return (
    <ul className={S.indicatorContainer}>
      {formSteps.map(({ step, label }) => (
        <li key={step} className={step === currentStep ? S.stepActive : S.step}>
          {step}. {label} &nbsp;
        </li>
      ))}
    </ul>
  );
}

export default Indicator;
