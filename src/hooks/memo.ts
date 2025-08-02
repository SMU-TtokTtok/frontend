import { useMutation, useQueryClient } from '@tanstack/react-query';
import { applicantKey } from './queries/key';
import { deleteMemo, patchMemo, postMemo } from '@/components/admin/applicants/api/applicants';
import { ApplicantDetailInfo } from '@/common/model/applicants';

interface UsePostMemoParams {
  applicantId: string;
  content: string;
}

export const usePostMemo = () => {
  const queryClient = useQueryClient();
  const { applicantInfo } = applicantKey;

  return useMutation({
    mutationFn: ({ applicantId, content }: UsePostMemoParams) => postMemo(applicantId, content),
    onMutate: async (newMemo) => {
      await queryClient.cancelQueries({ queryKey: [applicantInfo] });

      const previousData = queryClient.getQueryData<ApplicantDetailInfo>([applicantInfo]);

      queryClient.setQueryData<ApplicantDetailInfo>([applicantInfo], (old) => {
        if (!old) return old;
        return {
          ...old,
          memos: [...(old.memos || []), { id: `temp-${Date.now()}`, content: newMemo.content }],
        };
      });

      return { previousData };
    },
    onError: (err, newMemo, context) => {
      if (context?.previousData) {
        queryClient.setQueryData([applicantInfo], context.previousData);
      }
      alert('메모 추가 중 오류가 발생했습니다.');
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [applicantInfo] });
    },
  });
};

interface UseDeleteMemoParams {
  applicantId: string;
  memoId: string;
}

export const useDeleteMemo = () => {
  const queryClient = useQueryClient();
  const { applicantInfo } = applicantKey;

  return useMutation({
    mutationFn: ({ applicantId, memoId }: UseDeleteMemoParams) => deleteMemo(applicantId, memoId),

    onMutate: async (deleteTarget) => {
      await queryClient.cancelQueries({ queryKey: [applicantInfo] });

      const previousData = queryClient.getQueryData<ApplicantDetailInfo>([applicantInfo]);

      queryClient.setQueryData<ApplicantDetailInfo>([applicantInfo], (old) => {
        if (!old) return old;
        return {
          ...old,
          memos: old.memos.filter((memo) => memo.id !== deleteTarget.memoId),
        };
      });

      return { previousData };
    },

    onError: (err, _, context) => {
      if (context?.previousData) {
        queryClient.setQueryData([applicantInfo], context.previousData);
      }
      alert('메모 삭제 중 오류가 발생했습니다.');
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [applicantInfo] });
      alert('메모가 삭제되었습니다.');
    },
  });
};

interface UsePatchMemoParams {
  applicantId: string;
  memoId: string;
  content: string;
}

export const usePatchMemo = () => {
  const queryClient = useQueryClient();
  const { applicantInfo } = applicantKey;

  return useMutation({
    mutationFn: ({ applicantId, memoId, content }: UsePatchMemoParams) =>
      patchMemo(applicantId, memoId, content),

    onMutate: async (updatedMemo) => {
      await queryClient.cancelQueries({ queryKey: [applicantInfo] });

      const previousData = queryClient.getQueryData<ApplicantDetailInfo>([applicantInfo]);
      queryClient.setQueryData<ApplicantDetailInfo>([applicantInfo], (old) => {
        if (!old) return old;
        return {
          ...old,
          memos: old.memos.map((memo) =>
            memo.id === updatedMemo.memoId ? { ...memo, content: updatedMemo.content } : memo,
          ),
        };
      });

      return { previousData };
    },

    onError: (err, _, context) => {
      if (context?.previousData) {
        queryClient.setQueryData([applicantInfo], context.previousData);
      }
      alert('메모 수정 중 오류가 발생했습니다.');
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [applicantInfo] });
      alert('메모가 수정되었습니다.');
    },
  });
};

export const useMemoMutations = () => {
  const postMemoMutation = usePostMemo();
  const deleteMemoMutation = useDeleteMemo();
  const patchMemoMutation = usePatchMemo();

  return {
    postMemo: postMemoMutation.mutate,
    deleteMemo: deleteMemoMutation.mutate,
    patchMemo: patchMemoMutation.mutate,
  };
};
