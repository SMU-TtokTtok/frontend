export const FOOTER = {
  serviceName: '똑똑',
  informationUrl:
    'https://buttoned-hoof-999.notion.site/213243ce95268015a2a2e6faa07e8b95?source=copy_link',
} as const;

export const BREAKPOINTS = {
  mobile: 375,
  tablet: 768,
  // 데스크탑 breakpoint를 모르기 때문에 우선 임의로 설정 by형준
  desktop: 1024,
  largeDesktop: 1440,
} as const;

export const FILTER = {
  category: ['all', 'sport', 'culture', 'academic', 'etc'],
  recruit: ['all', 'recruit', 'notRecruit'],
  type: ['all', 'major', 'central', 'union'],
  sort: ['latest', 'popular', 'member'],
  grade: ['1', '2', '3', '4'],
  college: ['humanities', 'design', 'art', 'tech', 'engineering'],
} as const;

type FilterKey = keyof typeof FILTER;

export const FILTER_KO: Record<FilterKey, readonly string[]> = {
  category: ['전체', '스포츠', '문화', '학술', '기타'],
  recruit: ['전체', '모집중', '모집마감'],
  type: ['전체', '과동아리', '중앙동아리', '연합동아리'],
  sort: ['최신 등록 순', '인기도 순', '멤버 많은 수'],
  grade: ['1학년', '2학년', '3학년', '4학년'],
  college: ['인문대', '디자인대', '예술대', '융합기술대', '공대'],
};
