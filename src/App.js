import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BarChart from './BarChart'
import GraphChart from './GraphChart'
import graphData from './GraphChart.data'


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="Demo">
          <GraphChart data={graphData} size={[500,500]} />
        </div>
        <div className="Demo">
          <BarChart data={[5,10,1,3]} size={[500,500]} />
        </div>
      </div>
    );
  }
}

export default App;
