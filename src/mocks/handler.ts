import { AdminApplicationForm } from './applicactionForm';
import { Applicants, FailList, PassList, PatchApplicantStatus } from './applicants';
import { Clubs, patchFavorite, popularClubs } from './clubList';

export const handlers = [
  popularClubs,
  Clubs,
  patchFavorite,
  Applicants,
  PatchApplicantStatus,
  PassList,
  FailList,
  AdminApplicationForm,
];
