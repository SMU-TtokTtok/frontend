import { useMutation, useQuery, useQueryClient, useSuspenseQuery } from '@tanstack/react-query';
import { getGradeCount } from '@/components/admin/clubMember/api/getGradeCount';
import { getSearchMembers } from '@/components/admin/clubMember/api/getSearchMembers';
import { clubMemberKey } from './queries/key';
import { deleteClubMember } from '@/components/admin/clubMember/api/deleteClubMember';
import { patchClubMember } from '@/components/admin/clubMember/api/patchClubMember';
import {
  postClubMember,
  postClubMemberBody,
} from '@/components/admin/clubMember/api/postClubMember';
import { CustomHttpError } from '@/common/apis/apiClient';

export const useGradeCount = ({ clubId }: { clubId: string }) => {
  const { gradeCount } = clubMemberKey;
  const { data, isLoading } = useQuery({
    queryKey: [gradeCount],
    queryFn: () => getGradeCount(clubId),
    enabled: !!clubId,
  });
  return { data, isLoading };
};

export const useSearchClubMember = ({ search, clubId }: { search: string; clubId: string }) => {
  const { data, isLoading } = useSuspenseQuery({
    queryKey: ['searchClubMember', search, clubId],
    queryFn: () => getSearchMembers(search, clubId),
  });
  return { data, isLoading };
};

export const useDeleteClubMember = (handleModalOpen: () => void, clubId: string) => {
  const queryClient = useQueryClient();
  const { clubMember, gradeCount } = clubMemberKey;

  const deleteClubMemberMutation = useMutation({
    mutationFn: (memberId: string) => deleteClubMember(memberId, clubId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [clubMember] });
      queryClient.invalidateQueries({ queryKey: [gradeCount] });
      handleModalOpen();
    },
    onError: (error) => {
      const customError = error as CustomHttpError;
      if (customError.status !== 401) {
        alert('삭제 중 오류가 발생했습니다.');
      }
    },
  });

  const handleDeleteClubMember = (memberId: string) => {
    deleteClubMemberMutation.mutate(memberId);
  };

  return { handleDeleteClubMember };
};

export const usePatchClubMember = (handleModalOpen: () => void, clubId: string) => {
  const queryClient = useQueryClient();
  const { clubMember } = clubMemberKey;

  const patchClubMemberMutation = useMutation({
    mutationFn: ({ memberId, role }: { memberId: string; role: string }) =>
      patchClubMember(memberId, role, clubId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [clubMember] });
      // queryClient.invalidateQueries({ queryKey: ['gradeCount'] });
      handleModalOpen();
    },
    onError: (error: CustomHttpError) => {
      if (error.status === 409) {
        alert('회장과 부회장은 1명만 존재할 수 있습니다.');
      } else if (error.status !== 401) {
        alert('권한 변경 중 오류가 발생했습니다.');
      }
    },
  });

  const handlePatchClubMember = ({ memberId, role }: { memberId: string; role: string }) => {
    patchClubMemberMutation.mutate({ memberId, role });
  };

  return { handlePatchClubMember };
};

export const usePostClubMember = (clubId: string, onSuccess?: () => void) => {
  const queryClient = useQueryClient();
  const { clubMember, gradeCount } = clubMemberKey;

  const postClubMemberMutation = useMutation({
    mutationFn: ({ body, role }: { body: postClubMemberBody; role: string }) =>
      postClubMember(body, role, clubId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [clubMember] });
      queryClient.invalidateQueries({ queryKey: [gradeCount] });
      onSuccess?.(); // 성공 시 콜백 실행
    },
    onError: (error: CustomHttpError) => {
      if (error.status === 404) {
        alert('똑똑에 가입하지 않은 학번입니다.');
      } else if (error.status === 409) {
        alert('이미 추가한 학번입니다.');
      } else if (error.status !== 401) {
        alert('추가 중 오류가 발생했습니다.');
      }
    },
  });

  const handlePostClubMember = (body: postClubMemberBody, role: string) => {
    postClubMemberMutation.mutate({ body, role });
  };

  return { handlePostClubMember };
};
