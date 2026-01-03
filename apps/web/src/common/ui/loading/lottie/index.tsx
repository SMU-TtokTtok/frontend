'use client';

import { useEffect, useRef } from 'react';
import lottie, { AnimationItem } from 'lottie-web/build/player/lottie_light';

interface LottieProps {
  animationData: object;
  loop?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export default function Lottie({ animationData, loop = true, className, style }: LottieProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<AnimationItem | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    animationRef.current = lottie.loadAnimation({
      container: containerRef.current,
      renderer: 'svg',
      loop,
      autoplay: true,
      animationData,
    });

    return () => {
      animationRef.current?.destroy();
    };
  }, [animationData, loop]);

  return <div ref={containerRef} className={className} style={style} />;
}
