'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@ttockttock/ui';
import * as S from './index.css';
import iosInstallGuideImage from './assets/images/ios-install-guide.webp';
import androidInstallGuideImage from './assets/images/android-install-guide.webp';

const FAQ_LIST = [
  {
    question: '똑똑 서비스는 어떤 서비스인가요?',
    answer:
      '똑똑은 상명대학교 동아리 리쿠르팅을 편리하게 진행할 수 있는 서비스입니다.\n동아리는 지원폼을 직접 만들어 지원자를 모집하고, 학생들은 여러 동아리를 한 곳에서 탐색하고 지원할 수 있습니다.',
  },
  {
    question: '동아리 지원은 어떻게 하나요?',
    answer:
      '원하는 동아리 페이지에서 [지원하기] 버튼을 클릭하여 지원서를 작성하고 제출할 수 있습니다.\n지원 전 모집 기간을 반드시 확인해 주세요.',
  },
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
    question: '앱은 어떻게 설치하나요?',
    answer:
      '똑똑은 별도의 앱스토어 설치 없이 홈 화면에 추가하여 앱처럼 사용할 수 있어요.\n아래 방법을 따라 설치해 보세요.',
    hasInstallGuide: true,
  },
  {
    question: '서비스 이용 중 문제가 발생했을 때 어떻게 하나요?',
    answer:
      '서비스 이용 중 문제가 발생하면 하단 피드백 링크를 통해 문의해 주세요.\n빠른 시일 내에 확인 후 안내드리겠습니다.',
  },
  {
    question: '동아리 가입을 신청하려면 어떻게 해야 하나요?',
    answer:
      '동아리 가입을 신청하려면 동아리 로그인 버튼 클릭 후 동아리 가입 신청 페이지에서 가입을 진행해 주세요.',
  },
];

const INSTALL_GUIDE_OPTIONS = [
  { key: 'ios', label: 'iPhone', image: iosInstallGuideImage },
  { key: 'android', label: 'Android', image: androidInstallGuideImage },
] as const;

type InstallGuidePlatform = (typeof INSTALL_GUIDE_OPTIONS)[number]['key'];

function ArrowDropDown({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M7 10l5 5 5-5z" />
    </svg>
  );
}

export default function FaqList() {
  const [openIndexes, setOpenIndexes] = useState<Set<number>>(new Set([0]));
  const [installGuidePlatform, setInstallGuidePlatform] = useState<InstallGuidePlatform>('ios');

  const handleToggle = (index: number) => {
    setOpenIndexes((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  return (
    <div className={S.pageWrapper}>
      <div className={S.contentWrapper}>
        <h1 className={S.title}>자주 묻는 질문</h1>
        <div className={S.faqCard}>
          {FAQ_LIST.map((item, index) => {
            const isExpanded = openIndexes.has(index);
            const showDivider = index > 0 && !isExpanded && !openIndexes.has(index - 1);
            const selectedInstallGuide = INSTALL_GUIDE_OPTIONS.find(
              (option) => option.key === installGuidePlatform,
            );

            return (
              <div key={index} className={S.faqItem({ expanded: isExpanded })}>
                {showDivider && <div className={S.divider} />}
                <button
                  className={S.faqItemHeader}
                  onClick={() => handleToggle(index)}
                  aria-expanded={isExpanded}
                >
                  <div className={S.questionGroup}>
                    <span className={S.qLabel}>Q</span>
                    <span className={S.questionText({ expanded: isExpanded })}>
                      {item.question}
                    </span>
                  </div>
                  <ArrowDropDown className={S.arrowIcon({ expanded: isExpanded })} />
                </button>
                {isExpanded && (
                  <div className={S.answerWrapper}>
                    <p className={S.answerText}>{item.answer}</p>
                    {item.hasInstallGuide && selectedInstallGuide && (
                      <div className={S.installGuideWrapper}>
                        <div className={S.installGuideTabs} role="tablist" aria-label="기기 선택">
                          {INSTALL_GUIDE_OPTIONS.map((option) => {
                            const isSelected = option.key === installGuidePlatform;

                            return (
                              <Button
                                key={option.key}
                                role="tab"
                                aria-selected={isSelected}
                                variant={isSelected ? 'primary' : 'none'}
                                className={S.installGuideTab({ selected: isSelected })}
                                onClick={() => setInstallGuidePlatform(option.key)}
                              >
                                {option.label}
                              </Button>
                            );
                          })}
                        </div>
                        <Image
                          src={selectedInstallGuide.image}
                          alt={`${selectedInstallGuide.label} 앱 설치 가이드 이미지`}
                          className={S.answerImage}
                        />
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
