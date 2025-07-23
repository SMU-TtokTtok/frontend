import { useClubMemberInfinite } from '@/hooks/useInfiniteCommon';
import { useMemo } from 'react';
import MemberItem from './MemberItem';
import * as S from './memberItem.css';

export default function MemberList() {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, refetch } = useClubMemberInfinite({
    enabled: true,
  });

  // 무한스크롤 데이터에서 clubMembers만 추출
  const clubMembers = useMemo(() => {
    if (!data?.pages) return [];
    return data.pages.flatMap((page) => page.clubMembers || []);
  }, [data?.pages]);

  console.log('원본 데이터:', data);
  console.log('가공된 clubMembers:', clubMembers);

  return (
    <ul className={S.memberItemList}>
      {clubMembers.map((member) => (
        <MemberItem key={member.memberId} {...member} />
      ))}
    </ul>
  );
}
