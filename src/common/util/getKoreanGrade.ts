export const getKoreanGrade = (grade: string): string => {
  switch (grade) {
    case 'FIRST_GRADE':
      return '1학년';
    case 'SECOND_GRADE':
      return '2학년';
    case 'THIRD_GRADE':
      return '3학년';
    case 'FOURTH_GRADE':
      return '4학년';
    default:
      return grade;
  }
};
