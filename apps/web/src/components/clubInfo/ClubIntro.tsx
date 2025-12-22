'use client';

import * as S from './clubIntro.css';
import Button from '@/common/ui/button/index';
import './editor.css';

interface ClubIntroProps {
  introduction: string;
}

const ClubIntro = ({ introduction }: ClubIntroProps) => {
  return (
    <div className={S.container}>
      <div className={S.headerContainer}>
        <Button variant="secondary" className={S.headerItem1}>
          소개
        </Button>
        {/* <Button variant="secondary" className={S.headerItem2}>
          게시판
        </Button> */}
      </div>

      <div className="content-container" dangerouslySetInnerHTML={{ __html: introduction }} />
    </div>
  );
};

export default ClubIntro;
