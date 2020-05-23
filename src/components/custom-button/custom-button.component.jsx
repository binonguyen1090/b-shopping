import React from 'react'
import './custom-button.style.scss'

const CustomButton = ({
  children,
  isSignInGoogle,
  inverted,
  ...otherProps
}) => (
  <button
    className={`${isSignInGoogle ? "google-sign-in" : ""} 
                ${inverted ? "inverted" : ""}
                custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);
export default CustomButton