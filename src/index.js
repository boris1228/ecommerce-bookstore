
import 'bootstrap/dist/css/bootstrap.min.css'; // must be on the top of all css file
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import {StateProvider} from './Component/StateProvider';
import reducer, {initialState} from './Component/reducer';
import App from './App';
import reportWebVitals from './reportWebVitals';



ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
    <App />
    </StateProvider>
          
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
