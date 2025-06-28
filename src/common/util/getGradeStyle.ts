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
