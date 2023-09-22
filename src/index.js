import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Reducer from './reducer';
const store = createStore(Reducer);
const root = ReactDOM.createRoot(document.getElementById('root'));
import { GoogleOAuthProvider } from '@react-oauth/google';

root.render(
  <Provider store={store}>
    <GoogleOAuthProvider clientId="580345362798-9g5gpsri2lgbfgl1ogm3eoojcdm8jfah.apps.googleusercontent.com">
            <App />
    </GoogleOAuthProvider>
  </Provider>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
