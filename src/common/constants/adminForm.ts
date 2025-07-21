import { ApplyFormField } from '../model/applicationForm';

export const templateFields: Record<string, ApplyFormField> = {
  SELF_INTRODUCTION: {
    title: '자기소개',
    subTitle: '본인을 간략하게 소개해주세요.',
    questionType: 'LONG_ANSWER',
    isEssential: false,
    content: [''],
  },
  MOTIVATION: {
    title: '지원동기',
    subTitle: '왜 이 동아리에 지원하게 되었는지 작성해주세요.',
    questionType: 'LONG_ANSWER',
    isEssential: false,
    content: [''],
  },
  CLUB_ACTIVITY: {
    title: '동아리에서 해보고 싶은 활동',
    subTitle: '하고 싶은 활동이 있다면 자유롭게 적어주세요.',
    questionType: 'LONG_ANSWER',
    isEssential: false,
    content: [''],
  },
};
