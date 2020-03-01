import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import {Dashboard} from './components/Dashboard';
import {Home} from './components/Home'
import {PrivateRoute} from './components/PrivateRoute';
import {User} from './components/User';
import {Seller} from './components/Seller';


import './App.css';


function App() {
  const token = window.localStorage.getItem('token')
  
  const signOut = (e) =>{
 e.preventDefault()
 window.localStorage.removeItem("token")
  }
  return (
    <Router>    
      <div className="App">
        <h1>Welcome to African Marketplace</h1>
        <nav className ="nav">
        <div className = "linkDiv">
            <Link className = "appLink"to = '/home'>Home</Link>
          </div>
          <div className = "linkDiv">
            <Link className = "appLink"to ='/'>Are you a customer?</Link>
          </div>
          <div className = "linkDiv">
            <Link className = "appLink" to = '/seller'>Are you a seller?</Link>
          </div>
          <div className = "linkDiv">
           {<Link className = "appLink"to = '/protected'>Dashboard</Link>}
          </div>
          <div className = "linkDiv">
           {<Link className = "appLink" to = "/" onClick ={signOut}>SignOut</Link>}
          </div>
        </nav>   
        <Switch>
          
          <Route exact path ='/' component ={User} />          
          <Route exact path ='/seller' component ={Seller}/>
          {/* <Route path = '/home' component ={Home} /> */}
          <Route path = '/protected' component = {Dashboard}/>
          <Route path = '/protected' component = {Dashboard}/>
        </Switch> 
        <Home/>
      </div>
    </Router>
  );
}

export default App;
