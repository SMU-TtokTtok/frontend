import Image from 'next/image';
import * as S from './template.css';
import Add from '@/assets/template_add.svg';
import { ApplyFormField } from '@/common/model/applicationForm';
type AddFieldParam = { newField?: ApplyFormField };

interface TemplateItemProps {
  name: string | React.ReactNode;
  field: ApplyFormField;
  handleAddField: (param: AddFieldParam) => void;
}

function TemplateItem({ name, field, handleAddField }: TemplateItemProps) {
  return (
    <div className={S.templateItemContainer} onClick={() => handleAddField({ newField: field })}>
      <p className={S.templateItemLabel}>{name}</p>
      <Image src={Add} alt={`${name} 질문 추가하기`} />
    </div>
  );
}

export default TemplateItem;
