import React from 'react';
import { hydrate } from 'react-dom';
import App from '../shared/App';

function render(_App) {
  hydrate(<_App />, document.getElementById('app'));
}

if (module.hot) {
  module.hot.accept('../shared/App.js', () => {
    const NextApp = require('../shared/App').default;
    render(NextApp);
  });
}

render(App);
