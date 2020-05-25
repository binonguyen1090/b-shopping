import {createSelector} from 'reselect'

const selectCart = state => state.cart

export const setlectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems

)

export const selectCartItemsCount = createSelector(
         [setlectCartItems],
          cartItems =>
           cartItems.reduce((accu, cartItem) => accu + cartItem.quantity, 0)
       );