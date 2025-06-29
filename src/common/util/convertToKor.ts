export const convertToKor = (name: string): string => {
  switch (name) {
    case 'evaluating':
      return '평가중';
    case 'pass':
      return '합격';
    case 'fail':
      return '불합격';
    case 'document':
      return '서류';
    case 'interview':
      return '면접';
    default:
      return name;
  }
};
