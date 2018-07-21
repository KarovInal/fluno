import { message } from 'antd';
import { map } from 'lodash';
import { loadingStart, loadingStop } from 'Ducks/loading';
import {
  CREATE_PUPIL_PATH,
  createMultipleHeader
} from 'Constants/fetch';

export const FETCH_CREATE_PUPIL = 'FETCH_CREATE_PUPIL';

export const createPupil = pupilData => async dispatch => {
  try {
    dispatch(loadingStart(FETCH_CREATE_PUPIL));

    const formData = new FormData();
    map(pupilData, (value, key) => formData.append(key, value));

    await fetch(CREATE_PUPIL_PATH, createMultipleHeader(formData));
  
    dispatch(loadingStop(FETCH_CREATE_PUPIL));
    message.success('Ученик успешно добавлен.');
  } catch(e) {
    console.warn(e);
    message.error('Ошибка загрузки ученика.');
    dispatch(loadingStop(FETCH_CREATE_PUPIL));
  }
};
