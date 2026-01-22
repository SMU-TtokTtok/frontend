import dynamic from 'next/dynamic';

const LoadingSpinner = dynamic(() => import('./LoadingSpinner'), {
  ssr: false,
});

export default LoadingSpinner;
