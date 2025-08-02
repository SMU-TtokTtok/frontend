export const convertToKor = (name: string): string => {
  switch (name) {
    case 'EVALUATING':
      return '평가중';
    case 'PASS':
      return '합격';
    case 'FAIL':
      return '불합격';
    case 'applies':
      return '서류';
    case 'interviews':
      return '면접';
    case 'SHORT_ANSWER':
      return '단답형';
    case 'LONG_ANSWER':
      return '서술형';
    case 'CHECKBOX':
      return '체크박스';
    case 'RADIO':
      return '객관식';
    case 'FILE':
      return '파일';
    case 'CENTRAL':
      return '중앙동아리';
    case 'DEPARTMENT':
      return '과동아리';
    case 'UNION':
      return '연합동아리';
    default:
      return name;
  }
};
