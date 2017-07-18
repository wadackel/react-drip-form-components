/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
import { AppContainer } from 'react-hot-loader';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const root = document.getElementById('root');
const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    root
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NextApp = require('./components/App').default;
    render(NextApp);
  });
}
