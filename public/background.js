import { browser } from 'webextension-polyfill-ts';
import { render } from 'react-dom';
import App from './App';

const rootElement = document.createElement('background');
document.body.appendChild(rootElement);

render(
  <browser.BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </browser.BrowserRouter>,
  rootElement
);
