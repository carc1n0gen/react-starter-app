import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import { AnimatedSwitch } from 'react-router-transition'

import LocaleProvider from 'components/Contexts/LocaleContext'
import TodosProvider from 'components/Contexts/TodosContext'
import Navigation from 'components/Navigation'
import * as Pages from 'components/Pages'
import Meta from './Meta'
import './App.scss'

const CombinedProviders = ({ children }) => (
  <LocaleProvider>
    <TodosProvider>
      {children}
    </TodosProvider>
  </LocaleProvider>
)

export default function App() {
  return (
    <CombinedProviders>
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
    </CombinedProviders>
  )
}
