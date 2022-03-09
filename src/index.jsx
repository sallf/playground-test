import promise from 'es6-promise';
import 'isomorphic-fetch';
import '$scss/global.scss'; // Must stay above App import

import React from 'react';
import { render } from 'react-dom';

import App from './App';

promise.polyfill();

render((
  <App />
), document.getElementById('root'));
