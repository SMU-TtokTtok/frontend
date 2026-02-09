'use client';

import { useMemo } from 'react';
import DOMPurify from 'dompurify';
import * as S from './clubIntro.css';
import Button from '@/common/ui/button/index';
import './editor.css';

interface ClubIntroProps {
  introduction: string;
}

const ClubIntro = ({ introduction }: ClubIntroProps) => {
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
        <Button variant="secondary" className={S.headerItem1}>
          소개
        </Button>
        {/* <Button variant="secondary" className={S.headerItem2}>
          게시판
        </Button> */}
      </div>

      <div className="content-container" dangerouslySetInnerHTML={{ __html: sanitizedIntroduction }} />
    </div>
  );
};

export default ClubIntro;
