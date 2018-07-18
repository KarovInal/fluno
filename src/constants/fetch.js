export const HOST = 'http://localhost:1337';

export const SIGN_IN_PATH  = `${HOST}/auth/login`;
export const SIGN_OUT_PATH = `${HOST}/auth/logout`;
export const REGISTER_PATH = `${HOST}/auth/register`;
export const AUTH_PATH     = `${HOST}/auth/check-auth`;

export const createPostHeader = (body = {}) => ({
  method: 'POST',
  mode: 'cors',
  credentials: 'include',
  body: JSON.stringify(body)
});
