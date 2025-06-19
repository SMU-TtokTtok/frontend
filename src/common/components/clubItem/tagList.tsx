import Tag from '@/common/ui/tag';
import * as S from './clubItem.css';

function TagList({ category }: { category: string[] }) {
  return (
    <>
      {category?.map((tag) => (
        <Tag key={tag} className={S.tagStyle} variant='default'>
          {tag}
        </Tag>
      ))}
    </>
  );
}

export default TagList;
