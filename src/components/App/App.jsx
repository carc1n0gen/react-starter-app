import React, { Component } from 'react'
import { injectIntl } from 'react-intl'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import Navigation from '../Navigation'
import * as Pages from '../Pages'
import './App.scss'

class App extends Component {
  defaultPage = () => <Redirect to={`/${this.props.intl.locale}`} />

  render = () => (
    <Router>
      <div>
        <Navigation />
        <Switch>
          <Route exact path="/" component={this.defaultPage} />
          <Route path="/:lang" component={Pages.Home} />
          <Route path="/:lang/todos" component={Pages.Todos} />
          <Route path="/:lang/about" component={Pages.About} />
          <Route component={Pages.NotFound} />
        </Switch>
      </div>
    </Router>
  )
}

export default injectIntl(App)
