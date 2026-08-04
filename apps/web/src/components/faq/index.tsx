import * as S from './index.css';
import FaqAccordion from './faqAccordion';

export default function FaqList() {
  return (
    <div className={S.pageWrapper}>
      <div className={S.contentWrapper}>
        <h1 className={S.title}>자주 묻는 질문</h1>
        <FaqAccordion />
      </div>
    </div>
  );
}
