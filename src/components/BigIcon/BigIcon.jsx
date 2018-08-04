import React from 'react'
import PropTypes from 'prop-types'
import { Glyphicon } from 'react-bootstrap'

import './BigIcon.scss'

const BigIcon = (props) => (
  <div className="big-icon">
    <Glyphicon glyph={props.icon} />
  </div>
)

BigIcon.propTypes = {
  icon: PropTypes.string.isRequired
}

export default BigIcon
