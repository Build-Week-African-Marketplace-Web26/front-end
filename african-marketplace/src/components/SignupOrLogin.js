import React from 'react';
import FormikSignupForm from './ValidatedSignUpForm';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import FormikLoginForm from './ValidatedLoginForm.js';
import styled from 'styled-components';

const SellOrBuyContainer = styled.div`
    background: rgba(0,0,0,0.8);
    position: absolute;
    z-index: 99;
    width: 100%;
    height: 100vh;
    top:0;
    display: flex;
    align-items: center;
`

export const SignupOrLogin = () => {

    return(
        <Router>
            <SellOrBuyContainer>                
                <div className ="navDiv">         
                    <Link className ="user-link" to = '/signup'>Signup</Link>          
                    <Link className ="user-link" to = '/signin'>Login</Link>         
                </div> 
    
            <Switch>               
                <Route path ='/signup' component ={FormikSignupForm} />
                <Route path ='/signin' component ={FormikLoginForm} />
            </Switch>
            </SellOrBuyContainer>
        </Router>
    )
}