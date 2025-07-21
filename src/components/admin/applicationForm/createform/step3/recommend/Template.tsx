import * as S from './template.css';
import TemplateItem from './templateItem';
import { templateFields } from '@/common/constants/adminForm';
interface RecommendTemplateProps {
  handleAddField: () => void;
}

function RecommendTemplate({ handleAddField }: RecommendTemplateProps) {
  return (
    <div className={S.container}>
      <div className={S.header}>
        <label className={S.label}>추천 질문 템플릿</label>
        <p className={S.description}>
          해당 질문을 클릭하면 자동으로
          <br /> 추가돼요.
        </p>
      </div>
      <div className={S.templateList}>
        <TemplateItem
          name="자기소개 (서술형)"
          field={templateFields.SELF_INTRODUCTION}
          handleAddField={handleAddField}
        />
        <TemplateItem
          name="지원동기 (서술형)"
          field={templateFields.MOTIVATION}
          handleAddField={handleAddField}
        />
        <TemplateItem
          name={
            <>
              동아리에서 해보고
              <br />
              싶은 활동 (서술형)
            </>
          }
          field={templateFields.CLUB_ACTIVITY}
          handleAddField={handleAddField}
        />
      </div>
    </div>
  );
}

export default RecommendTemplate;
