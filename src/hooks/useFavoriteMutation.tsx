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
