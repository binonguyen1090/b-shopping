import React from 'react'
import './cart-dropdown.style.scss'
import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item.component'
import { connect } from 'react-redux'
import { setlectCartItems} from '../../redux/cart/car.selector'
import { createStructuredSelector } from "reselect";


const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className="empty-message">Empty cart</span>
      )}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

const mSTP = createStructuredSelector({
  cartItems: setlectCartItems,
});
export default connect(mSTP,null)(CartDropdown)