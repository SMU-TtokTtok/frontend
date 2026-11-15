import * as S from './rightSide.css';
import Button from '@/common/ui/button/index';
import { UserClubIntro } from '@/common/model/clubIntro';
import { convertGradeArrayToString } from '@/common/util/convertGradeArrayToString';
import { useRouter } from 'next/navigation';
import { ROUTES } from '@/common/constants/routes';
import { formatDateToDot2, formatToMonthDay2 } from '@/common/util/formatDate';
import { useFollowSidebar } from '@/hooks/useFollowSidebar';
import { sidebarTop } from './rightSide.css';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import { toRecruitState } from '@/common/util/recruitState';

const APPLY_BUTTON_LABEL = { UPCOMING: '모집 예정', OPEN: '지원하기', CLOSED: '지원마감' };

const RightSide = ({ clubIntro, clubId }: { clubIntro: UserClubIntro; clubId: string }) => {
  const { applyStartDate, applyDeadLine, grades, maxApplyCount, recruiting, recruitState } =
    clubIntro;
  const state = toRecruitState(recruitState, recruiting);
  const isOpen = state === 'OPEN';
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
        {state !== 'CLOSED' ? (
          <>
            <div className={S.itemFlex}>
              <div className={S.itemTitle}>모집기간</div>
              <div className={S.itemContent}>
                {formatDateToDot2(applyStartDate)}~{formatToMonthDay2(applyDeadLine)}
              </div>
            </div>
            <div className={S.itemFlex}>
              <div className={S.itemTitle}>모집대상</div>
              <div className={S.itemContent}>{convertGradeArrayToString(grades)}</div>
            </div>
            <div className={S.itemFlex}>
              <div className={S.itemTitle}>모집인원</div>
              <div className={S.itemContent}>총 {maxApplyCount}명</div>
            </div>
          </>
        ) : (
          <div className={S.notRecruiting}>지금은 지원기간이 아닙니다!</div>
        )}
      </div>
      <Button
        variant={isOpen ? 'primary' : 'tertiary'}
        className={`${S.button} ${!isOpen ? S.buttonDisabled : ''}`}
        disabled={!isOpen}
        onClick={() => {
          router.push(ROUTES.APPLIY_FORM(clubId));
        }}
      >
        {APPLY_BUTTON_LABEL[state]}
      </Button>
    </div>
  );
};

export default RightSide;
