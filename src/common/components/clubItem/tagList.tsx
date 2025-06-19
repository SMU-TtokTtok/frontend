import Tag from '@/common/ui/tag';
import * as S from './clubItem.css';

function TagList({ category }: { category: string[] }) {
  return (
    <>
      {category?.map((category) => (
        <Tag key={category} className={S.tagStyle} variant='default'>
          {category}
        </Tag>
      ))}
    </>
  );
}

export default TagList;
