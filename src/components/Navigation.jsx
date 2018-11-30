import React from 'react'
import { connect } from 'react-redux'
import { injectIntl } from 'react-intl'
import { Link } from 'react-router-dom'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
import { setLocale } from '../redux/actions'

const Navigation = ({intl, setLocale}) => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <Link className="navbar-brand" to="/">React App</Link>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <NavItem
        componentClass={Link}
        href="/about"
        to="/about"
      >
        About
      </NavItem>
      <NavItem
        componentClass={Link}
        href="/todos"
        to="/todos"
      >
        Todos
      </NavItem>
    </Nav>
    <Nav pullRight>
      <NavDropdown title={`Language: ${intl.locale}`} id="language-dropdown">
        <MenuItem 
          disabled={intl.locale === 'en-US'}
          onClick={e => setLocale('en-US')}
        >
          en-US
        </MenuItem>
        <MenuItem 
          disabled={intl.locale === 'en-CA'}
          onClick={e => setLocale('en-CA')}
        >
          en-CA
        </MenuItem>
      </NavDropdown>
    </Nav>
  </Navbar>
)

const mapDispatchToProps = {
  setLocale
}

export default injectIntl(connect(null, mapDispatchToProps)(Navigation))

