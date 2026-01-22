export function getKoreanType(type: string): string {
  switch (type) {
    case 'CENTRAL':
      return '중앙';
    case 'UNION':
      return '연합';
    case 'DEPARTMENT':
      return '학과';
    default:
      return '없음';
  }
}
