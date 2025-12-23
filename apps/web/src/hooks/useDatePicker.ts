'use client';

import { saveToSession } from '@/common/util/sessionStorageUtil';
import { format } from 'date-fns';
import { useState } from 'react';

type TargetField = 'start' | 'end' | null;

export function useDatePicker(type: 'recruit' | 'interview') {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
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
