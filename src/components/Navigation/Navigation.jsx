import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Navbar, Nav, NavDropdown,
} from 'react-bootstrap';

import { LocaleContext } from 'components/Contexts/LocaleContext';

export default function Navigation({ location }) {
  const { locale, setLocale } = useContext(LocaleContext);
  return (
    <Navbar bg="light" className="mb-5">
      <Navbar.Brand as={Link} href="/" to="/">
        <img
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"
          alt="React Logo"
          width="30"
          height="30"
          className="d-inline-block align-top mr-1"
        />
        React App
      </Navbar.Brand>
      <Nav>
        <Nav.Link
          as={Link}
          href="/"
          to="/"
          active={location.pathname === '/'}
        >
          Home
        </Nav.Link>
        <Nav.Link
          as={Link}
          href="/about"
          to="/about"
          active={location.pathname === '/about'}
        >
          About
        </Nav.Link>
        <Nav.Link
          as={Link}
          href="/todos"
          to="/todos"
          active={location.pathname === '/todos'}
        >
          Todos
        </Nav.Link>
      </Nav>
      <Nav className="ml-auto">
        <NavDropdown title={`Language: ${locale}`} id="language-dropdown">
          <NavDropdown.Item
            disabled={locale === 'en-US'}
            onClick={() => setLocale('en-US')}
          >
            en-US
          </NavDropdown.Item>
          <NavDropdown.Item
            disabled={locale === 'en-CA'}
            onClick={() => setLocale('en-CA')}
          >
            en-CA
          </NavDropdown.Item>
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
