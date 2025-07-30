export function getKoreanCategory(type: string): string {
  switch (type) {
    case 'VOLUNTEER':
      return '봉사';
    case 'CULTURE':
      return '문화';
    case 'ACADEMIC':
      return '학술';
    case 'SPORTS':
      return '체육';
    case 'RELIGION':
      return '종교';
    case 'ARTS':
      return '예술';
    case 'SOCIAL':
      return '친목';
    case 'ETC':
      return '기타';
    default:
      return '알 수 없음';
  }
}
