import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Navigation from '../Navigation'
import * as Pages from '../Pages'
import './App.scss'

export default () => (
  <Router>
    <div>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Pages.Home} />
        <Route path="/todos" component={Pages.Todos} />
        <Route path="/about" component={Pages.About} />
        <Route component={Pages.NotFound} />
      </Switch>
    </div>
  </Router>
)
