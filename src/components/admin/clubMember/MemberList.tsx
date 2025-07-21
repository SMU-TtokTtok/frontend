import { useClubMemberInfinite } from '@/hooks/useInfiniteCommon';

export default function MemberList() {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, refetch } = useClubMemberInfinite({
    enabled: true,
  });
  console.log(data);
  return <div>MemberList</div>;
}
