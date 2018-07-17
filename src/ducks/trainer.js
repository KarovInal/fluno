import { loadingStart, loadingStop } from 'Ducks/loading';

export const FETCH_SIGN_IN = 'FETCH_SIGN_IN';
export const FETCH_SIGN_OUT = 'FETCH_SIGN_OUT';
export const SET_TRAINER_TO_STATE = 'SET_TRAINER_TO_STATE';
export const FETCH_AUTH_STATE_CHANGE = 'FETCH_AUTH_STATE_CHANGE';

const defaultState = null;

const trainerReducer = (state = defaultState, action) => {
  switch(action.type) {
    case SET_TRAINER_TO_STATE:
      return action.payload.trainer;
    default:
      return state;
  }
};
export default trainerReducer;

export const signIn = values => async dispatch => {
  try {
    dispatch(loadingStart(FETCH_SIGN_IN));

    const result = await fetch('http://localhost:1337/auth/login', {
      method: 'POST',
      mode: 'no-cors',
      credentials: 'include',
      body: JSON.stringify(values)
    });

    console.log(result);

    dispatch(loadingStop(FETCH_SIGN_IN));
  } catch(e) {
    console.warn(e);
    dispatch(loadingStop(FETCH_SIGN_IN));
  }
};

export const signOut = () => async dispatch => {
  try {
    dispatch(loadingStart(FETCH_SIGN_OUT));

    dispatch(loadingStop(FETCH_SIGN_OUT));
  } catch(e) {
    console.warn(e);
    dispatch(loadingStop(FETCH_SIGN_OUT));
  }
};

export const fetchRegistration = values => async dispatch => {
  try {
    const result = await fetch('http://localhost:1337/auth/register', {
      method: 'POST',
      mode: 'no-cors',
      credentials: 'include',
      body: JSON.stringify(values)
    });

    console.log(result.body);
  } catch(e) {

  }
};

export const setTrainerToState = trainer => ({
  type: SET_TRAINER_TO_STATE,
  payload: {
    trainer
  }
});
