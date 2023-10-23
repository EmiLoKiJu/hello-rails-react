// Entry point for the build script in your package.json
import '@hotwired/turbo-rails';
import './controllers';
import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import store from './redux/store';

const root = document.getElementById('root');
const rootContainer = ReactDOM.createRoot(root);

rootContainer.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
