import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Navbar, Nav, NavItem, NavDropdown, MenuItem,
} from 'react-bootstrap';

import { LocaleContext } from 'components/Contexts/LocaleContext';

export default function Navigation({ location }) {
  const { locale, setLocale } = useContext(LocaleContext);
  return (
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
        <NavDropdown title={`Language: ${locale}`} id="language-dropdown">
          <MenuItem
            disabled={locale === 'en-US'}
            onClick={() => setLocale('en-US')}
          >
            en-US
          </MenuItem>
          <MenuItem
            disabled={locale === 'en-CA'}
            onClick={() => setLocale('en-CA')}
          >
            en-CA
          </MenuItem>
        </NavDropdown>
      </Nav>
    </Navbar>
  );
}

Navigation.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
};

Navigation.defaultProps = {
  location: {
    pathname: '',
  },
};
