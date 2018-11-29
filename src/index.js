import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader'
import App from './components/App'
import store from './redux/store'
import LanguageProvider from './components/LanguageProvider'
import en_US from './i18n/en_US.json'
import en_CA from './i18n/en_CA.json'

// Set up global things
// try {
//     window.$ = window.jQuery = require('jquery')
// } catch (e) {}

// Render the app
const render = Component => {
  ReactDOM.render(
    React.createElement(AppContainer, {},
      React.createElement(Provider, { store },
        React.createElement(LanguageProvider, {},
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
