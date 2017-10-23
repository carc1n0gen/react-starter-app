import React from 'react'
import {
  HashRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import Navigation from './Navigation.jsx'

import home from './pages/home.jsx'
import about from './pages/about.jsx'
import notFound from './pages/404.jsx'

export default () => (
  <Router>
    <div>
      <Navigation />
      <Switch>
        <Route exact path="/" component={home} />
        <Route path="/about" component={about} />
        <Route component={notFound} />
      </Switch>
    </div>
  </Router>
)
