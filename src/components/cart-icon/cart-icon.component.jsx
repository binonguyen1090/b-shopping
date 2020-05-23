import React from 'react'
import {ReactComponent as ShoppingIcon} from '../../asset/11.2 shopping-bag.svg.svg'
import './cart-icon.style.scss'
import {connect} from 'react-redux'
import { toggleCartHidden } from '../../redux/cart/cart.action'


const CartIcon = ({ toggleCartHidden }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count"> 0 </span>
  </div>
);
const mDtP = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(null, mDtP)(CartIcon)