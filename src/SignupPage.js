import React, { Component } from 'react';
import fire from './config/Fire'
import Login from './Login.js';
import AppLoggedIn from './AppLoggedIn.js';

class SignupPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };

    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    })
  }

  functiontosee(){
    console.log("THIS WORKS this way");
    
  }

  render() {
    return (
      <div>
        { this.state.user ? ( <AppLoggedIn/> ) : <Login/> }
        </div>
    );
  }
}

export default SignupPage;