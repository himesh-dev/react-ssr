import React from 'react';
import { hydrate } from 'react-dom';
import App from '../shared/App';

function render(_App) {
  hydrate(<_App />, document.getElementById('app'));
}

if (module.hot) {
  console.log('HOT MODULE', module.hot);
  module.hot.accept('../shared/App.js', () => {
    console.log('HOT MODULE IN');
    const NextApp = require('../shared/App.js');
    render(NextApp);
  });
}

render(App);
