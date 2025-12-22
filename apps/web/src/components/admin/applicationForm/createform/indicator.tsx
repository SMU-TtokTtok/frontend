import Image from 'next/image';
import * as S from './createform.css';
import arrow from '@/assets/arrow_forward_ios.svg';
interface IndicatorProps {
  step: number;
}

const formSteps = [
  { step: 1, label: '모집 전형 선택' },
  { step: 2, label: '모집 기간 및 대상 설정' },
  { step: 3, label: '질문 작성' },
  { step: 4, label: '제작완료' },
];

function Indicator({ step }: IndicatorProps) {
  const currentStep = step ? step : 1;

  return (
    <ul className={S.indicatorContainer}>
      {formSteps.map(({ step, label }, index) => (
        <div key={step} className={S.indicatorContainer}>
          <li className={S.step({ isActive: step === currentStep })}>
            <span className={S.stepNumber({ isActive: step === currentStep })}>{step}</span>
            <span className={S.indicator({ isActive: step === currentStep })}>{label}</span>
            &nbsp;
          </li>
          {index < formSteps.length - 1 && (
            <Image src={arrow} className={S.IndicatorArrow} alt="Arrow" />
          )}
        </div>
      ))}
    </ul>
  );
}

export default Indicator;
