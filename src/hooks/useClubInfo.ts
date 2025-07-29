import { useSuspenseQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { clubInfoKey } from './queries/key';
import { getClubInfo } from '@/components/clubInfo/api/getClubInfo';
import { getAdminClubInfo } from '@/components/admin/clubInfo/api/getClubInfo';
import { patchIsRecruting } from '@/components/admin/clubInfo/api/patchIsRecruting';

export const useClubInfo = (clubId: number) => {
  const { clubInfo } = clubInfoKey;

  const { data, isLoading } = useSuspenseQuery({
    queryKey: [clubInfo, clubId],
    queryFn: () => getClubInfo(clubId),
  });
  return { data, isLoading };
};

export const useAdminClubInfo = () => {
  const { adminClubInfo } = clubInfoKey;

  const { data, isLoading, refetch } = useSuspenseQuery({
    queryKey: [adminClubInfo],
    queryFn: () => getAdminClubInfo(),
  });
  return { data, isLoading, refetch };
};

export const useRecruitmentToggle = (handleModalOpen: () => void) => {
  const queryClient = useQueryClient();
  const { adminClubInfo } = clubInfoKey;

  const patchIsRecrutingMutation = useMutation({
    mutationFn: async (isRecruiting: boolean) => {
      const response = await patchIsRecruting(isRecruiting);
      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [adminClubInfo] });
      handleModalOpen();
    },
  });

  const handleRecruitmentToggle = (isRecruiting: boolean) => {
    patchIsRecrutingMutation.mutate(isRecruiting);
  };

  return {
    handleRecruitmentToggle,
  };
};
