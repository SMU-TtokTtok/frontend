import { AdminApplicationForm } from './applicactionForm';
import { Applicants, FailList, PassList, PatchApplicantStatus } from './applicants';
import { Clubs, patchFavorite, popularClubs } from './clubList';
import { AdminLogin } from './auth';
import { getClubInfo, patchClubInfo, patchRecruiting } from './clubInfo/adminClubInfo';
import { getUserClubInfo } from './clubInfo/userClubInfo';

export const handlers = [
  popularClubs,
  Clubs,
  patchFavorite,
  Applicants,
  PatchApplicantStatus,
  getClubInfo,
  patchClubInfo,
  patchRecruiting,
  getUserClubInfo,
  PassList,
  FailList,
  AdminApplicationForm,
  AdminLogin,
];
