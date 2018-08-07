import * as React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import './app.global.scss';
import SetupApollo from './setup/SetupApollo'

render(
  <AppContainer>
    <SetupApollo />
  </AppContainer>,
  document.getElementById('root')
);

if ((module as any).hot) {
  (module as any).hot.accept('./setup/SetupApollo', () => {
    const NextRoot = require('./setup/SetupApollo').default;
    render(
      <AppContainer>
        <NextRoot />
      </AppContainer>,
      document.getElementById('root')
    );
  });
}
