import React, { Component } from 'react';

const Test = () => <div>Testing</div>

class App extends Component {
  render() {
    return (
      <div>
        <h1>React App for testing with Jest and Ezyme</h1>
        <Test />
      </div>
    )
  }
}

export default App;