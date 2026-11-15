import { CustomHttpError } from '@/common/apis/apiClient';
import { HTTP_STATUS } from '@/common/constants/httpStatus';

const SERVER_MESSAGE_STATUSES: number[] = [
  HTTP_STATUS.BAD_REQUEST,
  HTTP_STATUS.NOT_FOUND,
  HTTP_STATUS.CONFLICT,
];

// 서버가 사용자용으로 보낸 details를 우선 보여주고, 없으면 fallback을 쓴다.
export const getErrorMessage = (error: unknown, fallback: string): string => {
  const hasUserFacingDetails =
    error instanceof CustomHttpError &&
    !!error.details &&
    SERVER_MESSAGE_STATUSES.includes(error.status);

  return hasUserFacingDetails ? (error.details ?? fallback) : fallback;
};
