import React, { Component } from 'react';

class ItemFragment extends Component {

  render() {

    return (
  		<a className="fragment">
  			<div>
		      <img src ={this.props.image} width={20} height={20} alt='none' />
		      <h3>{this.props.name}</h3>
		      <span id='close'>x</span>
	      </div>
			</a>
    );
  }
}

export default ItemFragment;
