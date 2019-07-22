import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import App from 'components/App';

// Set up global things
// try {
//     window.$ = window.jQuery = require('jquery')
//     // But why would you want to do that right? ;)
// } catch (e) {}

// Render the app
function render(Component) {
  ReactDOM.render(
    React.createElement(AppContainer, {},
      React.createElement(Component)),
    document.getElementById('app'),
  );
}

render(App);

// Hot reloading
if (module.hot) {
  module.hot.accept('components/App', () => {
    // eslint-disable-next-line global-require
    const nextContainer = require('components/App').default;
    render(nextContainer);
  });
}
