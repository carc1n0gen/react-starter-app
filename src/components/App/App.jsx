import React from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import { AnimatedSwitch } from 'react-router-transition'
import styled from 'styled-components'
import Navigation from '../Navigation'
import * as Pages from '../Pages'
import Meta from './Meta'
import './App.scss'

const Wrapper = styled.div`
  .switch-wrapper {
    position: relative;
  }
  
  .switch-wrapper > div {
    position: absolute;
    width: 100%
  }
`

export default () => (
  <Router>
    <Wrapper>
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
    </Wrapper>
  </Router>
)
