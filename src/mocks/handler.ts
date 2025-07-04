import { Applicants, FailList, PassList, PatchApplicantStatus } from './applicants';
import { Clubs, patchFavorite, popularClubs } from './clubList';
import { getClubInfo, patchClubInfo, patchRecruiting } from './clubInfo/clubInfo';
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
];
