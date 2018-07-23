import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import trainer from 'Ducks/trainer';
import loading from 'Ducks/loading';
import dictionary from 'Ducks/dictionary';
import pupils from 'Ducks/pupils';

export default combineReducers({
  form: formReducer,
  pupils,
  loading,
  trainer,
  dictionary,
});
