import * as S from './rightSide.css';
import Button from '@/common/ui/button';

const content = [
  {
    content: '기본인적사항',
  },
  {
    content: '자기소개',
  },
  {
    content: '지원동기',
  },
  {
    content: '동아리에서 해보고싶은 활동',
  },
  {
    content:
      '해당 내용에 들어가는 글의 길이는 2line을 넘지 않습니다. 만약 넘을 시 이렇게 처리해주세요...',
  },
];

export default function RightSide() {
  return (
    <div className={S.container}>
      <div className={S.BoxFlex}>
        <div className={S.BoxTitle}>목차</div>
        <div className={S.ContentContainer}>
          {content.map((item, index) => (
            <div className={S.contentText} key={index}>
              {index + 1}. {item.content}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
