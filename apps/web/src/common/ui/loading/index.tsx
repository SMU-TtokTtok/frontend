import Lottie from 'lottie-react';
import animationData from '@/assets/loading.json';
import * as S from './loading.css';
interface LoadingSpinnerProps {
  className?: string;
}

function LoadingSpinner({ className }: LoadingSpinnerProps) {
  const containerStyle = className ? className : S.container;
  return (
    <div className={containerStyle}>
      <Lottie animationData={animationData} loop={true} className={S.lottieContainer} />
    </div>
  );
}

export default LoadingSpinner;
