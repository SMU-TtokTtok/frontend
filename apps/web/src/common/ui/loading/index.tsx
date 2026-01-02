import dynamic from 'next/dynamic';
import animationData from '@/assets/loading.json';
import * as S from './loading.css';

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });
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
