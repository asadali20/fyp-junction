import React from 'react';
import {Switch , Route} from 'react-router-dom';
import Home from './home/home';
import About from './about/about';
import StudentSignup from './student/studentSignup/studentSignup';
import InvesterSignup from './invester/investerSignup';
import StudentLogin from './student/studentLogin/studentLogin';
import Post from './student/studentLogin/post';
import  firebase from  '../firebase';
import InvesterLogin from '../components/invester/investorLogin';

const db = firebase.firestore();
var auth = firebase.auth()
var provider = new firebase.auth.FacebookAuthProvider();
// import about from ''
const Main = () =>
(
    <Switch>
        <Route exact path='/' component={Home}/>   
        <Route exact path='/home' component={Home}/>   
        <Route path='/about' component={About}/>
        <Route path='/studentSignup' component={StudentSignup}/>
        <Route path='/investerSignup' component={InvesterSignup}/>
        <Route path='/studentLogin' component={StudentLogin}/>
        <Route path='/investorLogin' component={InvesterLogin}/>
        <Route path='/post' component={Post}/>
    </Switch>

)
export default Main;
