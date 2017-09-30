import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCartItems } from '../actions/cartActions';
import ProductRow from './productRow';

class OrderSummary extends Component {

	componentDidMount() {
		this.props.getItems();
	}

  render() {
    return (
    	<table>
    		<thead>
    			<tr>
    				<th>Order Summary</th>
    			</tr>
    		</thead>
    		<tbody>
	    		<tr>
	    			<th colSpan={20}>Items ({this.props.products.length})</th>
	    			<th>Qty</th>
	    			<th>Price</th>
	    		</tr>
	    		{(this.props.products.length !== 0) &&
	    			this.props.products
	    				.sort((e1, e2) => (e1.id > e2.id))
	    				.map(product => (<ProductRow key={product.id} product={product} />))
	    		}
    		</tbody>
    	</table>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({

		getItems: () => dispatch(fetchCartItems()),

})

const mapStateToProps = (state) => ({
  products: state.cart.products,
  isFetching: state.cart.isFetching
});


export default connect( mapStateToProps, mapDispatchToProps)(OrderSummary);
