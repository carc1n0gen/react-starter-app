import React from 'react'
import { injectIntl } from 'react-intl'
import { Link } from 'react-router-dom'
import { Navbar, Nav, NavItem } from 'react-bootstrap'

export default injectIntl(({intl}) => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <Link className="navbar-brand" to={`/${intl.locale}`}>React App</Link>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <NavItem
        componentClass={Link}
        href={`/${intl.locale}/todos`} 
        to={`/${intl.locale}/todos`}
      >
        Todos
      </NavItem>
      <NavItem
        componentClass={Link}
        href={`/${intl.locale}/about`}
        to={`/${intl.locale}/about`}
      >
        About
      </NavItem>
    </Nav>
  </Navbar>
))
