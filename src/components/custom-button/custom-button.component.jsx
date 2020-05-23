import React from 'react'
import './custom-button.style.scss'

const CustomButton = ({children, isSignInGoogle, ...otherProps}) => (
    <button 
    className={`${isSignInGoogle ? 'google-sign-in' : ''} custom-button`} 
                {...otherProps}
            >
        {children}
    </button>
)
export default CustomButton