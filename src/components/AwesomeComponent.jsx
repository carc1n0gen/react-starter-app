import React from 'react'

export default class AwesomeComponent extends React.Component {
  state = { likesCount: 0 }
  onLike = () => this.setState({ likesCount: this.state.likesCount + 1 })

  render() {
    return (
      <div>
        Likes: <span>{this.state.likesCount}</span>
        <div><button onClick={this.onLike}>Like Me</button></div>
      </div>
    )
  }
}
