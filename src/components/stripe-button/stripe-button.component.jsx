import React from 'react'
import StripCheckout from 'react-stripe-checkout'

const StripCheckoutButton = ({price}) => {
    const priceForStripe = price * 100
    const publishableKey = 'pk_test_mi8OGcIZ4HmQ8ClQYxB9mo8E00oxq4FceJ'

    const onToken = token => {
        console.log(token)
        alert("pay success")
    }
    return (
      <StripCheckout
        label="Pay Now"
        name="B SHOP INC"
        billingAddress
        shippingAddress
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel="Pay Now"
        token={onToken}
        stripeKey={publishableKey}
      />
    );
}
export default StripCheckoutButton