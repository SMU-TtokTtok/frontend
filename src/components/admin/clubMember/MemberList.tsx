import { useClubMemberInfinite } from '@/hooks/useInfiniteCommon';
import MemberItem from './MemberItem';
import * as S from './memberList.css';
// import Empty from '@/common/components/empty';
// import { MESSAGE } from '@/common/constants/message';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import Lottie from 'lottie-react';
import loading from '@/assets/loading.json';
import addExecutive from '@/assets/add_excutive.svg';
import addMember from '@/assets/add_member.svg';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ROUTES } from '@/common/constants/routes';
import addExecutiveIcon from '@/assets/add_excutive.svg';
import addMemberIcon from '@/assets/add_member.svg';

export default function MemberList({ isEditing }: { isEditing: boolean }) {
  const { clubMembers, fetchNextPage, hasNextPage, isFetchingNextPage } = useClubMemberInfinite({
    enabled: true,
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

  const isEmpty = clubMembers.length === 0;
  // const isEmpty = true;

  return (
    <>
      {isEmpty && (
        <div className={S.emptyContainer}>
          <Image
            src={addExecutive}
            alt="addExecutive"
            className={S.addCursor}
            onClick={() => router.push(ROUTES.ADMIN_CLUB_MEMBER_ADD + '?role=EXECUTIVE')}
          />
          <div className={S.border}></div>
          <Image
            src={addMember}
            alt="addMember"
            className={S.addCursor}
            onClick={() => router.push(ROUTES.ADMIN_CLUB_MEMBER_ADD + '?role=MEMBER')}
          />
        </div>
      )}
      {!isEmpty && (
        <ul className={S.memberItemList}>
          {isEditing && (
            <Image
              src={addExecutiveIcon}
              alt="addExecutive"
              className={S.addCursor}
              onClick={() => router.push(ROUTES.ADMIN_CLUB_MEMBER_ADD + '?role=EXECUTIVE')}
            />
          )}
          {isEditing && clubMembers.every((member) => member.role === 'MEMBER') && (
            <>
              <div className={S.divider} />
              <Image
                src={addMemberIcon}
                alt="addMember"
                className={S.addCursor}
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
              <div key={member.memberId}>
                <MemberItem {...member} isEditing={isEditing} />
                {shouldShowDivider && (
                  <>
                    <div className={S.divider} />
                    {isEditing && (
                      <Image
                        src={addMemberIcon}
                        alt="addMember"
                        className={S.addCursor}
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
