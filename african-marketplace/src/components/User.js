import React from 'react';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import ValidatedSignUpForm from './ValidatedSignUpForm';
import FormikLoginForm from './ValidatedLoginForm';



export const User = () => {


    return(
        <Router>
            <div>
                <div className="navDiv">      
                    <Link className ="user-link" to = '/signup'>Signup</Link>          
                    <Link className ="user-link" to = '/signin'>Login</Link>             
                </div>

                <Switch>
                    <Route path ='/signup' component ={ValidatedSignUpForm} />
                    <Route path ='/signin' component ={FormikLoginForm}/>
                </Switch> 
                              
            </div>
        </Router>
    )
}