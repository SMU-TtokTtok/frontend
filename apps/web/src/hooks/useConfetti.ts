import { useEffect } from 'react';
import JSConfetti from 'js-confetti';

export const useConfetti = () => {
  useEffect(() => {
    const jsConfetti = new JSConfetti();
    jsConfetti.addConfetti({
      confettiColors: [
        '#FF6B6B',
        '#4ECDC4',
        '#45B7D1',
        '#FFA07A',
        '#98D8C8',
        '#F7DC6F',
        '#BB8FCE',
        '#85C1E2',
      ],
      confettiNumber: 300,
    });
  }, []);
};
