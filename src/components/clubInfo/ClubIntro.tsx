'use client';

import * as S from './clubIntro.css';
import Button from '@/common/ui/button/index';

interface ClubIntroProps {
  introduction: string;
}

const ClubIntro = ({ introduction }: ClubIntroProps) => {
  return (
    <div className={S.container}>
      <div className={S.headerContainer}>
        <Button variant="secondary" className={S.headerItem}>
          소개
        </Button>
        <Button variant="tertiary" className={S.headerItem}>
          게시판
        </Button>
      </div>

      <div className={S.contentContainer} dangerouslySetInnerHTML={{ __html: introduction }} />
    </div>
  );
};

export default ClubIntro;
