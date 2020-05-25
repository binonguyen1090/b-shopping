import React from 'react';
import './App.css';
import Homepage from './pages/homepage/homepage.component';
import { Switch, Route, Redirect } from 'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/signin_signup/signin_signup.component';
import CheckoutPage from "./pages/checkout/checkout.component";
import {auth, createUserProfileDocument} from './firebase/firebase.utils'
import { connect } from "react-redux";
import {setCurrentUser} from './redux/user/user.action'
import {selectCurrentUser} from './redux/user/user.selector'
import { createStructuredSelector } from "reselect";


class App extends React.Component {
  // constructor(){
  //   super()
  //   this.state = {
  //     currentUser: null
  //   }
  // }

  unSubscribeFromAuth = null
  componentDidMount(){
    const {setCurrentUser} = this.props

    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth){
        const userRef = await createUserProfileDocument(userAuth)
        userRef.onSnapshot(snapShot => {
            setCurrentUser({
              // currentUser:{
                id: snapShot.id,
                ...snapShot.data()
              // }
            })
        })
      }else{
        setCurrentUser(userAuth);
      }
    });
  }
  componentWillUnmount(){
    this.unSubscribeFromAuth()
  }
  render(){

    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />

          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
