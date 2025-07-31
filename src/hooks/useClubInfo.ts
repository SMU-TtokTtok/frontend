import { useSuspenseQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { clubInfoKey } from './queries/key';
import { getClubInfo } from '@/components/clubInfo/api/getClubInfo';
import { getAdminClubInfo } from '@/components/admin/clubInfo/api/getClubInfo';
import { patchIsRecruting } from '@/components/admin/clubInfo/api/patchIsRecruting';
import { patchClubInfo } from '@/components/admin/clubInfo/api/pactchClubInfo';
import { AdminClubIntro } from '@/common/model/clubIntro';

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
    mutationFn: async () => {
      const response = await patchIsRecruting();
      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [adminClubInfo] });
      handleModalOpen();
    },
  });

  const handleRecruitmentToggle = () => {
    patchIsRecrutingMutation.mutate();
  };

  return {
    handleRecruitmentToggle,
  };
};

export const useAdminClubPatch = () => {
  const queryClient = useQueryClient();
  const { adminClubInfo } = clubInfoKey;

  const patchClubInfoMutation = useMutation({
    mutationFn: async (body: { request: Partial<AdminClubIntro>; profileImageUrl: File | null }) => {
      const response = await patchClubInfo(body);
      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [adminClubInfo] });
    },
  });

  const handleClubInfoPatch = (request: Partial<AdminClubIntro>, profileImageUrl: File | null) => {
    patchClubInfoMutation.mutate({ request, profileImageUrl });
  };

  return {
    handleClubInfoPatch,
  };
};
