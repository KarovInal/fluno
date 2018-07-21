export const HOST = 'http://localhost:1337';

// AUTH PATH's
export const SIGN_IN_PATH      = `${HOST}/auth/login`;
export const SIGN_OUT_PATH     = `${HOST}/auth/logout`;
export const REGISTER_PATH     = `${HOST}/auth/register`;
export const AUTH_PATH         = `${HOST}/auth/check-auth`;

// TRAINER PATH's
export const EDIT_PROFILE_PATH = `${HOST}/trainer/update`;

// PUPIL PATH's
export const CREATE_PUPIL_PATH = `${HOST}/pupils/create`;

// DICTIONARY PATH's
export const DICTIONARY_PATH = `${HOST}/dictionary`;

export const createPostHeader = (body = {}) => ({
  method: 'POST',
  mode: 'cors',
  credentials: 'include',
  body: JSON.stringify(body)
});

export const createMultipleHeader = (body = {}) => ({
  method: 'POST',
  mode: 'cors',
  credentials: 'include',
  body
});
