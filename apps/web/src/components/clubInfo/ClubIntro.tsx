'use client';

import { useMemo, useState } from 'react';
import DOMPurify from 'dompurify';
import * as S from './clubIntro.css';
import Button from '@/common/ui/button/index';
import BoardFeed from '@/components/clubInfo/boardFeed';
import './editor.css';

type ClubIntroTab = 'INTRO' | 'FEED';

interface ClubIntroProps {
  introduction: string;
  clubId: string;
}

const ClubIntro = ({ introduction, clubId }: ClubIntroProps) => {
  const [activeTab, setActiveTab] = useState<ClubIntroTab>('INTRO');

  const sanitizedIntroduction = useMemo(() => {
    return DOMPurify.sanitize(introduction, {
      ALLOWED_TAGS: [
        'p', 'br', 'strong', 'em', 'u', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
        'ul', 'ol', 'li', 'blockquote', 'code', 'pre', 'a', 'img',
        'table', 'thead', 'tbody', 'tr', 'th', 'td'
      ],
      ALLOWED_ATTR: ['href', 'src', 'alt', 'title', 'class', 'style'],
      ALLOWED_URI_REGEXP: /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i,
    });
  }, [introduction]);

  return (
    <div className={S.container}>
      <div className={S.headerContainer}>
        <Button
          variant="secondary"
          className={activeTab === 'INTRO' ? S.headerItem1 : S.headerItem2}
          onClick={() => setActiveTab('INTRO')}
        >
          동아리 소개
        </Button>
        <Button
          variant="secondary"
          className={activeTab === 'FEED' ? S.headerItem1 : S.headerItem2}
          onClick={() => setActiveTab('FEED')}
        >
          활동
        </Button>
      </div>

      {activeTab === 'INTRO' ? (
        <div className="content-container" dangerouslySetInnerHTML={{ __html: sanitizedIntroduction }} />
      ) : (
        <BoardFeed clubId={clubId} />
      )}
    </div>
  );
};

export default ClubIntro;
