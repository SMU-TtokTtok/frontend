import React from 'react';
import * as S from '../applicantDetailModal.css';
import { Answer } from '@/common/model/applicants';
import FileDown from '@/assets/file_down.svg';
import Image from 'next/image';
import { getApplicantFile } from '../../api/applicants';
import useDownloadFile from '@/hooks/useDownLoadFile';
interface AnswerFileProps {
  answer: Answer;
  applicantName: string;
}

function AnswerFile({ answer, applicantName }: AnswerFileProps) {
  const { handleDownload } = useDownloadFile();
  const triggerFileDownload = async (fileUrl: string) => {
    try {
      const blob = await getApplicantFile(fileUrl);
      handleDownload(blob, answer.value, applicantName);
    } catch (error) {
      console.error('파일 다운로드 실패:', error);
      alert('파일을 불러오는 데 실패했습니다.');
    }
  };

  return (
    <div className={S.answer}>
      <label className={S.label}>
        {answer.title}
        {answer.isEssential && <span className={S.essential}>*</span>}
      </label>
      <h3 className={S.subTitle}>{answer.subTitle}</h3>
      {answer.value && (
        <div className={S.fileDownload} onClick={() => triggerFileDownload(answer.value)}>
          <Image src={FileDown} alt="파일 다운" />
          <p className={S.fileDownloadText}>파일 다운</p>
        </div>
      )}
    </div>
  );
}

export default AnswerFile;
