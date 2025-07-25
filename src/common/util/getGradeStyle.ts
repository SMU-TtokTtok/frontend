import { TagVariant } from '../ui/tag/tag.css';

export const getGradeStyle = (grade: number): TagVariant => {
  switch (grade) {
    case 1:
      return 'light_blue';
    case 2:
      return 'blue';
    case 3:
      return 'navy';
    case 4:
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
