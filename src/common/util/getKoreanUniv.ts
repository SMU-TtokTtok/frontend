export function getKoreanUniv(code: string): string {
  switch (code) {
    case 'GLOBAL_AREA':
      return '글로벌지역학부';
    case 'DESIGN':
      return '디자인대';
    case 'ENGINEERING':
      return '공대';
    case 'CONVERGENCE_TECHNOLOGY':
      return '융합기술대';
    case 'ARTS':
      return '예술대';
    default:
      return '없음';
  }
}
