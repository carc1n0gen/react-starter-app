import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader'

import App from 'components/App'
import store from 'store'

// Set up global things
// try {
//     window.$ = window.jQuery = require('jquery')
//     // But why would you want to do that right? ;)
// } catch (e) {}

// Render the app
const render = Component => {
  ReactDOM.render(
    React.createElement(AppContainer, {},
      React.createElement(Provider, { store },
        React.createElement(Component)
      ),
    ),
    document.getElementById('app')
  )
}

render(App)

// Hot reloading
if (module.hot) {
  module.hot.accept('components/App', () => {
    const nextContainer = require('components/App').default
    render(nextContainer)
  })
}
