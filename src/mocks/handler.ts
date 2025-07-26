import { AdminApplicationForm, patchApplicantForm, postApplicantForm } from './applicactionForm';
import {
  ApplicantInfo,
  Applicants,
  ApplicantSearch,
  DeleteMemo,
  FailList,
  PassList,
  PatchApplicantStatus,
  PatchMemo,
  PostMemo,
} from './applicants';
import { Clubs, getSearchList, patchFavorite, popularClubs } from './clubList';
import { AdminLogin } from './auth';
import { getClubInfo, patchClubInfo, patchRecruiting } from './clubInfo/adminClubInfo';
import { getUserClubInfo } from './clubInfo/userClubInfo';
import { emailCheckHandler, verifyResetCodeHandler, resetPasswordHandler } from './password';
import { userLoginHandler, userSignupHandler, userEmailPostHandler } from './userAuth';
import { getUserForm } from './userForm/userForm';

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
  emailCheckHandler,
  verifyResetCodeHandler,
  resetPasswordHandler,
  userLoginHandler,
  userSignupHandler,
  userEmailPostHandler,
  getSearchList,
  postApplicantForm,
  getUserForm,
  patchApplicantForm,
  ApplicantInfo,
  PostMemo,
  PatchMemo,
  DeleteMemo,
];
