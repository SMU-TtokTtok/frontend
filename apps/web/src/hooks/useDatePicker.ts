'use client';

import { loadFromSession, saveToSession } from '@/common/util/sessionStorageUtil';
import { format, parseISO } from 'date-fns';
import { useState } from 'react';

type TargetField = 'start' | 'end' | null;

const loadDate = (key: string) => {
  const value = loadFromSession<string>(key);
  return value ? parseISO(value) : null;
};

export function useDatePicker(type: 'recruit' | 'interview') {
  // 3단계에서 돌아오면 세션에 저장한 날짜를 다시 보여준다
  const [startDate, setStartDate] = useState<Date | null>(() => loadDate(`${type}StartDate`));
  const [endDate, setEndDate] = useState<Date | null>(() => loadDate(`${type}EndDate`));
  const [targetField, setTargetField] = useState<TargetField>(null);

  const openCalendar = (field: TargetField) => setTargetField(field);
  const closeCalendar = () => setTargetField(null);

  const handleSelectWithSession = (date?: Date) => {
    if (!date) return;

    if (targetField === 'start') {
      setStartDate(date);
      saveToSession(`${type}StartDate`, format(date, 'yyyy-MM-dd'));
    } else if (targetField === 'end') {
      setEndDate(date);
      saveToSession(`${type}EndDate`, format(date, 'yyyy-MM-dd'));
    }

    closeCalendar();
  };

  return {
    startDate,
    endDate,
    targetField,
    openCalendar,
    closeCalendar,
    handleSelectWithSession,
  };
}
