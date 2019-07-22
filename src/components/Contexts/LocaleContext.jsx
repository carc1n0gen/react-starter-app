import React, { createContext, useCallback, useReducer } from 'react';
import PropTypes from 'prop-types';
import { IntlProvider } from 'react-intl';

import enUS from 'i18n/en_US';
import enCA from 'i18n/en_CA';
import reducer, { LOCALE_SET } from './LocaleContextReducer';

export const LocaleContext = createContext();
LocaleContext.displayName = 'LocaleContext';

const locales = new Set(['en-US', 'en-CA']);
const messages = {
  'en-US': enUS,
  'en-CA': enCA,
};
const defaultLocale = 'en-US';

function getLocale() {
  const storedLocale = localStorage.getItem('locale');
  if (storedLocale) {
    return storedLocale;
  }

  const browserLocale = navigator.language;
  if (locales.has(browserLocale)) {
    localStorage.setItem('locale', browserLocale);
    return browserLocale;
  }

  return defaultLocale;
}

const initialState = {
  locale: getLocale(),
};

export default function LocaleContextWrapper({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setLocale = useCallback((locale) => {
    dispatch({ type: LOCALE_SET, locale });
  });

  return (
    <LocaleContext.Provider
      value={{
        locale: state.locale,
        setLocale,
      }}
    >
      <IntlProvider
        locale={state.locale}
        messages={messages[state.locale]}
      >
        {children}
      </IntlProvider>
    </LocaleContext.Provider>
  );
}

LocaleContextWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
