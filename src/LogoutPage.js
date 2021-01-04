import React from 'react';
import fire from './config/Fire';
import { Link } from 'react-router-dom';  
import { Modal, Button, ButtonToolbar } from 'react-bootstrap';
import './Logout.css';  

class LogoutPage extends React.Component{
    constructor(props){
        super(props);
        this.state ={addModalShow : true}
    }


    handleModal(){
        this.setState({addModalShow: !this.state.addModalShow})
    }

    logout(){
        fire.auth().signOut();
        console.log("signedout");
        alert("Logged Out");
    }
    render(){
        return (
            <div>
            <Link to='/'>
                <Modal className="logout_modal" show={this.state.addModalShow} onHide={() => this.handleModal()}>
                        <Modal.Header style={{ textAlign: 'center' }} className="ui-button-icon-only" >Sure Wanna Logout?</Modal.Header>
                        <Modal.Body >
                        <div className="container" style={{ textAlign: 'center' }}>
                            <div>
                               
                            <Button className="buttons_out" onClick={this.logout}>Yes, Logout</Button>
           
                        </div>
                        </div>
                        </Modal.Body>
                        <Modal.Footer style={{ textAlign: 'center' }}>
                            <Button className="buttons_out"  onClick={() => this.handleModal()}>No</Button>
                        </Modal.Footer>
                </Modal>
            </Link>
          </div>
        )
    }
}
export default LogoutPage;

