import Button from '@/common/ui/button';
import { useSlider } from '@/hooks/useSlider';
import * as S from './popularClubList.css';
import Arrow from '@/assets/arrow.svg';
import Image from 'next/image';

function Slider({ children }: { children: React.ReactNode }) {
  const { scrollRef, handleScrollX } = useSlider();
  return (
    <div ref={scrollRef} className={S.sliderWrapper}>
      <Button
        variant='none'
        className={S.sliderBtn({ direction: 'left' })}
        onClick={() => handleScrollX('left')}
      >
        <Image src={Arrow} alt='왼쪽 화살표' />
      </Button>
      {children}
      <Button
        variant='none'
        className={S.sliderBtn({ direction: 'right' })}
        onClick={() => handleScrollX('right')}
      >
        <Image src={Arrow} alt='오른쪽 화살표' />
      </Button>
    </div>
  );
}

export default Slider;
