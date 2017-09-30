import React, { Component } from 'react';
import OrderSummary from './components/orderSummary';
import CostSummary from './components/costSummary';

import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <OrderSummary />
        <CostSummary />
      </div>
    );
  }
}

export default App;
