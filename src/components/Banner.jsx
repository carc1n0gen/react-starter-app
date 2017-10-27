import React from 'react'
import PropTypes from 'prop-types'

export default class Banner extends React.Component {
  onClick = () => alert('I got clicked!')

  static propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    clickHandler: PropTypes.func,
  }
    
  render() {
    return (
      <div className="jumbotron">
        <h1>{this.props.title}</h1>
        <p>
          { this.props.subtitle &&
            <span>{this.props.subtitle}</span>
          }

          &nbsp;

          { this.props.clickHandler &&
            <button onClick={this.props.clickHandler} className="btn btn-primary">Click me</button>
          }
        </p>
      </div>
    )
  }
}