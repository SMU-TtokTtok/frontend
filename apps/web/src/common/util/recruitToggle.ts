import { RecruitState } from '@/common/model/club';

// 관리자 모집 버튼을 눌렀을 때 서버가 하는 일
// END: 모집 마감 / START: 모집 시작 / REACTIVATE: 활성 폼이 없어 가장 최근 폼을 마감 상태로 되살림
// EXPIRED: 마감일이 지나 다시 시작할 수 없음 (서버가 409로 거절)
export type RecruitToggleAction = 'END' | 'START' | 'REACTIVATE' | 'EXPIRED';

// today, applyDeadLine: 'yyyy-MM-dd'. 관리자 동아리 정보는 활성 폼이 없을 때만 날짜가 비어 있다
export const getRecruitToggleAction = (
  state: RecruitState,
  applyDeadLine: string | null | undefined,
  today: string,
): RecruitToggleAction => {
  if (state === 'OPEN' || state === 'UPCOMING') return 'END';
  if (!applyDeadLine) return 'REACTIVATE';
  return applyDeadLine < today ? 'EXPIRED' : 'START';
};

export const RECRUIT_TOGGLE_LABEL: Record<RecruitToggleAction, string> = {
  END: '지원 마감하기',
  START: '모집 시작하기',
  REACTIVATE: '모집 시작하기',
  EXPIRED: '모집 시작하기',
};

// 성공 뒤 다시 조회한 상태로 안내를 고른다. 되살린 폼은 마감 상태로 시작한다
// 시작일 전에 시작하면 서버는 스위치만 켜고 UPCOMING이 된다 (시작 알림 없음)
export const getRecruitToggleMessage = (action: RecruitToggleAction, nextState: RecruitState) => {
  if (nextState === 'UPCOMING') return '모집 예정으로 바뀌었습니다. 시작일부터 지원을 받아요.';
  if (nextState === 'OPEN') return '모집이 시작되었습니다';
  if (action === 'REACTIVATE') {
    return "이전 지원 폼을 불러왔습니다. 모집 기간을 확인한 뒤 '모집 시작하기'를 눌러 주세요.";
  }
  return '지원마감이 완료되었습니다';
};
