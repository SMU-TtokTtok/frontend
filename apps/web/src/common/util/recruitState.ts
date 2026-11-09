import { RecruitState } from '@/common/model/club';

const RECRUIT_STATES: readonly string[] = ['UPCOMING', 'OPEN', 'CLOSED'];

// 서버가 recruitState를 주면 그대로 쓰고, 없거나 모르는 값이면 recruiting으로 판단한다
export const toRecruitState = (
  recruitState: string | null | undefined,
  recruiting: boolean,
): RecruitState =>
  recruitState && RECRUIT_STATES.includes(recruitState)
    ? (recruitState as RecruitState)
    : recruiting
      ? 'OPEN'
      : 'CLOSED';
