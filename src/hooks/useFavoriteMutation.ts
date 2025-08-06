import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postFavorite } from '@/components/home/popularClubList/api/popularList';
import { clubInfoKey, clubKey, userKey } from '@/hooks/queries/key';

interface usePatchFavoriteParams {
  clubId: string;
}
export const usePostFavorite = (handleModalOpen: () => void) => {
  const queryClient = useQueryClient();
  const { popularClubList, allClubList } = clubKey;
  const { favoritesClubList, appliedClubList, searchClubList } = userKey;
  const { clubInfo } = clubInfoKey;

  const favoriteMutation = useMutation({
    mutationFn: ({ clubId }: usePatchFavoriteParams) => postFavorite(clubId),
    onSuccess: () => {
      handleModalOpen();
      queryClient.invalidateQueries({
        predicate: (query) => query.queryKey[0] === allClubList,
      });
      queryClient.invalidateQueries({ queryKey: popularClubList });
      queryClient.invalidateQueries({ queryKey: favoritesClubList });
      queryClient.invalidateQueries({ queryKey: appliedClubList });
      queryClient.invalidateQueries({ queryKey: searchClubList });
      queryClient.invalidateQueries({ queryKey: clubInfo });
    },
  });

  const handleFavoriteStatus = ({ clubId }: usePatchFavoriteParams) => {
    favoriteMutation.mutate({ clubId });
  };

  return {
    handleFavoriteStatus,
  };
};
