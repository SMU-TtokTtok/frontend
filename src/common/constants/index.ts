import { ROUTES } from './routes';
import applicants from '@/assets/clinical_notes.svg';
import applicants_selected from '@/assets/clinical_notes_selected.svg';
import applicantsform from '@/assets/edit_document.svg';
import applicantsform_selected from '@/assets/edit_document_selected.svg';
import clubinfo from '@/assets/fact_check.svg';
import clubinfo_selected from '@/assets/fact_check_selected.svg';
import clubMember from '@/assets/group.svg';
import clubMember_selectd from '@/assets/group_selected.svg';

export const FOOTER = {
  serviceName: '똑똑',
  informationUrl:
    'https://buttoned-hoof-999.notion.site/213243ce95268015a2a2e6faa07e8b95?source=copy_link',
} as const;

export const BREAKPOINTS = {
  mobile: 375,
  tablet: 769,
  desktop: 1024,
  largeDesktop: 1439,
} as const;

export const ADMIN_SIDEBAR_ITEMS = [
  { label: '동아리 정보관리', href: ROUTES.ADMIN, img: clubinfo, seletedImg: clubinfo_selected },
  {
    label: '부원 명단',
    href: ROUTES.ADMIN_CLUB_MEMBER,
    img: clubMember,
    seletedImg: clubMember_selectd,
  },
  {
    label: '지원폼 관리',
    href: ROUTES.ADMIN_APPLICATIONS_FORM,
    img: applicantsform,
    seletedImg: applicantsform_selected,
  },
  {
    label: '지원자 관리',
    href: ROUTES.ADMIN_APPLICATIONS,
    img: applicants,
    seletedImg: applicants_selected,
  },
] as const;

export const FILTER = {
  category: ['all', 'sport', 'culture', 'academic', 'service', 'religion', 'etc'],
  recruit: ['all', 'recruit', 'notRecruit'],
  type: ['all', 'major', 'central', 'union'],
  sort: ['latest', 'popular', 'member'],
  grade: ['1', '2', '3', '4'],
  college: ['humanities', 'design', 'art', 'tech', 'engineering'],
} as const;

type FilterKey = keyof typeof FILTER;

export const FILTER_KO: Record<FilterKey, readonly string[]> = {
  category: ['전체', '스포츠', '문화', '학술', '봉사', '종교', '기타'],
  recruit: ['전체', '모집중', '모집마감'],
  type: ['전체', '과동아리', '중앙동아리', '연합동아리'],
  sort: ['최신 등록 순', '인기도 순', '멤버 많은 수'],
  grade: ['1학년', '2학년', '3학년', '4학년'],
  college: ['인문대', '디자인대', '예술대', '융합기술대', '공대'],
};

export const LOGIN_ERRORS = {
  adminLogin: '올바른 아이디를 입력해주세요.',
  adminPassword: '올바른 비밀번호를 입력해주세요.',
};
