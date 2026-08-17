export const GA_EVENTS = {
  GOOGLE_LOGIN_CLICK: 'google_login_click',
  GOOGLE_SIGNUP_START: 'google_signup_start',
  LOGIN: 'login',
  SIGN_UP: 'sign_up',

  EMAIL_REQUEST: 'email_request',
  EMAIL_SUCCESS: 'email_success',
  EMAIL_FAIL: 'email_fail',
  EMAIL_ERROR: 'email_error',
  VERIFY_CODE_ATTEMPT: 'verify_code_attempt',
  VERIFY_CODE_SUCCESS: 'verify_code_success',
  VERIFY_CODE_FAIL: 'verify_code_fail',
  VERIFY_CODE_ERROR: 'verify_code_error',
  SIGNUP_SUBMIT_ATTEMPT: 'signup_submit_attempt',
  SIGNUP_SUBMIT_FAIL: 'signup_submit_fail',

  CLUB_SIGNUP_START: 'club_signup_start',
  CLUB_SIGNUP_SUBMIT: 'club_signup_submit',
  CLUB_SIGNUP_SUCCESS: 'club_signup_success',

  APPLY_FORM_VIEW: 'apply_form_view',
  APPLY_FORM_START: 'apply_form_start',
  APPLY_TEMP_SAVE_ATTEMPT: 'apply_temp_save_attempt',
  APPLY_TEMP_SAVE_SUCCESS: 'apply_temp_save_success',
  APPLY_RESUME: 'apply_resume',
  APPLY_SUBMIT_ATTEMPT: 'apply_submit_attempt',
  APPLY_SUBMIT_SUCCESS: 'apply_submit_success',
} as const;

export const GA_METHODS = {
  GOOGLE: 'google',
  SCHOOL_EMAIL: 'school_email',
} as const;
