import React from 'react';
import { render } from 'react-dom';
import App from './app';
import store from 'Store';
import { Provider } from 'react-redux';

import 'antd/dist/antd.css';
import './style.css';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
