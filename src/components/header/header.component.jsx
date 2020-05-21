import React from 'react'
import './header.style.scss'
import { Link } from 'react-router-dom'
import logo from '../../asset/logo.jpg'

const Header = () => (
  <div className="header">
    <Link className="logo-container" to="/">
      <img className="logo" src={logo} alt=""/>
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>
    </div>
  </div>
);
export default Header