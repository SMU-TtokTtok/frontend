import { AdminApplicationForm } from './applicactionForm';
import {
  Applicants,
  ApplicantSearch,
  FailList,
  PassList,
  PatchApplicantStatus,
} from './applicants';
import { Clubs, patchFavorite, popularClubs } from './clubList';
import { AdminLogin } from './auth';
import { getClubInfo, patchClubInfo, patchRecruiting } from './clubInfo/adminClubInfo';
import { getUserClubInfo } from './clubInfo/userClubInfo';

export const handlers = [
  popularClubs,
  Clubs,
  AdminApplicationForm,
  patchFavorite,
  ApplicantSearch,
  Applicants,
  PatchApplicantStatus,
  getClubInfo,
  patchClubInfo,
  patchRecruiting,
  getUserClubInfo,
  PassList,
  FailList,
  AdminLogin,
];
