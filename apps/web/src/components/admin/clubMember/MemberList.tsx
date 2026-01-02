import { useClubMemberInfinite } from '@/hooks/useInfiniteCommon';
import MemberItem from './MemberItem';
import * as S from './memberList.css';

import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import Lottie from '@/common/ui/loading/lottie';
import loading from '@/assets/loading.json';
import { useRouter } from 'next/navigation';
import { ROUTES } from '@/common/constants/routes';
import LoadingSpinner from '@/common/ui/loading';
import { useAuthStore } from '@/common/store/adminAuthStore';
import AddButton from './ui/AddButton';
import Empty from '@/common/components/empty';

export default function MemberList({ isEditing }: { isEditing: boolean }) {
  const { profile } = useAuthStore();
  const { clubMembers, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useClubMemberInfinite({
      enabled: !!profile?.clubId,
      clubId: profile?.clubId,
    });
  const router = useRouter();
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

  if (isLoading) return <LoadingSpinner />;

  const isEmpty = clubMembers.length === 0;
  return (
    <>
      {isEmpty && !isEditing && <Empty className={S.emptyText}>등록된 부원이 없습니다</Empty>}
      {isEmpty && isEditing && (
        <div className={S.emptyContainer}>
          <AddButton
            role="임원진"
            onClick={() => router.push(ROUTES.ADMIN_CLUB_MEMBER_ADD + '?role=EXECUTIVE')}
          />
          <div className={S.divider} />
          <AddButton
            role="부원"
            onClick={() => router.push(ROUTES.ADMIN_CLUB_MEMBER_ADD + '?role=MEMBER')}
          />
        </div>
      )}
      {!isEmpty && (
        <ul className={S.memberItemList}>
          {isEditing && (
            <AddButton
              role="임원진"
              onClick={() => router.push(ROUTES.ADMIN_CLUB_MEMBER_ADD + '?role=EXECUTIVE')}
            />
          )}
          {isEditing && clubMembers.every((member) => member.role === 'MEMBER') && (
            <>
              <div className={S.divider} />
              <AddButton
                role="부원"
                onClick={() => router.push(ROUTES.ADMIN_CLUB_MEMBER_ADD + '?role=MEMBER')}
              />
            </>
          )}
          {clubMembers.map((member, index) => {
            const nextMember = clubMembers[index + 1];
            const isExecutiveGroup = ['PRESIDENT', 'VICE_PRESIDENT', 'EXECUTIVE'].includes(
              member.role,
            );
            const isNextMember = nextMember && nextMember.role === 'MEMBER';
            const isLastExecutive = isExecutiveGroup && (!nextMember || isNextMember);
            const allMembersAreExecutive = clubMembers.every((m) =>
              ['PRESIDENT', 'VICE_PRESIDENT', 'EXECUTIVE'].includes(m.role),
            );
            const shouldShowDivider = isLastExecutive && (isEditing || !allMembersAreExecutive);

            return (
              <div key={index}>
                <MemberItem {...member} isEditing={isEditing} />
                {shouldShowDivider && (
                  <>
                    <div className={S.divider} />
                    {isEditing && (
                      <AddButton
                        role="부원"
                        onClick={() => router.push(ROUTES.ADMIN_CLUB_MEMBER_ADD + '?role=MEMBER')}
                      />
                    )}
                  </>
                )}
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
