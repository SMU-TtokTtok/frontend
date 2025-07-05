import * as S from './rightSide.css';
import Button from '@/common/ui/button/index';
import { ClubIntro } from '@/common/model/clubIntro';

const RightSide = ({ clubIntro }: { clubIntro: ClubIntro }) => {
  const { recruitPeriod, recruitTarget, recruitNumber, isRecruiting } = clubIntro;

  return (
    <div className={S.container}>
      <div className={S.contentFlex}>
        {isRecruiting ? (
          <>
            <div className={S.itemFlex}>
              <div className={S.itemTitle}>모집기간</div>
              <div className={S.itemContent}>{recruitPeriod}</div>
            </div>
            <div className={S.itemFlex}>
              <div className={S.itemTitle}>모집대상</div>
              <div className={S.itemContent}>{recruitTarget}</div>
            </div>
            <div className={S.itemFlex}>
              <div className={S.itemTitle}>모집인원</div>
              <div className={S.itemContent}>{recruitNumber}</div>
            </div>
          </>
        ) : (
          <div className={S.notRecruiting}>지금은 지원기간이 아닙니다!</div>
        )}
      </div>
      <Button
        variant={isRecruiting ? 'primary' : 'tertiary'}
        className={`${S.button} ${!isRecruiting ? S.buttonDisabled : ''}`}
        disabled={!isRecruiting}
      >
        {isRecruiting ? '지원하기' : '지원마감'}
      </Button>
    </div>
  );
};

export default RightSide;
