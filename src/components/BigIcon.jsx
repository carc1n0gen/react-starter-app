import React from 'react'
import PropTypes from 'prop-types'

export default class BigIcon extends React.Component {
  static propTypes = {
    icon: PropTypes.string.isRequired,
  }

  render() {
    return (
      <div className="big-icon">
        <span className={`glyphicon glyphicon-${this.props.icon}`}></span>
      </div>
    )
  }
}