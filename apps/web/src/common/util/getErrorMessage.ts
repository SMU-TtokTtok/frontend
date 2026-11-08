import { CustomHttpError } from '@/common/apis/apiClient';

const SERVER_MESSAGE_STATUSES = [400, 404, 409];

// 서버가 사용자용으로 보낸 details를 우선 보여주고, 없으면 fallback을 쓴다.
export const getErrorMessage = (error: unknown, fallback: string) =>
  error instanceof CustomHttpError &&
  error.details &&
  SERVER_MESSAGE_STATUSES.includes(error.status)
    ? error.details
    : fallback;
