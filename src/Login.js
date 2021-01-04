import React, { useState } from 'react';
import fire from './config/Fire';
import './Login.css';
import { Modal, Button, ButtonToolbar } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import App from './App';
import { Link } from 'react-router-dom';

 
class Login extends React.Component{
    constructor(props){
        super(props);
        this.state ={addModalShow : true,
            fields : {},
            errors : {}
        }
        
    }
    handleValidation(){
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
        if(!fields["email"]){
            formIsValid = false;
            errors["email"] = "Cannot be empty";
          }
      
          if(typeof fields["email"] !== "undefined"){
            let lastAtPos = fields["email"].lastIndexOf('@');
            let lastDotPos = fields["email"].lastIndexOf('.');
      
            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') == -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
              formIsValid = false;
              errors["email"] = "Email is not valid";
            }
          }
          this.setState({errors: errors});
          return formIsValid;
        }
        contactSubmit(e){
            e.preventDefault();
            if(this.handleValidation()){
              alert("Form submitted");
            }else{
              alert("Form has errors.")
            }
        
          }
          handleChange(field, e){    		
            let fields = this.state.fields;
            fields[field] = e.target.value;        
            this.setState({fields});
          }

    
    handleModal(){
        this.setState({addModalShow: !this.state.addModalShow})
        
    }
    
    
    signUp() {
        const email = document.querySelector("#email").value;
        const password = document.querySelector("#password").value;

        fire.auth().createUserWithEmailAndPassword(email, password)
        .then((u) => {
            console.log("Succesfully signed");
            alert("Signed Up");
        })
        .catch((err) =>{
            console.log("eroor" + err.toString());
            alert("Error" + err.toString());
        })

    }
  
    login() {
        const email = document.querySelector("#email").value;
        const password = document.querySelector("#password").value;

        fire.auth().signInWithEmailAndPassword(email, password)
        .then((u) => {
            console.log("Succesfully logged");
            alert("Succesfully logged");
        })
        .catch((err) =>{
            console.log("eroor" + err.toString());
            alert("eroor" + err.toString());
        })
    }
    
    
    render() {
        
        return (
            
            <div >
                
                    
                    <Modal className="login_modal" show={this.state.addModalShow} onHide={() => this.handleModal()}>
                        <Modal.Header style={{ textAlign: 'center' }} className="ui-button-icon-only" >Login or Signup if first-time</Modal.Header>
                        <Modal.Body >
                        <div className="container" style={{ textAlign: 'center' }}>
                        
                            <div>
                            
                                <div className="placeholdernames">Email</div>
                                <input class="input" refs="email" onChange={this.handleChange.bind(this, "email")} value={this.state.fields["email"]} autocomplete="off" size="35" id="email" placeholder="Enter Email to login or SignUp.." type="text"/>
                            </div>
                            <div className="Passwordplaceholdermargin">
                            
                                <div className="placeholdernames">Password</div>
                                <input class="input" autocomplete="off" size="35" id="password" placeholder="Enter Password.." type="password"/>
                            </div>
                            <button id="submit" value="Submit" className="buttons" style={{margin: '10px'}} onClick={this.login}>Login</button>
                            
                            <button className="buttons" style={{margin: '10px'}} onClick={this.signUp}>Sign Up</button>
                            
           
                        </div>
                        </Modal.Body>
                        <Modal.Footer style={{ textAlign: 'center' }}>
                            
                            <Link to='/'>
                            <button className="buttons"  onClick={() => this.handleModal()}>Close</button>
                            </Link>
                            
                            
                        </Modal.Footer>
                    </Modal>
                    
                    
            </div>
            
        )
      }
    
}
export default Login;