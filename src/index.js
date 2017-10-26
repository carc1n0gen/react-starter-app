import { AppContainer } from 'react-hot-loader'
import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App'

ReactDOM.render(
  React.createElement(AppContainer, {}, React.createElement(App)),
  document.getElementById('app')
)

if (module.hot) {
  module.hot.accept(
    './components/App',
    ReactDOM.render(
      React.createElement(AppContainer, {}, React.createElement(App)),
      document.getElementById('app')
    )
  )
}
