import { grades } from '@/components/admin/applicants/api/applicants';
import { TagVariant } from '../ui/tag/tag.css';

export const getGradeStyle = (grade: grades): TagVariant => {
  switch (grade) {
    case 'FIRST_GRADE':
      return 'light_blue';
    case 'SECOND_GRADE':
      return 'blue';
    case 'THIRD_GRADE':
      return 'navy';
    case 'FOURTH_GRADE':
      return 'deep_navy';
    default:
      return 'default';
  }
};

export const getGradeStyle2 = (grade: string): TagVariant => {
  switch (grade) {
    case 'FIRST_GRADE':
      return 'light_blue';
    case 'SECOND_GRADE':
      return 'blue';
    case 'THIRD_GRADE':
      return 'navy';
    case 'FOURTH_GRADE':
      return 'deep_navy';
    default:
      return 'default';
  }
};
