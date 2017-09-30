import Axios from 'axios';

import {
  REQUEST_CART_ITEMS,
  RECEIVE_CART_ITEMS,
  PRODUCT_DELETED,
  DECREMENT_QTY,
  INCREMENT_QTY,
} from './types';

function requestCartItems() {
  return {
    type: REQUEST_CART_ITEMS
  }
}

function receiveCartItems(json) {
  return {
    type: RECEIVE_CART_ITEMS,
    products: json,
  }
}

export function productDeleted(deletedProduct) {
  return {
    type: PRODUCT_DELETED,
    deletedProduct
  }
}

export function decrementQty(product) {
  let quantity = product.qty;
  quantity = quantity - 1;
  return {
    type: DECREMENT_QTY,
    newProduct: Object.assign({}, product,{qty: quantity < 0 ? 0 : quantity})
  }
}

export function incrementQty(product) {
  let quantity = product.qty;
  quantity = quantity + 1;
  return {
    type: INCREMENT_QTY,
    newProduct: Object.assign({}, product,{qty: quantity}),
    typeOfDiscount: product.type === 'fiction' ? 15: 0
  }
}

export function fetchCartItems() {

  return function (dispatch) {

    dispatch(requestCartItems())

    return Axios.get('http://localhost:3000/products')
      .then(response => response.data)
      .catch(error => {throw(error);})
      .then(json => dispatch(receiveCartItems(json)) )
  }
}

export function deleteProduct(product) {
  return function(dispatch) {
    return Axios.delete('http://localhost:3000/products/' + product.id.toString())
      .then(resp => resp.data)
      .catch(error => {throw(error);})
      .then(json => dispatch(productDeleted(product)));
  }
}