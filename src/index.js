import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './components/App'

// Set up global things
// try {
//     window.$ = window.jQuery = require('jquery')
// } catch (e) {}

// Render the app
function renderApp() {
  ReactDOM.render(
    React.createElement(AppContainer, {}, React.createElement(App)),
    document.getElementById('app')
  )
}

renderApp()

// Hot reloading
if (module.hot) {
  module.hot.accept(
    './components/App',
    renderApp()
  )
}
