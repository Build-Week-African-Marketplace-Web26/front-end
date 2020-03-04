import React from 'react';
import ValidatedSignUpForm from './ValidatedSignUpForm';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import FormikLoginForm from './ValidatedLoginForm.js';
import styled from 'styled-components';

const SellOrBuyContainer = styled.div`
    background: rgba(0,0,0,0.8);
    position: absolute;
    z-index: 98;
    width: 100%;
`

export const Seller = () => {

    return(
        <Router>
            <SellOrBuyContainer>                
                <div className ="navDiv">         
                    <Link className ="user-link" to = '/signup'>Signup</Link>          
                    <Link  className ="user-link" to = '/signin'>Login</Link>         
                </div> 

                <Switch>               
                <Route path ='/signup' component ={ValidatedSignUpForm} />
                <Route path ='/signin' component ={FormikLoginForm}/>
                </Switch>  
            </SellOrBuyContainer>
        </Router>
    )
}