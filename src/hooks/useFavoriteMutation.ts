import { useMutation, useQueryClient } from '@tanstack/react-query';
import { patchFavorite } from '@/components/home/popularClubList/api/popularList';
import { clubKey } from '@/hooks/queries/key';
import { useModal } from './useModal';
interface usePatchFavoriteParams {
  clubId: string;
}
export const usePatchFavorite = () => {
  const queryClient = useQueryClient();
  const { popularClubList } = clubKey;
  const { handleModalOpen } = useModal();

  const favoriteMutation = useMutation({
    mutationFn: ({ clubId }: usePatchFavoriteParams) => patchFavorite(clubId),
    onSuccess: () => {
      handleModalOpen();
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
