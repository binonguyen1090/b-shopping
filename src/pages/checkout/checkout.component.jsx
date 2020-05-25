import React from "react";
import "./checkout.style.scss";
import { connect } from "react-redux";
import {
  setlectCartItems,
  selectCartTotal,
} from "../../redux/cart/car.selector";
import { createStructuredSelector } from "reselect";
import CheckoutItem from '../../components/checkout-item/checkout-item.component'

const CheckoutPage = ({ cartItems, total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map((cartItem) => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <div className="total">
      <span>TOTAL: ${total}</span>
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: setlectCartItems,
  total: selectCartTotal,
});
export default connect(mapStateToProps)(CheckoutPage);
