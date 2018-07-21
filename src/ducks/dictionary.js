import { message } from 'antd';
import { DICTIONARY_PATH } from 'Constants/fetch';
import { loadingStart, loadingStop } from 'Ducks/loading';

export const FETCH_DICTIONARY = 'FETCH_DICTIONARY';
export const FETCH_DICTIONARY_SUCCESS = 'FETCH_DICTIONARY_SUCCESS';
export const FETCH_DICTIONARY_FAILURE = 'FETCH_DICTIONARY_FAILURE';

const dictionaryReducer = (state = {}, action) => {
  switch(action.type) {
    case FETCH_DICTIONARY_SUCCESS:
      return {
        ...state,
        ...action.payload
      }
    case FETCH_DICTIONARY_FAILURE:
    default:
      return state;
  }
};

export default dictionaryReducer;

export const fetchDictionary = () => async dispatch => {
  try {
    dispatch(loadingStart(FETCH_DICTIONARY));

    const dictionaryResponse = await fetch(DICTIONARY_PATH);

    if(dictionaryResponse.status !== 200) throw new Error(result);

    const dictionaryResult = await dictionaryResponse.json();

    dispatch(fetchDictionarySuccess(dictionaryResult));
    dispatch(loadingStop(FETCH_DICTIONARY));
  } catch(e) {
    console.warn(e);
    dispatch(fetchDictionaryFailure());
    dispatch(loadingStop(FETCH_DICTIONARY));
  }
};

export const fetchDictionarySuccess = dictionaryData => ({
  type: FETCH_DICTIONARY_SUCCESS,
  payload: dictionaryData
});

export const fetchDictionaryFailure = () => ({
  type: FETCH_DICTIONARY_FAILURE
});
