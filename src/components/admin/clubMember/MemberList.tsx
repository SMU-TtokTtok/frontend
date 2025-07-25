import { useClubMemberInfinite } from '@/hooks/useInfiniteCommon';
import MemberItem from './MemberItem';
import * as S from './memberList.css';
import Empty from '@/common/components/empty';
import { MESSAGE } from '@/common/constants/message';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import Lottie from 'lottie-react';
import loading from '@/assets/loading.json';

export default function MemberList() {
  const { clubMembers, fetchNextPage, hasNextPage, isFetchingNextPage } = useClubMemberInfinite({
    enabled: true,
  });

  // 무한스크롤을 위한 useInView 훅
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: '100px', // 100px 전에 미리 로드
  });

  // inView가 true이고 다음 페이지가 있으면 다음 페이지 로드
  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage]);

  const isEmpty = clubMembers.length === 0;

  return (
    <>
      {isEmpty && <Empty>{MESSAGE.empty.noClubMember}</Empty>}
      {!isEmpty && (
        <ul className={S.memberItemList}>
          {clubMembers.map((member, index) => {
            const nextMember = clubMembers[index + 1];
            const isExecutiveGroup = ['PRESIDENT', 'VICE_PRESIDENT', 'EXECUTIVE'].includes(
              member.role,
            );
            const isNextMember = nextMember && nextMember.role === 'MEMBER';
            const shouldShowDivider = isExecutiveGroup && isNextMember;

            return (
              <div key={member.memberId}>
                <MemberItem {...member} />
                {shouldShowDivider && <div className={S.divider} />}
              </div>
            );
          })}
          {/* 무한스크롤 트리거 요소 */}
          <li ref={ref} style={{ height: '1px', visibility: 'hidden' }}></li>
          {isFetchingNextPage && (
            <div className={S.lottieContainer}>
              <Lottie
                animationData={loading}
                loop={true}
                style={{ width: '100%', height: '100%' }}
              />
            </div>
          )}
        </ul>
      )}
    </>
  );
}
