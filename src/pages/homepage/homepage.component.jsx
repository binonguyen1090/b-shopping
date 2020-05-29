import React from 'react'
import { Link } from "react-router-dom";

import './homepage.style.scss'
import Directory from '../../components/directory/directory.component';
const Homepage = () => (
  <div className="homepage">
    <Directory />
    <div className="splashFooter">
      <Link to="/" className="no-underline">
        Terms of Service
      </Link>
      <Link to="/" className="no-underline">
        Privacy
      </Link>
      <Link to="/" className="no-underline">
        Help
      </Link>
      <Link to="/" className="no-underline">
        Iphone App
      </Link>
      <Link to="/" className="no-underline">
        Users
      </Link>
      <Link to="/" className="no-underline">
        Collections
      </Link>
      <Link to="/" className="no-underline">
        Topics
      </Link>
    </div>
  </div>
);
export default Homepage