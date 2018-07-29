import { map, omit, get } from 'lodash';
import { message } from 'antd';
import { loadingStart, loadingStop } from './loading';
import {
  AUTH_PATH,
  SIGN_IN_PATH,
  REGISTER_PATH,
  SIGN_OUT_PATH,
  EDIT_PROFILE_PATH,
  createPostHeader,
  createMultipleHeader,
} from 'Constants/fetch';

export const FETCH_AUTH = 'FETCH_AUTH';
export const FETCH_SIGN_IN = 'FETCH_SIGN_IN';
export const FETCH_SIGN_OUT = 'FETCH_SIGN_OUT';
export const FETCH_REGISTER = 'FETCH_REGISTER';
export const FETCH_EDIT_PROFILE = 'FETCH_EDIT_PROFILE';
export const SET_TRAINER_TO_STATE = 'SET_TRAINER_TO_STATE';
export const REMOVE_TRAINER_FROM_STATE = 'REMOVE_TRAINER_FROM_STATE';

const defaultState = null;

const trainerReducer = (state = defaultState, action) => {
  switch(action.type) {
    case SET_TRAINER_TO_STATE:
      return action.payload.trainer;
    case REMOVE_TRAINER_FROM_STATE:
      return {};
    default:
      return state;
  }
};
export default trainerReducer;

export const signIn = values => async dispatch => {
  try {
    dispatch(loadingStart(FETCH_SIGN_IN));

    const result = await fetch(SIGN_IN_PATH, createPostHeader(values));

    if(result.status !== 200) throw new Error(result);
    
    const trainer = await result.json();

    dispatch(setTrainerToState(trainer));
    dispatch(loadingStop(FETCH_SIGN_IN));
  } catch(e) {
    console.log(e);
    message.error('Ошибка авторизации.');
    dispatch(loadingStop(FETCH_SIGN_IN));
  }
};

export const signOut = () => async dispatch => {
  try {
    dispatch(loadingStart(FETCH_SIGN_OUT));

    await fetch(SIGN_OUT_PATH, createPostHeader());

    dispatch({ type: REMOVE_TRAINER_FROM_STATE });

    dispatch(loadingStop(FETCH_SIGN_OUT));
  } catch(e) {
    console.warn(e);
    dispatch(loadingStop(FETCH_SIGN_OUT));
  }
};

export const fetchRegistration = values => async dispatch => {
  try {
    dispatch(loadingStart(FETCH_REGISTER));

    const result = await fetch(REGISTER_PATH, createPostHeader(values));
    const trainer = await result.json();

    dispatch(setTrainerToState(trainer));
    dispatch(loadingStop(FETCH_REGISTER));
  } catch(e) {
    console.warn(e);
    dispatch(loadingStop(FETCH_REGISTER));
  }
};

export const checkAuth = () => async dispatch => {
  try {
    dispatch(loadingStart(FETCH_AUTH));

    const result = await fetch(AUTH_PATH, createPostHeader());
    const trainer = await result.json();

    dispatch(setTrainerToState(trainer));
    dispatch(loadingStop(FETCH_AUTH));
  } catch(e) {
    console.warn(e);
    dispatch(setTrainerToState({}));
    dispatch(loadingStop(FETCH_AUTH));
  }
};

export const editProfile = profileData => async dispatch => {
  try {
    dispatch(loadingStart(FETCH_EDIT_PROFILE));

    const formData = new FormData();

    map(omit(profileData, 'photo'), (value, key) => formData.append(key, value));

    if(get(profileData, 'photo')) {
      formData.append('photo', get(profileData, 'photo'));
    }

    await fetch(EDIT_PROFILE_PATH, createMultipleHeader(formData));

    message.success('Данные успешно обновлены.');
    dispatch(loadingStop(FETCH_EDIT_PROFILE));
  } catch(e) {
    message.error('Произошла ошибка при сохранении.');
    console.warn(e);
    dispatch(setTrainerToState({}));
    dispatch(loadingStop(FETCH_EDIT_PROFILE));
  }
};

export const setTrainerToState = trainer => ({
  type: SET_TRAINER_TO_STATE,
  payload: {
    trainer
  }
});
