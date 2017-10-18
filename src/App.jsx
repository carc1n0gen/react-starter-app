import React from 'react';

import AwesomeComponent from './components/AwesomeComponent.jsx';

export default class App extends React.Component {
  render () {
    return (
      <div>
        <p>Hello React!!</p>
        <AwesomeComponent />
      </div>
    );
  }
}