import { ApplyFormField } from '@/common/model/applicationForm';
import * as S from './questionNavigator.css';

interface QuestionNavigatorProps {
  fields: ApplyFormField[];
  handleScrollTo: (index: number) => void;
}

function QuestionNavigator({ fields, handleScrollTo }: QuestionNavigatorProps) {
  return (
    <div className={S.container}>
      <h4 className={S.label}>질문 목차</h4>
      {fields?.map((field, index) => (
        <div key={index} className={S.itemContainer}>
          <p className={S.sequenceItem} onClick={() => handleScrollTo(index)}>
            {index + 1}. {field.title}
          </p>
        </div>
      ))}
    </div>
  );
}

export default QuestionNavigator;
