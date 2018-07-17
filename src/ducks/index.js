import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import trainer from './trainer';
import loading from './loading';

export default combineReducers({
  form: formReducer,
  loading,
  trainer,
});
