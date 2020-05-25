import React from "react";
import "./checkout-item.style.scss";
import {connect} from 'react-redux';
import {clearItemFromCart} from '../../redux/cart/cart.action'


const CheckoutItem = ({ cartItem, clearItemFromCart }) => {
  const { name, imageUrl, price, quantity } = cartItem

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">{price}</span>
      <div
        className="remove-button"
        onClick={() => clearItemFromCart(cartItem)}
      >
        &#9986;
      </div>
    </div>
  )
}
const mDTP = (dispatch) => ({
  clearItemFromCart: (item) => dispatch(clearItemFromCart(item)),
});
export default connect(null,mDTP)(CheckoutItem);
