import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, NavItem } from 'react-bootstrap'

export default () => (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <Link className="navbar-brand" to="/">React App</Link>
      </Navbar.Brand>
    </Navbar.Header>
    <Nav>
      <NavItem componentClass={Link} href="/todos" to="/todos">Todos</NavItem>
      <NavItem componentClass={Link} href="/about" to="/about">About</NavItem>
    </Nav>
  </Navbar>
)
