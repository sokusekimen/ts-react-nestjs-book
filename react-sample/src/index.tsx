import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// import App from './App';
import Hello from './components/Hello';
import Parent from './components/ContainerSample';
import CounterWithReducer from './components/CounterWithReducer';
import { FizzBuzz } from './components/FizzBuzz';
import { CounterWithCallback } from './components/CounterWithCallback';
import { UseMemoSample } from './components/UseMemoSample';
import { Clock } from './components/Clock';
import { GrandChildParent } from './components/GrandChildParent';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // 不適切なコードを検知するヘルパー
  <React.StrictMode>
    <UseMemoSample />
    <hr />
    <Clock />
    <hr />
    <GrandChildParent />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
