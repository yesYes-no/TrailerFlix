import React, { Component } from 'react';
import { Modal, Button, Row, Col, Form} from 'react-bootstrap';

export class LoginPage extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <Modal  size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Login/SignUp
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <div className="container">
            <div>
              <div>Email</div>
            <input id="email" placeholder="Enter Email.." type="text"/>
           </div>
            <div>
              <div>Password</div>
              <input id="password" placeholder="Enter Password.." type="text"/>
            </div>
            <button style={{margin: '10px'}} onClick={this.login}>Login</button>
            <button style={{margin: '10px'}} onClick={this.signUp}>Sign Up</button>
           
          </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={this.props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal>
        );
    }
}


//<Button variant="primary" onClick={this.openModal}>Login</Button>
//              <Modal show={this.state.isOpen} onHide={this.closeModal}> 
//              <Modal.Header closeButton> <Modal.Title >Login</Modal.Title>
//          </Modal.Header>
          
//          <div style={{ textAlign: 'center' }}>
//            <div>
 //             <div>Email</div>
 //             <input id="email" placeholder="Enter Email.." type="text"/>
 //           </div>
 //           <div>
  //            <div>Password</div>
  //            <input id="password" placeholder="Enter Password.." type="text"/>
  //          </div>
  //          <button style={{margin: '10px'}} onClick={this.login}>Login</button>
  //          <button style={{margin: '10px'}} onClick={this.signUp}>Sign Up</button>
           
   //       </div>
          
   //       </Modal>