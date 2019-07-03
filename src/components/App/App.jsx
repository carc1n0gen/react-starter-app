import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import { IntlProvider } from 'react-intl'
import { AnimatedSwitch } from 'react-router-transition'

import Navigation from 'components/Navigation'
import * as Pages from 'components/Pages'
import Meta from './Meta'
import en_US from 'i18n/en_US'
import en_CA from 'i18n/en_CA'
import './App.scss'

const locales = new Set(['en-US', 'en-CA'])
const messages = {
  'en-US': en_US,
  'en-CA': en_CA
}
const defaultLocale = 'en-US'

export default function ({ locale }) {
  const selectedLocale = locales.has(locale) ? locale : defaultLocale
  return (
    <IntlProvider
      locale={selectedLocale}
      messages={messages[selectedLocale]}
    >
      <Router>
        <>
          <Meta />
          <Navigation />
          <AnimatedSwitch
            atEnter={{ opacity: 0 }}
            atLeave={{ opacity: 0 }}
            atActive={{ opacity: 1 }}
            className="switch-wrapper"
          >
            <Route exact path="/" component={Pages.Home} />
            <Route path="/todos" component={Pages.Todos} />
            <Route path="/about" component={Pages.About} />
            <Route component={Pages.NotFound} />
          </AnimatedSwitch>
        </>
      </Router>
    </IntlProvider>
  )
}
