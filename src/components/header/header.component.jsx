import React from 'react'
import './header.style.scss'
import { Link } from 'react-router-dom'
import logo from '../../asset/logo.jpg'
import {auth} from '../../firebase/firebase.utils'
import {connect} from 'react-redux'
import Carticon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <img className="logo" src={logo} alt="" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>

      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
      <Carticon />
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
);
const mapStatetoProps = (state) => ({
  currentUser: state.user.currentUser,
  hidden: state.cart.hidden
})
export default connect(mapStatetoProps)(Header);