// import React, { Component } from 'react'
// import {Form, ButtonToolbar, Button, Jumbotron} from 'react-bootstrap';
// import './investerlogin.css';
// import Header from '../header/header';

// export default class investorLogin extends Component {
    
//     state=
//     {
//         email: '',
//         password: '',
//         insigin :false,
//         indash: true

        
//     };

//     handleChange = (e) =>
//     {
//         console.log(e.target.name);
//         this.setState({[e.target.name]: e.target.value});
//     }

//     rendersigin=()=>{

//         return (
//             <div>
//                 <div className='invester-login'>
//                     <Header/>
//                 <h2 className='welcome'>Welcome</h2>
//                 <h1 className='font-weight-bold'>FYP Junction.com</h1>
//                 <div className='Login-form'>
//                 <Jumbotron>
//                 <Form>
//                     {/* <h1 className='font-weight-bold'>FYP Junction.com</h1> */}
//                     {/* <h2 className='welcome'>Welcome</h2> */}
//                     <Form.Group controlId="formBasicEmail">
//                         <Form.Label><b>Email address</b></Form.Label>
//                         <Form.Control type="email" size='lg' placeholder="Enter email" name='email' value={this.state.email} onChange={this.handleChange} />
//                     </Form.Group>

//                     <Form.Group controlId="formBasicPassword">
//                         <Form.Label><b>Password</b></Form.Label>
//                         <Form.Control type="password" size='lg' placeholder="Password" name='password' value={this.state.password} onChange={this.handleChange} />
//                     </Form.Group>

//                     <ButtonToolbar>
//                         <Button variant="primary" size="md" block   onClick={this.signin}>Login</Button>
//                     </ButtonToolbar>

//                     <div className='text-center pt-3'>
//                         Or cintinue with your google account
//                     </div>
//                 </Form>
//                 </Jumbotron>
//                 </div>
//                 </div>
//             </div>
//         )
//     }
// }


import React, { Component } from 'react';
import {Form, ButtonToolbar, Button, Jumbotron} from 'react-bootstrap';
// import '../studentLogin/studentLogin.css';
import  firebase from '../../firebase';
import { thisExpression } from '@babel/types';
// import Studashbord from "./studashbord"
import InvestorDashboard from './investorDasboard';
import Header from '../header/header';

const db= firebase.firestore();
var auth = firebase.auth()
var provider = new firebase.auth.FacebookAuthProvider();


class InvestorLogin extends Component {

    state=
    {
        email: '',
        password: '',
        insigin :true,
        indash: false

        
    };

    handleChange = (e) =>
    {
        console.log(e.target.name);
        this.setState({[e.target.name]: e.target.value});
    }  

    signin =  () => {
        const {email , password, indash,insigin } = this.state
          var mail=this.state.email
          var pass=this.state.password
    
          
          
            firebase.auth().signInWithEmailAndPassword(mail,pass)
        .then((res)=>{
            // alert("successfully signin");
            // db.collection("swiper").doc(res).get(function (){
            //   console.log(res.data,"for check box check")   
            // })
           this.setState({
              insigin: false,
              indash: true 
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
        const{indash , insigin}= this.state
      return(
          <div>
              {!indash && insigin && <this.rendersigin /> }
              { indash && !insigin &&  <InvestorDashboard />}

          </div>
      )
    }
}

export default InvestorLogin;