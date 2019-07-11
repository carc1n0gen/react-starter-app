import React from 'react'
import { IntlProvider, injectIntl } from 'react-intl'

import reducer, { LOCALE_SET } from './LocaleContextReducer'
import en_US from 'i18n/en_US'
import en_CA from 'i18n/en_CA'

const LocaleContext = React.createContext()
LocaleContext.displayName = 'LocaleContext'

const locales = new Set(['en-US', 'en-CA'])
const messages = {
  'en-US': en_US,
  'en-CA': en_CA
}
const defaultLocale = 'en-US'

function getLocale() {
  const storedLocale = localStorage.getItem('locale')
  if (storedLocale) {
    return storedLocale
  }

  const browserLocale = navigator.language
  if (locales.has(browserLocale)) {
    localStorage.setItem('locale', browserLocale)
    return browserLocale
  }

  return defaultLocale
}

const initialState = {
  locale: getLocale()
}

export default function LocaleContextWrapper({ children }) {
  const [state, dispatch] = React.useReducer(reducer, initialState)

  function setLocale(locale) {
    dispatch({ type: LOCALE_SET, locale })
  }

  return (
    <LocaleContext.Provider
      value={{
        locale: state.locale,
        setLocale
      }}
    >
      <IntlProvider
        locale={state.locale}
        messages={messages[state.locale]}
      >
        {children}
      </IntlProvider>
    </LocaleContext.Provider>
  )
}

export function withLocale(Component) {
  return injectIntl(function LocaleContextInjector(props) {
    return (
      <LocaleContext.Consumer>
        {context => <Component {...props} localeContext={context} />}
      </LocaleContext.Consumer>
    )
  })
}
