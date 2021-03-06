import React, { Component } from 'react';

// const Test = () => <div>Testing</div>

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      on: false
    }
  };

  render() {
    return (
      <div>
        <h1 className="app">React App for testing with Jest and Ezyme</h1>
        <ul>
          <li>Test 1</li>
          <li>Test 2</li>
          <li>Test 3</li>
        </ul>
        <p className='button-state'>{this.state.on ? 'Yes!' : 'No!'}</p>
        <button onClick={() => this.setState({on: true})}>Click</button>
        {/* <Test /> */}
      </div>
    )
  }
}

export class Link extends Component {
  render() {
    return this.props.hide ? null : <a href={this.props.address}>Click</a>
  }
};

export default App;