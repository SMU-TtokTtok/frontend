import { Applicants, PatchApplicantStatus } from './applicants';
import { Clubs, patchFavorite, popularClubs } from './clubList';

export const handlers = [popularClubs, Clubs, patchFavorite, Applicants, PatchApplicantStatus];
