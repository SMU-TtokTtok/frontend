'use client';
import Image from 'next/image';
import { format, parseISO } from 'date-fns';
import { ko } from 'date-fns/locale';
import 'react-day-picker/dist/style.css';
import { DayPicker } from 'react-day-picker';
import { useDatePicker } from '@/hooks/useDatePicker';
import { useOutsideClick } from '@/hooks/useOutsideClick';
import { loadFromSession } from '@/common/util/sessionStorageUtil';
import { getMaxRecruitEndDate } from '@/common/util/recruitPeriod';
import * as S from './step2.css';
import calendarIcon from '@/assets/calendar.svg';
import { RecruitData } from '.';

interface InputDateProps {
  isStartDate: boolean;
  type: 'recruit' | 'interview';
  handleRecruitData?: (key: keyof RecruitData, value: string | null) => void;
}

function InputDate({ isStartDate, type, handleRecruitData }: InputDateProps) {
  const { startDate, endDate, targetField, openCalendar, handleSelectWithSession, closeCalendar } =
    useDatePicker(type);
  const handleCloseCalendar = () => {
    if (targetField) {
      closeCalendar();
    }
  };
  const calendarRef = useOutsideClick(handleCloseCalendar);
  const selectedDate = isStartDate ? startDate : endDate;
  // 모집 마감일은 시작일부터 3개월 뒤 같은 날까지만 고를 수 있다
  const recruitStart = loadFromSession<string>('recruitStartDate');
  const disabledDays =
    type === 'recruit' && !isStartDate && recruitStart
      ? [
          { before: parseISO(recruitStart) },
          { after: getMaxRecruitEndDate(parseISO(recruitStart)) },
        ]
      : undefined;

  const handleSelect = (date?: Date) => {
    if (!date) return;

    if (isStartDate) {
      handleSelectWithSession(date);
      handleRecruitData?.('recruitStartDate', format(date, 'yyyy-MM-dd'));
    } else {
      handleSelectWithSession(date);
      handleRecruitData?.('recruitEndDate', format(date, 'yyyy-MM-dd'));
    }
  };

  return (
    <div
      className={S.inputDateContainer}
      onClick={() => openCalendar(isStartDate ? 'start' : 'end')}
    >
      <input
        readOnly
        value={selectedDate ? format(selectedDate, 'yyyy.MM.dd') : ''}
        placeholder={isStartDate ? '시작일' : '종료일'}
        className={S.datePickerInput}
      />
      <div className={S.imgBox}>
        <Image src={calendarIcon} alt="Calendar Icon" width={24} height={24} />
      </div>

      {targetField && (
        <div ref={calendarRef} className={S.calendarContainer}>
          <DayPicker
            mode="single"
            selected={targetField === 'start' ? startDate! : endDate!}
            onSelect={handleSelect}
            disabled={disabledDays}
            locale={ko}
            numberOfMonths={1}
            className="custom-calendar"
            showOutsideDays
          />
        </div>
      )}
    </div>
  );
}

export default InputDate;
