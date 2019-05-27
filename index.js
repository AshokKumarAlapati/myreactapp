import React, { Component } from 'react';
import ReactDOM from 'react-dom';
class App extends Component {
  render() {
    return (
      <div>welcome to react app</div>
    );
  }
}
ReactDOM.render(<App />, document.querySelector('.container'));
