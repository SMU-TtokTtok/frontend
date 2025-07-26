import * as S from './memo.css';
import Image from 'next/image';
import add from '@/assets/add_circle.svg';
import MemoItem from './memoItem';
import { ApplicantInfo, Memo as IMemo } from '@/common/model/applicants';
import { useState } from 'react';
import { useMemoMutations } from '@/hooks/memo';
import Empty from '@/common/components/empty';
interface MemoProps {
  data: ApplicantInfo;
  applicantId: number;
}

function Memo({ data, applicantId }: MemoProps) {
  const [memos, setMemos] = useState<IMemo[]>(data.memos || []);
  const { deleteMemo, patchMemo, postMemo } = useMemoMutations();
  // 쿼리 낙관적 업데이트로 변경예정 by 형준
  const handleAddMemo = () => {
    const newMemo: IMemo = {
      id: String(Date.now()),
      content: '',
    };
    postMemo(
      { applicantId, content: newMemo.content },
      {
        onSuccess: () => {
          setMemos((prev) => [...prev, newMemo]);
        },
      },
    );
  };

  const handleChangeMemo = (memoId: number, content: string) => {
    const updatedMemo = memos.map((memo) =>
      memo.id === String(memoId) ? { ...memo, content } : memo,
    );
    setMemos(updatedMemo);
  };

  const handleSaveMemo = (memoId: number, content: string) => {
    patchMemo({
      applicantId: applicantId,
      memoId: String(memoId),
      content,
    });
  };

  const handleDeleteMemo = (memoId: number) => {
    const updatedMemos = memos.filter((memo) => memo.id !== String(memoId));
    deleteMemo(
      { applicantId: applicantId, memoId: String(memoId) },
      {
        onSuccess: () => {
          setMemos(updatedMemos);
        },
      },
    );
  };

  return (
    <div className={S.memoContainer}>
      <div className={S.memoHeader}>
        <label className={S.memoLabel}>메모</label>
        <Image src={add} alt="메모 추가" className={S.memoAddImg} onClick={handleAddMemo} />
      </div>
      {memos.length === 0 && <Empty className={S.emptyMessage}>지원자에 대한 메모가 없어요!</Empty>}

      {memos.length > 0 && (
        <ul className={S.memoList}>
          {memos.map((memo, index) => (
            <MemoItem
              key={index}
              memo={memo}
              onUpdate={handleChangeMemo}
              onDelete={handleDeleteMemo}
              onSave={handleSaveMemo}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default Memo;
