import React, { createContext, useCallback, useReducer } from 'react'
import { IntlProvider, injectIntl } from 'react-intl'

import reducer, { LOCALE_SET } from './LocaleContextReducer'
import en_US from 'i18n/en_US'
import en_CA from 'i18n/en_CA'

export const LocaleContext = createContext()
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
  const [state, dispatch] = useReducer(reducer, initialState)

  const setLocale = useCallback((locale) => {
    dispatch({ type: LOCALE_SET, locale })
  })

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
