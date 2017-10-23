import React from 'react'

export default class BigIcon extends React.Component {
  render() {
    return (
      <div className="big-icon">
        <span className={`glyphicon glyphicon-${this.props.icon}`}></span>
      </div>
    )
  }
}