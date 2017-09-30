import React, { Component } from 'react';
import { connect } from 'react-redux';

class CostSummary extends Component {

  render() {
    let cost = this.props.products.reduce((total, item) => (total+(item.price * item.qty)), 0);
    let discount = this.props.products.reduce((total, item) => (total+((item.discount / 100) * item.price * item.qty)), 0);
    let finalCost = cost - discount - this.props.typeOfDiscount;


    return (
    	<table className='cost'>
    		<thead>
    			<tr>
    				<th>Total</th>
    			</tr>
    		</thead>
    		<tbody>
	    		<tr>
	    			<td colSpan={25}>Items({this.props.products.length})</td>
            <td>:</td>
            <td>{cost}</td>
	    		</tr>
          <tr>
            <td colSpan={25}>Discount</td>
            <td>:</td>
            <td>-${discount}</td>
          </tr>
          <tr>
            <td colSpan={25}>Type Discount</td>
            <td>:</td>
            <td>{this.props.typeOfDiscount}</td>
          </tr>
          <tr>
            <td colSpan={25}>Order Total</td>
            <td></td>
            <td>{finalCost}</td>
          </tr>
    		</tbody>
    	</table>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.cart.products,
  typeOfDiscount: state.cart.typeOfDiscount
});


export default connect( mapStateToProps, null)(CostSummary);
