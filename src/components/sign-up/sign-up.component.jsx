import React from 'react'
import './sign-up.style.scss'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'

class SignUp extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }
   
    handleSubmit = async e => {
        e.preventDefault()
        const {
                displayName,
                email,
                password,
                confirmPassword,
              } = this.state;
        
        if (password !== confirmPassword){
          alert("Passords don't match")
          return
        }
        try{
          const { user} = await auth.createUserWithEmailAndPassword(email, password)
          await createUserProfileDocument(user, {displayName})
          this.setState({
            displayName: "",
            email: "",
            password: "",
            confirmPassword: "",
          });
        }catch(error){
          console.error(error)
        }

    }

    handleChange = e =>{
        const {value, name} = e.target
        this.setState({[name]: value})
    }
    render(){
      const {displayName, email, password, confirmPassword} = this.state
        return (
          <div className="sign-up">
            <h2 className="title">I do not have a account</h2>
            <span>Sign up with your email and password</span>

            <form className="sign-un-form" onSubmit={this.handleSubmit}>
              <FormInput
                type="text"
                name="displayName"
                value={displayName}
                label="Display Name"
                required
                handleChange={this.handleChange}
              />
              <FormInput
                type="email"
                name="email"
                value={email}
                label="Email"
                required
                handleChange={this.handleChange}
              />
              <FormInput
                type="password"
                name="password"
                label="Password"
                value={password}
                required
                handleChange={this.handleChange}
              />
              <FormInput
                type="password"
                name="confirmPassword"
                label="Confirm Password"
                value={confirmPassword}
                required
                handleChange={this.handleChange}
              />
              {/* <div className="buttons"> */}
                <CustomButton type="submit">
                  SIGN UP
                </CustomButton>
                
              {/* </div> */}
            </form>
          </div>
        );
    }
}

export default SignUp;