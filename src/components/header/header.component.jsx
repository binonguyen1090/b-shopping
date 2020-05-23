import React from 'react'
import './header.style.scss'
import { Link } from 'react-router-dom'
import logo from '../../asset/logo.jpg'
import {auth} from '../../firebase/firebase.utils'
import {connect} from 'react-redux'

const Header = ({ currentUser }) => (
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
    </div>
  </div>
);
const mapStatetoProps = (state) => ({
  currentUser: state.user.currentUser
})
export default connect(mapStatetoProps)(Header);