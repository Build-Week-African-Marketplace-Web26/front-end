import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import {Dashboard} from './components/Dashboard';
import {Home} from './components/Welcome'
import {PrivateRoute} from './components/PrivateRoute';
import {connect} from 'react-redux'
import {getItems} from './action';
import {SignupOrLogin} from './components/SignUp.js/index.js';
import './App.css';
import styled from 'styled-components'; // ReactI (essien)
import Footer from '../src/components/Footer'; // ReactI (essien)

// Styled Components - ReactI - ESSIEN
const TopBar = styled.div`
  background: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10%;
  position: relative;
  z-index: 98;
`
const ReturnToSite = styled.a`
  font-weight: 700;
  width: 20%;
  font-size: 0.8rem;
  color: white;

  &:hover {
    color: #DC3900;
  }
`

const WelcomeHeading = styled.h1`
  font-size: 1.5rem;
  color: white;
`
const LinkContainer = styled.div`
  display:flex;
  justify-content: space-between;
  position: relative;
  left: 55%;
  width: 30%;
  padding: 1% 2%;
`


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
        <TopBar>
        <WelcomeHeading>Welcome to African Marketplace</WelcomeHeading>
        <ReturnToSite href="">Back to SautiAfrica Site</ReturnToSite>
        </TopBar>
        <nav className ="nav">
          <LinkContainer>
            <div className = "linkDiv">
              <Link className = "appLink"to = '/home'>Home</Link>
            </div>
            <div className = "linkDiv">
            {<Link className = "appLink"to = '/protected'>Dashboard</Link>}
            </div>
            <div className = "linkDiv">
            {<Link className = "appLink" to = "/" onClick ={signOut}>SignOut</Link>}
            </div>
          </LinkContainer>
        </nav>   
        <Switch>
          
          <Route exact path ='/' component ={SignupOrLogin} />          
          <Route path = '/home' component ={Home} />
          <Route path = '/protected' component = {Dashboard}/>
          <Route path = '/protected' component = {Dashboard}/>
        </Switch> 
        <Footer />
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
