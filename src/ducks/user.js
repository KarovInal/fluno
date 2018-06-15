import { auth, googleAuthProvider } from 'Firebase/firebase';
import { loadingStart, loadingStop } from 'Ducks/loading';

export const FETCH_SIGN_IN = 'FETCH_SIGN_IN';
export const FETCH_SIGN_OUT = 'FETCH_SIGN_OUT';
export const SET_USER_TO_STATE = 'SET_USER_TO_STATE';
export const FETCH_AUTH_STATE_CHANGE = 'FETCH_AUTH_STATE_CHANGE';

const defaultState = null;

const userReducer = (state = defaultState, action) => {
  switch(action.type) {
    case SET_USER_TO_STATE:
      return action.payload.user;
    default:
      return state;
  }
};
export default userReducer;

export const signIn = provider => async dispatch => {
  try {
    dispatch(loadingStart(FETCH_SIGN_IN));

    await auth.signInWithPopup(provider);

    dispatch(loadingStop(FETCH_SIGN_IN));
  } catch(e) {
    console.warn(e);
    dispatch(loadingStop(FETCH_SIGN_IN));
  }
};

export const signOut = () => async dispatch => {
  try {
    dispatch(loadingStart(FETCH_SIGN_OUT));

    await auth.signOut();

    dispatch(loadingStop(FETCH_SIGN_OUT));
  } catch(e) {
    console.warn(e);
    dispatch(loadingStop(FETCH_SIGN_OUT));
  }
};

export const setUserToState = user => ({
  type: SET_USER_TO_STATE,
  payload: {
    user
  }
});
