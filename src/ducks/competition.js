import { get, map, omit } from 'lodash';
import { message } from 'antd';
import { loadingStart, loadingStop } from 'Ducks/loading';
import {
  CREATE_COMPETITION_PATH,
  GET_COMPETITIONS_PATH,
  createPostHeader,
  createMultipleHeader,
} from 'Constants/fetch';

export const FETCH_CREATE_COMPETITION = 'FETCH_CREATE_COMPETITION';
export const FETCH_GET_COMPETITIONS = 'FETCH_GET_COMPETITIONS';
export const FETCH_GET_COMPETITIONS_SUCCESS = 'FETCH_GET_COMPETITIONS_SUCCESS';
export const FETCH_GET_COMPETITIONS_FAILURE = 'FETCH_GET_COMPETITIONS_FAILURE';

const competitionsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_GET_COMPETITIONS_SUCCESS:
      return action.payload;
    case FETCH_GET_COMPETITIONS_FAILURE:
    default:
      return state;
  }
};

export default competitionsReducer;

export const fetchCreateCompetition = competitionData => async dispatch => {
  try {
    dispatch(loadingStart(FETCH_CREATE_COMPETITION));
    const formData = new FormData();

    map(
      omit(competitionData, ['coverCompetition', 'documentCompetition']),
      (value, key) => {
        if(typeof value === 'object' || typeof value === 'number') {
          return formData.append(key, JSON.stringify(value));
        }
        return formData.append(key, value);
      }
    );

    if(get(competitionData, 'coverCompetition')) {
      formData.append('coverCompetition', get(competitionData, 'coverCompetition'));
    }

    if(get(competitionData, 'documentCompetition')) {
      formData.append('documentCompetition', get(competitionData, 'documentCompetition'));
    }

    const result = await fetch(CREATE_COMPETITION_PATH, createMultipleHeader(formData));

    if(result.status !== 200) throw new Error(result);
    
    message.success('Поздравляем! Вы только что создали соревнование.');
    dispatch(loadingStop(FETCH_CREATE_COMPETITION));
  } catch(e) {
    console.warn(e);
    message.warn(`
      Не удалось создать соренование.
      Повторите еще раз или обратитесь в службу поддержки.
    `);
    dispatch(loadingStop(FETCH_CREATE_COMPETITION));
  }
};

export const fetchGetCompetitions = () => async dispatch => {
  try {
    dispatch(loadingStart(FETCH_GET_COMPETITIONS));

    const responseCompetitions = await fetch(GET_COMPETITIONS_PATH, createPostHeader());

    if(responseCompetitions.status !== 200) throw new Error(responseCompetitions);

    const competitionsData = await responseCompetitions.json();

    dispatch(fetchGetCompetitionsSuccess(competitionsData));

    dispatch(loadingStop(FETCH_GET_COMPETITIONS));
  } catch(e) {
    console.warn(e);
    message.warn('Не удалось найти соревнования');
    dispatch(loadingStop(FETCH_GET_COMPETITIONS));
    dispatch(fetchGetCompetitionsFailure());
  }
};

const fetchGetCompetitionsSuccess = competitionsData => ({
  type: FETCH_GET_COMPETITIONS_SUCCESS,
  payload: competitionsData
});

const fetchGetCompetitionsFailure = () => ({
  type: FETCH_GET_COMPETITIONS_FAILURE
});