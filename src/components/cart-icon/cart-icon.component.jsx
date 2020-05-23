import React from 'react'
import {ReactComponent as ShoppingIcon} from '../../asset/11.2 shopping-bag.svg.svg'
import './cart-icon.style.scss'
import {connect} from 'react-redux'
import { toggleCartHidden } from '../../redux/cart/cart.action'


const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count"> {itemCount} </span>
  </div>
);
const mDtP = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});
const mSTP = (state) => ({
  itemCount: state.cart.cartItems.reduce((accu, cartItem) => accu + cartItem.quantity, 0),
});
export default connect(mSTP, mDtP)(CartIcon);