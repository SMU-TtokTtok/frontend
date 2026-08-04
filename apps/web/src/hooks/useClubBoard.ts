import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getClubBoardDetail } from '@/components/clubInfo/api/getClubBoards';
import {
  deleteClubBoard,
  patchClubBoard,
  postClubBoard,
} from '@/components/admin/clubInfo/clubBoard/api';
import { ClubBoardDetail, ClubBoardFormValues } from '@/common/model/clubBoard';
import { clubBoardKey } from './queries/key';

/** 썸네일을 눌렀을 때 상세 내용을 가져온다. boardId가 없으면 요청하지 않는다. */
export const useClubBoardDetail = (clubId: string, boardId: string | null) => {
  const { data, isLoading, isError } = useQuery<ClubBoardDetail>({
    queryKey: [...clubBoardKey.clubBoardDetail, clubId, boardId],
    queryFn: () => getClubBoardDetail(clubId, boardId!),
    enabled: Boolean(clubId && boardId),
  });

  return { data, isLoading, isError };
};

interface UseClubBoardMutationParams {
  clubId: string;
  onSuccess?: (action: 'create' | 'update' | 'delete') => void;
  onError?: (action: 'create' | 'update' | 'delete', error: Error) => void;
}

export const useClubBoardMutation = ({ clubId, onSuccess, onError }: UseClubBoardMutationParams) => {
  const queryClient = useQueryClient();

  const invalidateList = () => {
    queryClient.invalidateQueries({ queryKey: [...clubBoardKey.clubBoardList, clubId] });
  };

  const createMutation = useMutation({
    mutationFn: ({ values, thumbnail }: { values: ClubBoardFormValues; thumbnail: File }) =>
      postClubBoard(clubId, values, thumbnail),
    onSuccess: () => {
      invalidateList();
      onSuccess?.('create');
    },
    onError: (error) => {
      console.error('활동 생성 실패:', error);
      onError?.('create', error);
    },
  });

  const updateMutation = useMutation({
    mutationFn: ({
      boardId,
      values,
      thumbnail,
    }: {
      boardId: string;
      values: ClubBoardFormValues;
      thumbnail?: File | null;
    }) => patchClubBoard(clubId, boardId, values, thumbnail),
    onSuccess: (_, { boardId }) => {
      invalidateList();
      queryClient.invalidateQueries({
        queryKey: [...clubBoardKey.clubBoardDetail, clubId, boardId],
      });
      onSuccess?.('update');
    },
    onError: (error) => {
      console.error('활동 수정 실패:', error);
      onError?.('update', error);
    },
  });

  const deleteMutation = useMutation({
    mutationFn: (boardId: string) => deleteClubBoard(clubId, boardId),
    onSuccess: () => {
      invalidateList();
      onSuccess?.('delete');
    },
    onError: (error) => {
      console.error('활동 삭제 실패:', error);
      onError?.('delete', error);
    },
  });

  return {
    createBoard: createMutation.mutate,
    updateBoard: updateMutation.mutate,
    deleteBoard: deleteMutation.mutate,
    isSubmitting: createMutation.isPending || updateMutation.isPending,
    isDeleting: deleteMutation.isPending,
  };
};
