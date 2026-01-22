import React from 'react';
import * as S from './memo.css';
import { Memo } from '@/common/model/applicants';
import close from '@/assets/memo_Delete.svg';
import Image from 'next/image';
import Button from '@/common/ui/button';

interface MemoItemProps {
  memo: Memo;
  onUpdate: (memoId: string, content: string) => void;
  onDelete: (memoId: string) => void;
  onSave: (memoId: string, content: string) => void;
}
function MemoItem({ memo, onUpdate, onDelete, onSave }: MemoItemProps) {
  return (
    <li className={S.memoItemContainer}>
      <textarea
        className={S.memoItemTextarea}
        value={memo.content}
        placeholder="메모를 입력하세요"
        onChange={(e) => onUpdate(String(memo.id), e.target.value)}
      />
      <div className={S.buttonGroup}>
        <Button
          variant="primary"
          className={S.memoSaveButton}
          onClick={() => onSave(String(memo.id), memo.content)}
        >
          저장하기
        </Button>
        <Image
          src={close}
          className={S.memoItemDelete}
          alt="삭제하기"
          onClick={() => onDelete(String(memo.id))}
        />
      </div>
    </li>
  );
}

export default MemoItem;
