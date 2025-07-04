type currentGrade = 1 | 2 | 3 | 4;

export interface ApplicationForm {
  id: number;
  name: string;
  age: number;
  major: string;
  email: string;
  phoneNumber: string;
  isRetake: boolean;
  currentGrade: currentGrade;
  gender: 'male' | 'female' | 'other';
  profileImageUrl?: string;
  selfIntroduction: string;
  supportReason: string;
  additionalNotes?: string;
}
