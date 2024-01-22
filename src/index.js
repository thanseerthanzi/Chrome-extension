// index.js
import { browser } from 'webextension-polyfill-ts';
import { createElement } from 'react';
import { render } from 'react-dom';
import App from './App';

const rootElement = document.createElement('div');
document.body.appendChild(rootElement);

render(
  createElement(App),
  rootElement
);
