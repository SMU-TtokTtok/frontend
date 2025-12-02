import * as S from './template.css';
import TemplateItem from './templateItem';
import { templateFields } from '@/common/constants/adminForm';
import DropDown from '@/common/components/dropdown';
import DropDownButton from '@/common/ui/dropdownButton';

interface RecommendTemplateProps {
  handleAddField: () => void;
}
const templateItems = [
  {
    name: '자기소개 (서술형)',
    field: templateFields.SELF_INTRODUCTION,
  },
  {
    name: '지원동기 (서술형)',
    field: templateFields.MOTIVATION,
  },
  {
    name: (
      <>
        해보고 싶은
        <br /> 활동 (서술형)
      </>
    ),
    field: templateFields.CLUB_ACTIVITY,
  },
];

function RecommendTemplate({ handleAddField }: RecommendTemplateProps) {
  return (
    <>
      {/* 데스크탑버전 */}
      <div className={S.container}>
        <div className={S.header}>
          <label className={S.label}>추천 질문 템플릿</label>
          <p className={S.description}>
            해당 질문을 클릭하면 자동으로
            <br /> 추가돼요.
          </p>
        </div>
        <div className={S.templateList}>
          {templateItems.map((item, index) => (
            <TemplateItem
              key={index}
              name={item.name}
              field={item.field}
              handleAddField={handleAddField}
            />
          ))}
        </div>
      </div>
      {/* 모바일버전 */}
      <div className={S.dropdownContainer}>
        <DropDown
          toggleButton={
            <DropDownButton variant="form" className={S.dropdownButton}>
              추천 질문 템플릿
            </DropDownButton>
          }
          panelClassName={S.dropdownPanel}
        >
          {templateItems.map((item, index) => (
            <TemplateItem
              key={index}
              name={item.name}
              field={item.field}
              handleAddField={handleAddField}
            />
          ))}
        </DropDown>
      </div>
    </>
  );
}

export default RecommendTemplate;
