import React, { Component } from 'react'
import {Form,Row,Col, Button} from 'react-bootstrap';
// import '../studentSignup/studentSignup.css';
import  firebase from  '../../firebase';

const db= firebase.firestore();
var auth = firebase.auth()
var provider = new firebase.auth.FacebookAuthProvider();

class InvesterSignup extends Component {

    state={ 
        firstName: '' ,
        lastName: '',
        userName: '',
        password: '',
        emails: '',
        Phone: '',
        companyName: '',
        companyAddress: '',
        State: '',
        City: '',
        
        };
    
    handleChange = (e) =>
    {
        console.log(e.target.name);
        this.setState({[e.target.name]: e.target.value});
    }

    signup = () => 
    {
    //   const {loginEmail,loginPassword,username,usersignup,usersignin,geterror} = this.state
    const {firstName,lastName , emails, password,userName, Phone, companyName, companyAddress, State, City} = this.state
      var email= this.state.emails
      var pwd = this.state.password  
      var fname=this.state.firstName
      var lname=this.state.lastName
      var uname=this.state.userName
      var phone=this.state.Phone
      var cname=this.state.companyName
      var caddress=this.state.companyAddress
      var state=this.state.State
      var city=this.state.City

    //   var addr=this.state.username
    //   var nic=this.state.username
    //   var pnum=this.state.username
    //   var xy = document.getElementById("myEmail1").pattern;
    //   var y=document.getElementById("myEmail1").value
    //   var x="@a.com"
    //   var res11=y.match(xy)
    //   console.log("text ha innae",y)
    //   console.log("xxxx",x)
      
        firebase.auth().createUserWithEmailAndPassword(email, pwd)
      .then(function(res) {
          alert('Registered Successfully!');
         
          console.log('res =>', res.user.uid);
  
          db.collection('Investor').doc(res.user.uid).set({email,fname,lname,uname,phone,cname,caddress,state,city})
          .then(() => {
              console.log('Added in db');
             
              
      
           
           })
           .catch((e) => {
               console.log('error Adding in db');
           })
      })
      .catch(function(error) {
           //Handle Errors here.
           var errorCode = error.code;
           var errorMessage = error.message;
           console.log(errorMessage);
           alert(errorMessage)
          
        });
       
    }

    render() {
        return (
            <div className='form'>
                <h1>Investor SignUp Form</h1>
                <div className="form-Content">
                    <Form>
                        <Row className='form-Row'>
                            <Col>
                                <Form.Control type='text' name='firstName' value={this.state.firstName} onChange={this.handleChange}  placeholder="First name" />
                            </Col>
                            <Col>
                                <Form.Control type='text' name='lastName' value={this.state.lastName} onChange={this.handleChange}  placeholder="Last name" />
                            </Col>
                        </Row>
                        
                        <Row className='form-Row'>
                            <Col>
                                <Form.Control type='text' name='userName' value={this.state.userName} onChange={this.handleChange}  placeholder="UserName" />
                            </Col>
                            <Col>
                                <Form.Control type='password' name='password' value={this.state.password} onChange={this.handleChange}  placeholder="Password" />
                            </Col>
                        </Row>

                        <Row className='form-Row'>
                            <Col>
                                <Form.Control type='email' name='emails' value={this.state.emails} onChange={this.handleChange}  placeholder="Email" />
                            </Col>
                            <Col>
                                <Form.Control type='text' name='Phone' value={this.state.Phone} onChange={this.handleChange}  placeholder="Phone" />
                            </Col>
                        </Row>

                        <Row className='form-Row'>
                            <Col>
                                <Form.Control type='text' name='companyName' value={this.state.companyName} onChange={this.handleChange}  placeholder="Company Name" />
                            </Col>
                            <Col>
                                <Form.Control type='text' name='companyAddress' value={this.state.companyAddress} onChange={this.handleChange}  placeholder="Company Address" />
                            </Col>
                        </Row>

                        <Row className='form-Row'>
                            <Col>
                                <Form.Control type='text' name='State' value={this.state.state} onChange={this.handleChange}  placeholder="State" />
                            </Col>
                            <Col>
                                
                                <Form.Control type='text' name='City' value={this.state.city} onChange={this.handleChange}  placeholder="City" />
                            </Col>
                        </Row>

                        <Row className='form-Row'>
                            <Col>
                                <Button variant="primary" size="lg" block onClick={this.signup} >Submit</Button>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </div>
        );
    }
}

export default InvesterSignup ;