import { get } from 'lodash';

export const LOADIGN_START = 'LOADIGN_START';
export const LOADIGN_STOP = 'LOADIGN_STOP';

const defaultState = {};

const loadingReducer = (state = defaultState, action) => {
  switch(action.type) {
    case LOADIGN_START:
      return {
        ...state,
        [action.payload.key]: {
          loading: true
        }
      };
    case LOADIGN_STOP:
      return {
        ...state,
        [action.payload.key]: {
          loading: false
        }
      };
    default:
      return state;
  }
};

export default loadingReducer;

export const loadingStart = type => ({
  type: LOADIGN_START,
  payload: {
    key: type
  }
});

export const loadingStop = type => ({
  type: LOADIGN_STOP,
  payload: {
    key: type
  }
});

// Selectors

export const isLoading = type => state => get(state, ['loading', type, 'loading'], false);
