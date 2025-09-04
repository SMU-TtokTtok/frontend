import { ROUTES } from './routes';
import applicants from '@/assets/clinical_notes.svg';
import applicants_selected from '@/assets/clinical_notes_selected.svg';
import applicantsform from '@/assets/edit_document.svg';
import applicantsform_selected from '@/assets/edit_document_selected.svg';
import clubinfo from '@/assets/fact_check.svg';
import clubinfo_selected from '@/assets/fact_check_selected.svg';
import clubMember from '@/assets/group.svg';
import clubMember_selectd from '@/assets/group_selected.svg';
export const BASE_FRONT_URL = 'https://www.ddock-ddock-smu.com';

export const FOOTER = {
  serviceName: '똑똑',
  informationUrl:
    'https://buttoned-hoof-999.notion.site/213243ce95268015a2a2e6faa07e8b95?source=copy_link',
  feedbackUrl:
    'https://docs.google.com/forms/d/e/1FAIpQLSdBUL6ckgf38pAz7TOHlXF-EdZbyQJVhPpuPFgLfu21OZ8TvA/viewform?usp=header',
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

export const FILTER_CONFIG = {
  category: [
    { value: 'null', label: '전체' },
    { value: 'SPORTS', label: '스포츠' },
    { value: 'ARTS', label: '예술' },
    { value: 'CULTURE', label: '문화' },
    { value: 'ACADEMIC', label: '학술' },
    { value: 'VOLUNTEER', label: '봉사' },
    { value: 'RELIGION', label: '종교' },
    { value: 'SOCIAL', label: '친목' },
    { value: 'ETC', label: '기타' },
  ],
  recruiting: [
    { value: 'null', label: '전체' },
    { value: 'true', label: '모집중' },
    { value: 'false', label: '모집마감' },
  ],
  type: [
    { value: 'null', label: '전체' },
    { value: 'CENTRAL', label: '중앙동아리' },
    { value: 'UNION', label: '연합동아리' },
    { value: 'DEPARTMENT', label: '과동아리' },
  ],
  sort: [
    { value: 'latest', label: '최신등록순' },
    { value: 'popular', label: '인기도순' },
    { value: 'member_count', label: '멤버많은수' },
  ],
  grades: [
    { value: 'FIRST_GRADE', label: '1학년' },
    { value: 'SECOND_GRADE', label: '2학년' },
    { value: 'THIRD_GRADE', label: '3학년' },
    { value: 'FOURTH_GRADE', label: '4학년' },
  ],
  clubUniv: [
    { value: 'GLOBAL_AREA', label: '글로벌인문대' },
    { value: 'DESIGN', label: '디자인대' },
    { value: 'ENGINEERING', label: '공대' },
    { value: 'CONVERGENCE_TECHNOLOGY', label: '융합기술대' },
    { value: 'ARTS', label: '예술대' },
  ],
};
