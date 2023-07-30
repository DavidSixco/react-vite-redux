import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './main.css';
import 'antd/dist/antd.css';
import { Provider } from 'react-redux';
import { store } from '@store/store';
import Authentication from '@configuration/Authentication';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Authentication>
        <App />
      </Authentication>
    </Provider>
  </React.StrictMode>,
);
