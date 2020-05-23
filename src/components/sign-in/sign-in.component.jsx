import React from 'react'
import './sign-in.style.scss'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import { signInWithGoogle } from '../../firebase/firebase.utils'

class SignIn extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }
   
    handleSubmit = e => {
        e.preventDefault()
        this.setState({ email:'', password:''})
    }

    handleChange = e =>{
        const {value, name} = e.target
        this.setState({[name]: value})
    }
    render(){
        return (
          <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={this.handleSubmit}>
              <FormInput
                type="email"
                name="email"
                value={this.state.email}
                label="email"
                required
                handleChange={this.handleChange}
              />
              <FormInput
                type="password"
                name="password"
                label="password"
                value={this.state.password}
                required
                handleChange={this.handleChange}
              />
              <div className="buttons">
                <CustomButton type="submit" value="submit">Sign In </CustomButton>
                <CustomButton onClick={signInWithGoogle} isSignInGoogle>Google Sign In</CustomButton>
              </div>
            </form>
          </div>
        );
    }
}

export default SignIn