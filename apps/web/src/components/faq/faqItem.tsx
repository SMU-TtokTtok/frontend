'use client';

import Image from 'next/image';
import * as S from './index.css';
import ArrowDropDown from '@/assets/dropdown.svg';
import InstallGuideSection from './installGuideSection';
import type { FaqItemData } from './faqAccordion';

type FaqItemProps = {
  item: FaqItemData;
  isExpanded: boolean;
  showDivider: boolean;
  onToggle: () => void;
};

export default function FaqItem({ item, isExpanded, showDivider, onToggle }: FaqItemProps) {
  return (
    <div className={S.faqItem({ expanded: isExpanded })}>
      {showDivider && <div className={S.divider} />}
      <button className={S.faqItemHeader} onClick={onToggle} aria-expanded={isExpanded}>
        <div className={S.questionGroup}>
          <span className={S.qLabel}>Q</span>
          <span className={S.questionText({ expanded: isExpanded })}>{item.question}</span>
        </div>
        <Image
          src={ArrowDropDown}
          alt="드롭다운"
          className={S.arrowIcon({ expanded: isExpanded })}
        />
      </button>
      {isExpanded && (
        <div className={S.answerWrapper}>
          <p className={S.answerText}>{item.answer}</p>
          {item.hasInstallGuide && <InstallGuideSection />}
        </div>
      )}
    </div>
  );
}
