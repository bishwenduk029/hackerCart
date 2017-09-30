import React, { Component } from 'react';
import { connect } from 'react-redux';

import ItemFragement from './itemFragement';
import QtyControl from './qtyControl';

import { incrementQty,
         decrementQty,
      } from '../actions/cartActions';

class ProductRow extends Component {


  render() {
    return (
  		<tr>
  			<td colSpan={20}>
          <ItemFragement name={this.props.product.name} image={this.props.product.img_url}/>
        </td>
  			<td>
          <QtyControl
            qty={this.props.product.qty}
            onDecrement={() => this.props.decrementQty(this.props.product)}
            onIncrement={() => this.props.incrementQty(this.props.product)}
          />
        </td>
  			<td>{this.props.product.price}</td>
  		</tr>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({

    incrementQty: (product) => dispatch(incrementQty(product)),

    decrementQty: (product) => dispatch(decrementQty(product)),

});

const mapStateToProps = (state, ownProps) => ({
  product: ownProps.product,
});


export default connect( mapStateToProps, mapDispatchToProps)(ProductRow);
