import React from 'react';
import { render } from 'react-dom';
import App from './app';
import store from 'Store';
import { Provider } from 'react-redux';
import { checkAuth } from 'Ducks/trainer';
import { fetchDictionary } from 'Ducks/dictionary';

import 'Config/message';
import 'antd/dist/antd.css';
import './theme.less';

store.dispatch(checkAuth());
store.dispatch(fetchDictionary());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
