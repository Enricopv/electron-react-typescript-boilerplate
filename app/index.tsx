import * as React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
// import Root from './containers/Root';
import './app.global.scss';
import Routes from "./routes"

// const { configureStore, history } = require('./store/configureStore');
// const store = configureStore();

render(
  <AppContainer>
    <Routes />
  </AppContainer>,
  document.getElementById('root')
);

if ((module as any).hot) {
  (module as any).hot.accept('./routes', () => {
    const NextRoot = require('./routes').default;
    render(
      <AppContainer>
        <NextRoot />
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
