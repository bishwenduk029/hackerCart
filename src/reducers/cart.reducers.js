import {
  REQUEST_CART_ITEMS,
  RECEIVE_CART_ITEMS,
  PRODUCT_DELETED,
  INCREMENT_QTY,
  DECREMENT_QTY,
} from '../actions/types';

function cart(
  state = {
    isFetching: false,
    products: [],
    typeOfDiscount: 0,
  },
  action
) {
  switch (action.type) {

    case REQUEST_CART_ITEMS:
      return Object.assign({}, state, {
        isFetching: true
      });

    case RECEIVE_CART_ITEMS:
      return Object.assign({}, state, {
        isFetching: false,
        products: action.products.map(item => (Object.assign({}, item, { qty: 0})))
      });

    case PRODUCT_DELETED:
      return Object.assign({}, state, {
        products: state.products.filter(item => (item.id !== action.deletedProduct.id))
      });

    case DECREMENT_QTY:
      return Object.assign({}, state, {
        products: [...state.products.filter(item => (item.id !== action.newProduct.id)), action.newProduct]
      });

    case INCREMENT_QTY:
      return Object.assign({}, state, {
        products: [...state.products.filter(item => (item.id !== action.newProduct.id)), action.newProduct],
        typeOfDiscount: action.typeOfDiscount
      });

    default:
      return state;
  }
}

export default cart;