import React from 'react';
import { render } from 'react-dom';
import App from './app';
import store from 'Store';
import { LocaleProvider } from 'antd';
import { Provider } from 'react-redux';
import { checkAuth } from 'Ducks/trainer';
import { fetchDictionary } from 'Ducks/dictionary';

import ru_RU from 'antd/lib/locale-provider/ru_RU';
import 'Config/message';
import 'antd/dist/antd.css';
import './theme.less';

store.dispatch(checkAuth());
store.dispatch(fetchDictionary());

render(
  <Provider store={store}>
    <LocaleProvider locale={ru_RU}>
      <App />
    </LocaleProvider>
  </Provider>,
  document.getElementById('root')
);
