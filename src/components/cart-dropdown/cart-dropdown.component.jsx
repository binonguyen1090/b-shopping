import React from 'react'
import './cart-dropdown.style.scss'
import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item.component'
import { connect } from 'react-redux'
import { setlectCartItems} from '../../redux/cart/car.selector'

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} item={cartItem}/>
      ))}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

const mSTP = (state) => ({
  cartItems: setlectCartItems(state),
});
export default connect(mSTP,null)(CartDropdown)