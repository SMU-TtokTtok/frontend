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
  PutConnectApplicant,
  PostFinishForm,
} from './applicants';
import { Clubs, getSearchList, patchFavorite, popularClubs } from './clubList';
import { AdminLogin, AdminLogout, AdminProfile, AdminRefresh } from './auth';
import {
  getClubInfo,
  patchClubInfo,
  patchRecruiting,
  postImage,
  getImage,
} from './clubInfo/adminClubInfo';
import { getUserClubInfo } from './clubInfo/userClubInfo';
import { emailCheckHandler, verifyResetCodeHandler, resetPasswordHandler } from './password';
import { userLoginHandler, userSignupHandler, userEmailPostHandler } from './userAuth';
import { getUserForm, postUserForm } from './userForm/userForm';
import {
  getGradeCount,
  getSearchMembers,
  deleteClubMember,
  patchClubMember,
  postClubMember,
  getClubMember,
} from './clubMember';
import { postMessage } from './message';
import { favortesClubs, appliedClubs, searchClubs, popularTotalClubs } from './userClubs';

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
  getGradeCount,
  getSearchMembers,
  patchApplicantForm,
  ApplicantInfo,
  PostMemo,
  PatchMemo,
  DeleteMemo,
  PutConnectApplicant,
  PostFinishForm,
  AdminRefresh,
  deleteClubMember,
  patchClubMember,
  postClubMember,
  AdminProfile,
  AdminLogout,
  patchClubInfo,
  postImage,
  getImage,
  postUserForm,
  postMessage,
  favortesClubs,
  appliedClubs,
  searchClubs,
  popularTotalClubs,
  getClubMember,
];
