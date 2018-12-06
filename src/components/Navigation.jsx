import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { injectIntl } from 'react-intl'
import { Link } from 'react-router-dom'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
import { setLocale } from '../redux/actions'

const Navigation = ({location, intl, setLocale}) => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <Link className="navbar-brand" to="/">React App</Link>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <NavItem
        componentClass={Link}
        href="/"
        to="/"
        active={location.pathname === '/'}
      >
        Home
      </NavItem>
      <NavItem
        componentClass={Link}
        href="/about"
        to="/about"
        active={location.pathname === '/about'}
      >
        About
      </NavItem>
      <NavItem
        componentClass={Link}
        href="/todos"
        to="/todos"
        active={location.pathname === '/todos'}
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

export default withRouter(injectIntl(connect(null, mapDispatchToProps)(Navigation)))

