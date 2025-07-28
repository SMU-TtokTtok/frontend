import * as S from './rightSide.css';
import Button from '@/common/ui/button/index';
import { UserClubIntro } from '@/common/model/clubIntro';
import { convertGradeArrayToString } from '@/common/util/convertGradeArrayToString';
import { useRouter } from 'next/navigation';
import { ROUTES } from '@/common/constants/routes';
import { formatDateToDot, formatDateToMonthDay } from '@/common/util/formatDate';
import { useFollowSidebar } from '@/hooks/useFollowSidebar';
import { sidebarTop } from './rightSide.css';
import { assignInlineVars } from '@vanilla-extract/dynamic';

const RightSide = ({ clubIntro, clubId }: { clubIntro: UserClubIntro; clubId: number }) => {
  const { recruitStartDate, recruitEndDate, recruitTarget, recruitNumber, isRecruiting } =
    clubIntro;
  const router = useRouter();

  // 커스텀 훅 사용
  const { barPosition } = useFollowSidebar({ initialPosition: 124 });

  return (
    <div
      className={S.container}
      style={assignInlineVars({
        [sidebarTop]: `${barPosition}px`,
      })}
    >
      <div className={S.contentFlex}>
        {isRecruiting ? (
          <>
            <div className={S.itemFlex}>
              <div className={S.itemTitle}>모집기간</div>
              <div className={S.itemContent}>
                {formatDateToDot(recruitStartDate)}~{formatDateToMonthDay(recruitEndDate)}
              </div>
            </div>
            <div className={S.itemFlex}>
              <div className={S.itemTitle}>모집대상</div>
              <div className={S.itemContent}>{convertGradeArrayToString(recruitTarget)}</div>
            </div>
            <div className={S.itemFlex}>
              <div className={S.itemTitle}>모집인원</div>
              <div className={S.itemContent}>총 {recruitNumber}명</div>
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
        onClick={() => {
          router.push(ROUTES.APPLIY_FORM(clubId));
        }}
      >
        {isRecruiting ? '지원하기' : '지원마감'}
      </Button>
    </div>
  );
};

export default RightSide;
