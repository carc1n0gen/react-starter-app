import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { IntlProvider } from 'react-intl'
import { AppContainer } from 'react-hot-loader'
import App from './components/App'
import store from './components/App/redux/store'

// Set up global things
// try {
//     window.$ = window.jQuery = require('jquery')
// } catch (e) {}

// Render the app
const render = Component => {
  ReactDOM.render(
    React.createElement(AppContainer, {},
      React.createElement(IntlProvider, { locale: navigator.language },
        React.createElement(Provider, { store },
          React.createElement(Component)
        )
      ),
    ),
    document.getElementById('app')
  )
}

render(App)

// Hot reloading
if (module.hot) {
  module.hot.accept('./components/App', () => {
    const nextContainer = require('./components/App').default;
    render(nextContainer);
  })
}
