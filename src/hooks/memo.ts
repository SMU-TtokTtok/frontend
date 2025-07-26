import { useMutation, useQueryClient } from '@tanstack/react-query';
import { applicantKey } from './queries/key';
import { deleteMemo, patchMemo, postMemo } from '@/components/admin/applicants/api/applicants';

interface UsePostMemoParams {
  applicantId: number;
  content: string;
}

export const usePostMemo = () => {
  const queryClient = useQueryClient();
  const { applicantInfo } = applicantKey;

  const postMutation = useMutation({
    mutationFn: ({ applicantId, content }: UsePostMemoParams) => postMemo(applicantId, content),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [applicantInfo] });
    },
  });

  const handlePostMemo = ({ applicantId, content }: UsePostMemoParams) => {
    postMutation.mutate({ applicantId, content });
  };

  return {
    handlePostMemo,
  };
};

interface UseDeleteMemoParams {
  applicantId: number;
  memoId: string;
}

export const useDeleteMemo = () => {
  const queryClient = useQueryClient();
  const { applicantInfo } = applicantKey;

  const deleteMutation = useMutation({
    mutationFn: ({ applicantId, memoId }: UseDeleteMemoParams) => deleteMemo(applicantId, memoId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [applicantInfo] });
      alert('메모가 삭제되었습니다.');
    },
  });

  const handleDeleteMemo = ({ applicantId, memoId }: UseDeleteMemoParams) => {
    deleteMutation.mutate({ applicantId, memoId });
  };

  return {
    handleDeleteMemo,
  };
};

interface UsePatchMemoParams {
  applicantId: number;
  memoId: string;
  content: string;
}

export const usePatchMemo = () => {
  const queryClient = useQueryClient();
  const { applicantInfo } = applicantKey;

  const patchMutation = useMutation({
    mutationFn: ({ applicantId, memoId, content }: UsePatchMemoParams) =>
      patchMemo(applicantId, memoId, content),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [applicantInfo] });
      alert('메모가 수정되었습니다.');
    },
  });

  const handlePatchMemo = ({ applicantId, memoId, content }: UsePatchMemoParams) => {
    patchMutation.mutate({ applicantId, memoId, content });
  };

  return {
    handlePatchMemo,
  };
};

export const useMemoMutations = () => {
  const postMemoMutation = usePostMemo();
  const deleteMemoMutation = useDeleteMemo();
  const patchMemoMutation = usePatchMemo();

  return {
    postMemo: postMemoMutation.handlePostMemo,
    deleteMemo: deleteMemoMutation.handleDeleteMemo,
    patchMemo: patchMemoMutation.handlePatchMemo,
  };
};
