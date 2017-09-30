import React, { Component } from 'react';

class QtyControl extends Component {

  render() {

    return (
  		<div className='qty'>
        <button onClick={this.props.onDecrement}>-</button>
        <input className='qty_input' type="text" value={this.props.qty} />
        <button onClick={this.props.onIncrement}>+</button>
      </div>
    );
  }
}

export default QtyControl;
