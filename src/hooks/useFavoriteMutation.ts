import { useMutation, useQueryClient } from '@tanstack/react-query';
import { patchFavorite } from '@/components/home/popularClubList/api/popularList';
import { clubDataKey } from '@/hooks/queries/key';
interface usePatchFavoriteParams {
  clubId: number;
}
export const usePatchFavorite = () => {
  const queryClient = useQueryClient();
  const { popularClubList } = clubDataKey;

  const favoriteMutation = useMutation({
    mutationFn: ({ clubId }: usePatchFavoriteParams) => patchFavorite(clubId),
    onSuccess: () => {
      alert('즐겨찾기 상태가 변경되었습니다.'); //모달 만들어지면 대체할게요! by 형준
      queryClient.invalidateQueries({ queryKey: popularClubList });
    },
  });

  const handleFavoriteStatus = ({ clubId }: usePatchFavoriteParams) => {
    favoriteMutation.mutate({ clubId });
  };

  return {
    handleFavoriteStatus,
  };
};
