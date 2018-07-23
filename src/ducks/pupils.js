import { message } from 'antd';
import { get, map, omit } from 'lodash';
import { loadingStart, loadingStop } from 'Ducks/loading';
import {
  CREATE_PUPIL_PATH,
  FETCH_SELF_PUPILS_PATH,
  FETCH_UPDATE_PUPIL_PATH,
  FETCH_DELETE_PUPIL_PATH,
  createPostHeader,
  createMultipleHeader,
} from 'Constants/fetch';

export const FETCH_CREATE_PUPIL = 'FETCH_CREATE_PUPIL';
export const FETCH_SELF_PUPILS = 'FETCH_SELF_PUPILS';
export const FETCH_UPDATE_PUPIL = 'FETCH_UPDATE_PUPIL';
export const FETCH_DELETE_PUPIL = 'FETCH_DELETE_PUPIL';
export const FETCH_PUPILS_SUCCESS = 'FETCH_PUPILS_SUCCESS';
export const FETCH_PUPILS_FAILURE = 'FETCH_PUPILS_FAILURE';

const pupilsReducer = (state = [], action) => {
  switch(action.type) {
    case FETCH_PUPILS_SUCCESS:
      return action.payload;
    case FETCH_PUPILS_FAILURE:
    default:
      return state;
  }
}
export default pupilsReducer;

export const createPupil = pupilData => async dispatch => {
  try {
    dispatch(loadingStart(FETCH_CREATE_PUPIL));

    const formData = new FormData();

    map(omit(pupilData, 'avatar'), (value, key) => formData.append(key, value));

    if(get(pupilData, 'avatar')) {
      formData.append('avatar', get(pupilData, 'avatar'));
    }

    await fetch(CREATE_PUPIL_PATH, createMultipleHeader(formData));
  
    dispatch(loadingStop(FETCH_CREATE_PUPIL));
    message.success('Ученик успешно добавлен.');
  } catch(e) {
    console.warn(e);
    message.error('Ошибка загрузки ученика.');
    dispatch(loadingStop(FETCH_CREATE_PUPIL));
  }
};

export const fetchSelfPupils = () => async dispatch => {
  try {
    dispatch(loadingStart(FETCH_SELF_PUPILS));

    const pupilsResult = await fetch(FETCH_SELF_PUPILS_PATH, createPostHeader());
    const pupilsData = await pupilsResult.json();

    dispatch(fetchPupilsSuccess(pupilsData));
    dispatch(loadingStop(FETCH_SELF_PUPILS));
  } catch(e) {
    console.warn(e);
    message.error('Не удалось загрузить учеников.');
    dispatch(fetchPupilsFailure());
    dispatch(loadingStop(FETCH_SELF_PUPILS));
  }
}

export const updatePupil = pupilData => async dispatch => {
  try {
    dispatch(loadingStart(FETCH_UPDATE_PUPIL));

    const formData = new FormData();

    map(omit(pupilData, 'avatar'), (value, key) => formData.append(key, value));

    if(get(pupilData, 'avatar')) {
      formData.append('avatar', get(pupilData, 'avatar'));
    }

    await fetch(FETCH_UPDATE_PUPIL_PATH, createMultipleHeader(formData));
  
    dispatch(loadingStop(FETCH_UPDATE_PUPIL));
    message.success('Ученик успешно обновлен.');
  } catch(e) {
    console.warn(e);
    message.error('Ошибка обновления ученика.');
    dispatch(loadingStop(FETCH_UPDATE_PUPIL));
  }
};

export const deletePupil = pupilID => async dispatch => {
  try {
    dispatch(loadingStart(FETCH_DELETE_PUPIL));

    await fetch(FETCH_DELETE_PUPIL_PATH, createPostHeader({ pupilID }))

    dispatch(loadingStart(FETCH_DELETE_PUPIL));
  } catch(e) {
    console.warn(e);
    message.error('Не удалось удалить ученика.');
    dispatch(loadingStop(FETCH_DELETE_PUPIL));
  }
};

export const fetchPupilsSuccess = pupilsData => ({
  type: FETCH_PUPILS_SUCCESS,
  payload: pupilsData
});

export const fetchPupilsFailure = () => ({
  type: FETCH_PUPILS_FAILURE
});