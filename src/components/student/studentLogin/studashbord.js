import React, { Component } from 'react'
import {NavDropdown,Nav,Navbar, Button, DropdownButton} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import '../studentLogin/studashboard.css' ;
import {Layout,Header,Navigation,Drawer,Content} from 'react-mdl';
import StuRoutes from '../studentLogin/Sturoutes';
import Cards from '../../cards/Cards'
import  firebase from  '../../../firebase';
const db= firebase.firestore();
var auth = firebase.auth()
var provider = new firebase.auth.FacebookAuthProvider();

var datas=[]
export default class Studashbord extends Component {
constructor(props){
super(props)
this.state={
    data:[]
}
}
   
    // componentDidMount()
    // {
      //url,titles,discriptio,ideas,category,uid1,uid
      
     
//       datas.push("123") 
     
//       var mycard12=document.getElementById("mycard");
//       db.collection("post").get()
//          .then(function(querysnapshot){
//              querysnapshot.forEach(function(doc){
//                  console.log(doc.data(),"########")
               
//             console.log(datas,"!!!!!!!!!!!")
                 
                 
// //                  mycard12.innerHTML +=` 
                 
                 
// //                <div class="card" style="width: 18rem; display: inline-block; border:2px solid; margin-top: 25px; margin-left: 10px;  ">
// //     <img src='${doc.data().url}' class="card-img-top" alt="...">
// //     <div class="card-body">
// //       <h5 class="card-title">Card title</h5>
// //       <p class="card-text">latitude:  ' ${doc.data().discriptio} '
// //      <br/>
// //       longitude:    '${doc.data().ideas}'
// //       <br/>
// //       Discription :    '${doc.data().category}'
// //       <br/>
// //        </p>
    
// //       <a href="/post${doc.data().uid1}" class="btn btn-primary">Go somewhere</a>
// //       <Link/>
// //     </div>
// //   </div>
              
// //                `
//              })
//          })
     
        
     
//     }  


//     <div className= "card text-center">
//     <div className="overflow">
//         <img src={img1} alt=""/>
//     </div>
//     <div className="card-body text-dark">
//         <h4 className="card-title">Card title</h4>
//         <p className="card-text text-secondary">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor sint velit at harum</p>
//         <a href="#" className="btn btn-outline-success">Any Where</a>
    
//     </div>  
// </div>
    render() { 
        db.collection("post").get()
        .then(function(querysnapshot){
            querysnapshot.forEach(function(doc){
                console.log(doc.data(),"!!!!########")
              datas.push(doc.data())
           console.log(doc.data(),"!!!!!!!!!!!")
           console.log(datas,"2222222222")       
    
            })
        })

        console.log(datas,"2222222222")       
    
        return (
            <div className='stu-dashboard'>
                <div className='stu-navbar'>
                    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                        <Navbar.Brand href="#home">FYP Junction</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            
                            <Nav className='ml-auto'>
                            <li>
                                <Link to="/post">
                                    <Button>
                                    Add post
                                    </Button>
                                </Link>
                            </li>
                            <Nav.Link href="/studentLogin">Home</Nav.Link>
                            <Nav.Link href="">settings</Nav.Link>
                            <Nav.Link href="">Profile</Nav.Link>
                            <Nav.Link href="">Logout</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </div>

                <div id="mycard">
                </div>
            </div>
        )
    }
}
