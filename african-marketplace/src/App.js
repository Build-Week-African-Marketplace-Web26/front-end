import React from 'react';
import { Route} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import {Home} from './components/Home'
import {PrivateRoute} from './components/PrivateRoute';
import Login from './components/Login';
import Registration from './components/Registration'
import Header from './components/Header';
import './App.css';

export default function App() {

  return (         
      <div className="App">         
          
          <Route path = '/' component={Header}/> 
          <Route exact path ='/' component ={Login}/> 
          <Route path ='/registration' component ={Registration}/>                
          <PrivateRoute path = '/dashboard' component = {Dashboard}/>
          <PrivateRoute path = '/home' component = {Home}/> 
              
      </div>        
  );
}



