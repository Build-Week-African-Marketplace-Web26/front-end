import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import {Dashboard} from './components/Dashboard';
import {Home} from './components/Home'
import {PrivateRoute} from './components/PrivateRoute';
import {connect} from 'react-redux'
import {getItems} from './action';
import {User} from './components/User';
import {Seller} from './components/Seller';
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
`
const ReturnToSite = styled.a`
  font-weight: 700;
  width: 20%;
  font-size: 0.8rem;
  color: white;
`

const WelcomeHeading = styled.h1`
  font-size: 1.5rem;
  color: white;
`
const LinkContainer = styled.div`
  display:flex;
  justify-content: space-between;
  position: relative;
  left: 37.5%;
  width: 50%;
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
        <ReturnToSite href="">Back to Africa Marketplace Site</ReturnToSite>
        </TopBar>
        <nav className ="nav">
          <LinkContainer>
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
          </LinkContainer>
        </nav>   
        <Switch>
          
          <Route exact path ='/' component ={User} />          
          <Route exact path ='/seller' component ={Seller}/>
          {/* <Route path = '/home' component ={Home} /> */}
          <Route path = '/protected' component = {Dashboard}/>
          <Route path = '/protected' component = {Dashboard}/>
        </Switch> 
        <Home/>
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
