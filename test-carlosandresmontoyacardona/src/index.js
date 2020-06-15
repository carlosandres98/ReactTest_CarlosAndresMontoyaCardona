import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';

import 'bootstrap/dist/css/bootstrap.min.css';
// import $ from 'jquery';
// import Popper from 'popper.js';

import { Provider } from 'react-redux';
// import store from './redux/store/index';
import { store, persistor } from './redux/store/index';


import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
