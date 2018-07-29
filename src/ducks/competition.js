import { get, map, omit } from 'lodash';
import { message } from 'antd';
import { CREATE_COMPETITION_PATH, createMultipleHeader } from 'Constants/fetch';
import { loadingStart, loadingStop } from 'Ducks/loading';

export const FETCH_CREATE_COMPETITION = 'FETCH_CREATE_COMPETITION';

export const fetchCreateCompetition = competitionData => async dispatch => {
  try {
    dispatch(loadingStart(FETCH_CREATE_COMPETITION));

    const formData = new FormData();

    map(omit(competitionData, ['coverCompetition', 'documentCompetition']), (value, key) => formData.append(key, JSON.stringify(value)));

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
}