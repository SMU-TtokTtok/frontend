import { useCallback, useEffect, useMemo, useRef } from 'react';
import type { UseFormGetValues } from 'react-hook-form';
import { GA_EVENTS } from '@/common/constants/gaEvents';
import type { Question, getTempData } from '@/common/model/form';
import type { ApplyFormData } from '@/components/apply/schema';
import { trackGAEvent } from '@/lib/ga';

interface UseApplyFormAnalyticsParams {
  clubId: string;
  formId?: string;
  questions?: Question[];
  tempData?: getTempData;
  getValues: UseFormGetValues<ApplyFormData>;
}

const hasValue = (value: unknown): boolean => {
  if (value === null || value === undefined) {
    return false;
  }

  if (typeof value === 'string') {
    return value.trim() !== '';
  }

  if (Array.isArray(value)) {
    return value.some((item: unknown) => item !== false && hasValue(item));
  }

  if (typeof FileList !== 'undefined' && value instanceof FileList) {
    return value.length > 0;
  }

  return true;
};

// 이 배열의 항목 수가 곧 기본 정보 필드 총 개수다 (완료율 계산에 사용).
const getBasicFieldValues = (values: ApplyFormData): unknown[] => [
  values.name,
  values.age,
  values.major,
  values.emailPrefix && values.emailDomain,
  values.phone,
  values.studentStatus,
  values.grade,
  values.gender,
];

const shouldTrackOnce = (trackedIds: Set<string>, formId: string | undefined): boolean => {
  if (!formId || trackedIds.has(formId)) {
    return false;
  }

  trackedIds.add(formId);
  return true;
};

export const useApplyFormAnalytics = ({
  clubId,
  formId,
  questions = [],
  tempData,
  getValues,
}: UseApplyFormAnalyticsParams) => {
  const trackedStartFormIds = useRef(new Set<string>());
  const trackedViewFormIds = useRef(new Set<string>());
  const trackedResumeFormIds = useRef(new Set<string>());
  const visitTempDataState = useRef<{ formId: string; hasTempData: boolean } | null>(null);

  // has_temp_data는 폼에 처음 진입했을 때의 임시저장 여부를 고정해서 보고해야 한다.
  // tempData는 이후 임시저장/재조회로 값이 바뀔 수 있으므로, formId가 바뀔 때만 다시 캡처한다.
  if (
    formId &&
    (!visitTempDataState.current || visitTempDataState.current.formId !== formId)
  ) {
    visitTempDataState.current = {
      formId,
      hasTempData: Boolean(tempData?.hasTempData),
    };
  }

  const hasTempData = visitTempDataState.current?.hasTempData ?? false;

  const baseParams = useMemo(
    () => ({
      club_id: clubId,
      form_id: formId,
      question_count: questions.length,
      has_temp_data: hasTempData,
    }),
    [clubId, formId, hasTempData, questions.length],
  );

  const getFormStateParams = useCallback(() => {
    const values = getValues();
    const basicFieldValues = getBasicFieldValues(values);
    const answeredBasicFieldCount = basicFieldValues.filter(hasValue).length;

    const answeredQuestionCount =
      values.questions?.filter((question) => hasValue(question.value)).length ?? 0;
    const requiredQuestionIds = new Set(
      questions.filter((question) => question.isEssential).map((question) => question.questionId),
    );
    const requiredAnsweredQuestionCount =
      values.questions?.filter(
        (question) => requiredQuestionIds.has(question.questionId) && hasValue(question.value),
      ).length ?? 0;

    const totalFieldCount = basicFieldValues.length + questions.length;
    const answeredFieldCount = answeredBasicFieldCount + answeredQuestionCount;
    const completionRate =
      totalFieldCount > 0 ? Math.round((answeredFieldCount / totalFieldCount) * 100) : 0;

    return {
      answered_basic_field_count: answeredBasicFieldCount,
      answered_question_count: answeredQuestionCount,
      required_answered_count: basicFieldValues.length + requiredAnsweredQuestionCount,
      required_total_count: basicFieldValues.length + requiredQuestionIds.size,
      completion_rate: completionRate,
    };
  }, [getValues, questions]);

  const trackWithCurrentState = useCallback(
    (eventName: string) => {
      trackGAEvent(eventName, {
        ...baseParams,
        ...getFormStateParams(),
      });
    },
    [baseParams, getFormStateParams],
  );

  const trackFormStart = useCallback(() => {
    if (!shouldTrackOnce(trackedStartFormIds.current, formId)) {
      return;
    }

    trackGAEvent(GA_EVENTS.APPLY_FORM_START, baseParams);
  }, [baseParams, formId]);

  const trackTempSaveAttempt = useCallback(() => {
    trackFormStart();
    trackWithCurrentState(GA_EVENTS.APPLY_TEMP_SAVE_ATTEMPT);
  }, [trackFormStart, trackWithCurrentState]);

  const trackTempSaveSuccess = useCallback(() => {
    trackWithCurrentState(GA_EVENTS.APPLY_TEMP_SAVE_SUCCESS);
  }, [trackWithCurrentState]);

  const trackSubmitAttempt = useCallback(() => {
    trackFormStart();
    trackWithCurrentState(GA_EVENTS.APPLY_SUBMIT_ATTEMPT);
  }, [trackFormStart, trackWithCurrentState]);

  const trackSubmitSuccess = useCallback(() => {
    trackWithCurrentState(GA_EVENTS.APPLY_SUBMIT_SUCCESS);
  }, [trackWithCurrentState]);

  useEffect(() => {
    if (!shouldTrackOnce(trackedViewFormIds.current, formId)) {
      return;
    }

    trackGAEvent(GA_EVENTS.APPLY_FORM_VIEW, baseParams);
  }, [baseParams, formId]);

  useEffect(() => {
    if (!tempData?.hasTempData || !shouldTrackOnce(trackedResumeFormIds.current, formId)) {
      return;
    }

    trackGAEvent(GA_EVENTS.APPLY_RESUME, baseParams);
  }, [baseParams, formId, tempData?.hasTempData]);

  return {
    trackFormStart,
    trackTempSaveAttempt,
    trackTempSaveSuccess,
    trackSubmitAttempt,
    trackSubmitSuccess,
  };
};
