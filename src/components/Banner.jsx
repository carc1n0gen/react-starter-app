import React from 'react'

export default class Banner extends React.Component {
  onClick = () => alert('I got clicked!')
    
  render() {
    return (
      <div className="jumbotron">
          <h1>{this.props.title}</h1>
          <p>{this.props.subtitle} <button onClick={this.onClick} className="btn btn-primary">Click me</button></p>
      </div>
    )
  }
}