import { useMutation, useQueryClient, useSuspenseQuery } from '@tanstack/react-query';
import { getGradeCount } from '@/components/admin/clubMember/api/getGradeCount';
import { getSearchMembers } from '@/components/admin/clubMember/api/getSearchMembers';
import { clubMemberKey } from './queries/key';
import { deleteClubMember } from '@/components/admin/clubMember/api/deleteClubMember';
import { patchClubMember } from '@/components/admin/clubMember/api/patchClubMember';
import {
  postClubMember,
  postClubMemberBody,
} from '@/components/admin/clubMember/api/postClubMember';

export const useGradeCount = () => {
  const { data, isLoading } = useSuspenseQuery({
    queryKey: ['gradeCount'],
    queryFn: () => getGradeCount(),
  });
  return { data, isLoading };
};

export const useSearchClubMember = ({ search }: { search: string }) => {
  const { data, isLoading } = useSuspenseQuery({
    queryKey: ['searchClubMember', search],
    queryFn: () => getSearchMembers(search),
  });
  return { data, isLoading };
};

export const useDeleteClubMember = (handleModalOpen: () => void) => {
  const queryClient = useQueryClient();
  const { clubMember } = clubMemberKey;

  const deleteClubMemberMutation = useMutation({
    mutationFn: (memberId: string) => deleteClubMember(memberId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [clubMember] });
      queryClient.invalidateQueries({ queryKey: ['gradeCount'] });
      handleModalOpen();
    },
  });

  const handleDeleteClubMember = (memberId: string) => {
    deleteClubMemberMutation.mutate(memberId);
  };

  return { handleDeleteClubMember };
};

export const usePatchClubMember = () => {
  const queryClient = useQueryClient();
  const { clubMember } = clubMemberKey;

  const patchClubMemberMutation = useMutation({
    mutationFn: ({ memberId, role }: { memberId: string; role: string }) =>
      patchClubMember(memberId, role),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [clubMember] });
      // queryClient.invalidateQueries({ queryKey: ['gradeCount'] });
    },
  });

  const handlePatchClubMember = ({ memberId, role }: { memberId: string; role: string }) => {
    patchClubMemberMutation.mutate({ memberId, role });
  };

  return { handlePatchClubMember };
};

export const usePostClubMember = (onSuccess?: () => void) => {
  const queryClient = useQueryClient();
  const { clubMember } = clubMemberKey;

  const postClubMemberMutation = useMutation({
    mutationFn: ({ body, role }: { body: postClubMemberBody; role: string }) =>
      postClubMember(body, role),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [clubMember] });
      queryClient.invalidateQueries({ queryKey: ['gradeCount'] });
      onSuccess?.(); // 성공 시 콜백 실행
    },
  });

  const handlePostClubMember = (body: postClubMemberBody, role: string) => {
    postClubMemberMutation.mutate({ body, role });
  };

  return { handlePostClubMember };
};
