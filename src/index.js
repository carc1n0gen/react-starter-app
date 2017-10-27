import { AppContainer } from 'react-hot-loader'
import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App'

/* Setup global things */

try {
    window.$ = window.jQuery = require('jquery')
    require('bootstrap-sass')
} catch (e) {}

/* Render the app */

ReactDOM.render(
  React.createElement(AppContainer, {}, React.createElement(App)),
  document.getElementById('app')
)

/* Hot reloading */

if (module.hot) {
  module.hot.accept(
    './components/App',
    ReactDOM.render(
      React.createElement(AppContainer, {}, React.createElement(App)),
      document.getElementById('app')
    )
  )
}
