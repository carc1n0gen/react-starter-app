import React from 'react'
import { Link } from 'react-router-dom'

export default () => (
  <nav className="navbar navbar-default">
    <div className="container">
      <div className="navbar-header">
        <Link className="navbar-brand" to="/">React Starter App</Link>
      </div>
      <ul className="nav navbar-nav">
        <li><Link to="/about">About</Link></li>
      </ul>
    </div>
  </nav>
)
