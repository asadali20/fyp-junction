import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from '../../student/studentLogin/dashboard';
import Profile from './profile';


const StuRoutes = () => (
  <Switch>
    <Route exact path="/dasboard" component={Dashboard}/>
    <Route path="/profile" component={Profile}/>
  </Switch>
)

export default StuRoutes;