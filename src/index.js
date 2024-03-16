import React from 'react';
import ReactDOM from 'react-dom/client';
import "./style/index.scss";
import App from './App';

import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from "./reducer"
import { login } from './action/signin.user';

const store = configureStore({
  reducer: rootReducer,
  devTools: true
})

store.dispatch(login)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
