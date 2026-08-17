'use client';

import { useEffect, useState } from 'react';
import type { StaticImageData } from 'next/image';
import * as S from './index.css';
import FaqItem from './faqItem';
import { InstallGuideImagePreloader } from './installGuideSection';

export type FaqImagePreviewData = {
  src: StaticImageData;
  alt: string;
};

export type FaqItemData = {
  question: string;
  answer: string;
  hasInstallGuide?: boolean;
};

const FAQ_LIST: FaqItemData[] = [
  {
    question: '지원서 제출 후 수정이 가능한가요?',
    answer:
      '지원서 제출 후에는 수정이 불가능합니다.\n제출 전 모든 내용을 꼼꼼히 확인하시고 제출해 주세요.',
  },
  {
    question: '동아리 합격 여부는 어떻게 확인하나요?',
    answer:
      '합격 여부는 동아리에서 직접 발표하며, 제출해주신 이메일 또는 동아리가 안내하는 방법으로 확인하실 수 있습니다.',
  },
  {
    question: '동아리를 신청하려면 어떻게 해야 하나요?',
    answer:
      '동아리를 신청하려면 동아리 로그인 버튼 클릭 후 동아리 가입 신청 페이지에서 가입을 진행해 주세요.',
  },
  {
    question: '앱은 어떻게 설치하나요?',
    answer:
      '똑똑은 별도의 앱스토어 설치 없이 홈 화면에 추가하여 앱처럼 사용할 수 있어요.\n아래 방법을 따라 설치해 보세요.',
    hasInstallGuide: true,
  },
  {
    question: '모든 동아리가 등록되어 있나요?',
    answer:
      '똑똑은 동아리 신청을 끊임없이 받고 있습니다. 현재 약 20개의 동아리가 등록되어 있습니다',
  },
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [previewImage, setPreviewImage] = useState<FaqImagePreviewData | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const handlePreviewClose = () => {
    setPreviewImage(null);
  };

  useEffect(() => {
    if (!previewImage) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handlePreviewClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [previewImage]);

  const isDividerVisible = (index: number) =>
    index > 0 && openIndex !== index && openIndex !== index - 1;

  return (
    <>
      <InstallGuideImagePreloader />
      <div className={S.faqCard}>
        {FAQ_LIST.map((item, index) => (
          <FaqItem
            key={item.question}
            item={item}
            isExpanded={openIndex === index}
            showDivider={isDividerVisible(index)}
            onToggle={() => handleToggle(index)}
            onInstallGuideImageClick={setPreviewImage}
          />
        ))}
      </div>
      {previewImage && (
        <div
          className={S.imagePreviewOverlay}
          role="dialog"
          aria-modal="true"
          onClick={handlePreviewClose}
        >
          <button
            type="button"
            className={S.imagePreviewCloseButton}
            onClick={handlePreviewClose}
            aria-label="닫기"
          >
            ×
          </button>
          <img
            src={previewImage.src.src}
            alt={previewImage.alt}
            width={previewImage.src.width}
            height={previewImage.src.height}
            className={S.imagePreview}
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
