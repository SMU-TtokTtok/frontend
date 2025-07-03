'use client';
import { useAdminForm } from '@/hooks/useAdminForm';
import * as S from './applicationForm.css';
import EmptyPage from './emptyPage';

function ApplicationFormPage() {
  const { data } = useAdminForm();

  if (!data || Object.keys(data).length === 0) {
    return <EmptyPage />;
  }
  return (
    <div className={S.formContainer}>
      <h3 className={S.title}>📋 지원폼 관리</h3>
      <div>{data.name}</div>
    </div>
  );
}

export default ApplicationFormPage;
