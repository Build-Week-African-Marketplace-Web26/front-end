import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import {Home} from './components/Home'
import {PrivateRoute} from './components/PrivateRoute';
import {connect} from 'react-redux'
import {getItems} from './action';
import {User} from './components/User';
import {Seller} from './components/Seller';

import './App.css';


function App({itemsList}) {
  const token = window.localStorage.getItem('token')
   
  const signOut = (e) =>{
  e.preventDefault()
  window.localStorage.removeItem("token")
  }

  // I am react-2
  return (
    <Router>    
      <div className="App">
        <h1>Welcome to African Marketplace</h1>
        <nav className ="nav">
          <div className = "linkDiv">
            {token && <Link className = "appLink"to = '/home'>Home</Link>}
          </div>
          <div className = "linkDiv">
            {!token && <Link className = "appLink"to ='/user'>Are you a customer?</Link>}
          </div>          
          <div className = "linkDiv">
           {token && <Link className = "appLink"to = '/protected'>Dashboard</Link>}
          </div>
          <div className = "linkDiv">
            {!token && <Link className = "appLink" to = '/seller'>Are you a seller?</Link>}
          </div>
          <div className = "linkDiv">
           {token && <Link className = "appLink" to = "/protected" onClick ={signOut}>SignOut</Link>}
          </div>
        </nav>   
        <Switch>
          
          {/* <Route exact path ='/' component ={Home} />*/}
          <Route exact path ='/user' component ={User} />        
          <Route exact path ='/seller' component ={Seller}/>
          {/* <Route path = '/home' component ={Home} /> */}  
          
          <PrivateRoute path = '/protected' component = {Dashboard}/>
          <PrivateRoute path = '/protected' component = {Home}/>       
        </Switch> 
        <Home/>
      </div>
    </Router>
  );
}

const mapStateToProps = (state)=>{
  return{
  itemsList: state.itemsList
  }
}
export default connect(mapStateToProps,{getItems})(App);


