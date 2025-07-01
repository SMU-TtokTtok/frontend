import { Applicants, PatchApplicantStatus } from './applicants';
import { Clubs, patchFavorite, popularClubs } from './clubList';
import { getClubInfo, patchClubInfo, patchRecruiting } from './clubInfo/clubInfo';

export const handlers = [
  popularClubs,
  Clubs,
  patchFavorite,
  Applicants,
  PatchApplicantStatus,
  getClubInfo,
  patchClubInfo,
  patchRecruiting,
];
