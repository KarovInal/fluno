import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import trainer from 'Ducks/trainer';
import loading from 'Ducks/loading';
import dictionary from 'Ducks/dictionary';

export default combineReducers({
  form: formReducer,
  loading,
  trainer,
  dictionary
});
