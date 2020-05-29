import React from 'react'
import './header.style.scss'
import { Link } from 'react-router-dom'
import logo from '../../asset/logo.jpg'
import {auth} from '../../firebase/firebase.utils'
import {connect} from 'react-redux'
import Carticon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'
import {createStructuredSelector} from 'reselect'
import {selectCartHidden} from '../../redux/cart/car.selector'
import { selectCurrentUser } from "../../redux/user/user.selector"

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <img className="logo" src={logo} alt="" />
    </Link>
    <div className="link-personal">
      <a
        href="https://github.com/binonguyen1090"
        target="_blank"
        id="navcontent"
      >
        <i className="fab fa-github"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/binonguyen1090"
        target="_blank"
        id="navcontent"
      >
        <i className="fab fa-linkedin"></i>
      </a>
      <a href="https://www.binonguyen.com/" target="_blank " id="navcontent">
        <i className="fas fa-portrait"></i>
      </a>
    </div>
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
const mapStatetoProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});
export default connect(mapStatetoProps)(Header);