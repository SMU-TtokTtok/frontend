export function convertGradeArrayToString(grades: string[]): string {
  if (!grades || grades.length === 0) return '';

  const gradeMap: Record<string, string> = {
    FIRST_GRADE: '1',
    SECOND_GRADE: '2',
    THIRD_GRADE: '3',
    FOURTH_GRADE: '4',
  };

  const convertedGrades = grades.map((grade) => gradeMap[grade]).filter(Boolean);
  const sortedGrades = convertedGrades.sort((a, b) => parseInt(a) - parseInt(b));
  return sortedGrades.join(', ') + '학년';
}
