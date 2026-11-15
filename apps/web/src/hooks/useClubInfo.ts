import { useSuspenseQuery, useMutation, useQueryClient, useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { clubInfoKey } from './queries/key';
import { getClubInfo } from '@/components/clubInfo/api/getClubInfo';
import { getAdminClubInfo } from '@/components/admin/clubInfo/api/getClubInfo';
import { patchIsRecruting } from '@/components/admin/clubInfo/api/patchIsRecruting';
import { patchClubInfo } from '@/components/admin/clubInfo/api/pactchClubInfo';
import { AdminClubIntro } from '@/common/model/clubIntro';
import { CustomHttpError } from '@/common/apis/apiClient';
import { ROUTES } from '@/common/constants/routes';
import { toRecruitState } from '@/common/util/recruitState';
import { getRecruitToggleMessage, RecruitToggleAction } from '@/common/util/recruitToggle';

export const useClubInfo = (clubId: string) => {
  const { clubInfo } = clubInfoKey;

  const { data, isLoading } = useSuspenseQuery({
    queryKey: [clubInfo, clubId],
    queryFn: () => getClubInfo(clubId),
  });
  return { data, isLoading };
};

export const useAdminClubInfo = (clubId: string) => {
  const { adminClubInfo } = clubInfoKey;
  const { data, isLoading, refetch } = useQuery({
    queryKey: [adminClubInfo, clubId],
    queryFn: () => getAdminClubInfo(clubId),
    enabled: !!clubId,
  });
  return { data, isLoading, refetch };
};

export const useRecruitmentToggle = (onToggled: (message: string) => void, clubId: string) => {
  const queryClient = useQueryClient();
  const { adminClubInfo } = clubInfoKey;

  const patchIsRecrutingMutation = useMutation({
    mutationFn: async (action: RecruitToggleAction) => {
      await patchIsRecruting(clubId);
      return action;
    },
    onSuccess: async (action) => {
      // 되살리기는 마감 상태로 시작하므로, 다시 조회한 상태를 보고 안내를 고른다
      await queryClient.refetchQueries({ queryKey: [adminClubInfo, clubId] });
      const next = queryClient.getQueryData<AdminClubIntro>([adminClubInfo, clubId]);
      onToggled(
        getRecruitToggleMessage(action, toRecruitState(next?.recruitState, !!next?.recruiting)),
      );
    },
    onError: (error: CustomHttpError) => {
      if (error.status === 404) {
        alert('지원 폼 제작이 완료되지 않았습니다');
      } else if (error.status !== 401) {
        alert('모집 상태 변경에 실패했습니다');
      }
    },
  });

  const handleRecruitmentToggle = (action: RecruitToggleAction) => {
    patchIsRecrutingMutation.mutate(action);
  };

  return {
    handleRecruitmentToggle,
  };
};

export const useAdminClubPatch = (handleModalOpen: () => void, clubId: string) => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { adminClubInfo } = clubInfoKey;

  const patchClubInfoMutation = useMutation({
    mutationFn: async (body: {
      request: Partial<AdminClubIntro>;
      profileImageUrl: File | null;
    }) => {
      const response = await patchClubInfo(body, clubId);
      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [adminClubInfo, clubId] });
      handleModalOpen();
    },
    onError: (error) => {
      const customError = error as CustomHttpError;
      if (customError.status === 404) {
        const shouldNavigate = confirm('지원폼이 아직 제작되지 않았습니다. 지원폼 제작 페이지로 이동하시겠습니까?');
        if (shouldNavigate) {
          router.push(ROUTES.ADMIN_APPLICATIONS_CREATE);
        }
      } else if (customError.status !== 401) {
        alert('동아리 정보 수정에 실패했습니다');
      }
    },
  });

  const handleClubInfoPatch = (request: Partial<AdminClubIntro>, profileImageUrl: File | null) => {
    patchClubInfoMutation.mutate({ request, profileImageUrl });
  };

  return {
    handleClubInfoPatch,
  };
};
