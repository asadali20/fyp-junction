import React, { Component } from 'react';
import {Form, ButtonToolbar, Button, Jumbotron} from 'react-bootstrap';
import '../studentLogin/studentLogin.css';
import  firebase from '../../../firebase';
import { thisExpression } from '@babel/types';
import Studashbord from "./studashbord"
import Header from '../../header/header';

const db= firebase.firestore();
var auth = firebase.auth()
var provider = new firebase.auth.FacebookAuthProvider();


class studentLogin extends Component {

    state=
    {
        email: '',
        password: '',
        stsigin :false,
        stdash: true

        
    };

    handleChange = (e) =>
    {
        console.log(e.target.name);
        this.setState({[e.target.name]: e.target.value});
    }  

    signin =  () => {
        const {email , password, stdash,stsigin } = this.state
          var mail=this.state.email
          var pass=this.state.password
    
          
          
            firebase.auth().signInWithEmailAndPassword(mail,pass)
        .then((res)=>{
            // alert("successfully signin");
            // db.collection("swiper").doc(res).get(function (){
            //   console.log(res.data,"for check box check")   
            // })

            localStorage.setItem("uid",res.user.uid )
           this.setState({
              stsigin: false,
              stdash: true 
           })
       
        } )
    
        .catch((e) => {
            alert('NO RECORD FOUND',e);
        })
        
        .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
        // ...
        });  
        
        
      }

      rendersigin=()=>{
        return (
            <div className='Student-login'>
                <Header/>
                <h2 className='welcome'>Welcome</h2>
                <h1 className='font-weight-bold'>FYP Junction</h1>
                <div className='Login-form'>
                <Jumbotron>
                <Form>
                    {/* <h1 className='font-weight-bold'>FYP Junction.com</h1> */}
                    {/* <h2 className='welcome'>Welcome</h2> */}
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label><b>Email address</b></Form.Label>
                        <Form.Control type="email" size='lg' placeholder="Enter email" name='email' value={this.state.email} onChange={this.handleChange} />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label><b>Password</b></Form.Label>
                        <Form.Control type="password" size='lg' placeholder="Password" name='password' value={this.state.password} onChange={this.handleChange} />
                    </Form.Group>

                    <ButtonToolbar>
                        <Button variant="primary" size="md" block   onClick={this.signin}>Login</Button>
                    </ButtonToolbar>

                    {/* <div className='text-center pt-3'>
                        Or cintinue with your google account
                    </div> */}
                </Form>
                </Jumbotron>
                </div>
            </div>
        )
      }
        

    render() {
        const{stdash , stsigin}= this.state
      return(
          <div>
              {!stdash && stsigin && <this.rendersigin /> }
              { stdash && !stsigin &&  <Studashbord />}

          </div>
      )
    }
}

export default studentLogin;