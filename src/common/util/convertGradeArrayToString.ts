export function convertGradeArrayToString(grades: number[]): string {
  if (!grades || grades.length === 0) return '';
  return grades.join(', ') + '학년';
}
