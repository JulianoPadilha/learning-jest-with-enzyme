import React, { Component } from 'react';

// const Test = () => <div>Testing</div>

class App extends Component {
  render() {
    return (
      <div>
        <h1 className="app">React App for testing with Jest and Ezyme</h1>
        <ul>
          <li>Test 1</li>
          <li>Test 2</li>
          <li>Test 3</li>
        </ul>
        {/* <Test /> */}
      </div>
    )
  }
}

export default App;