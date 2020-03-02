import React from 'react';
import {Registration} from './Registration';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import {Login} from './Login';



export const Seller = () => {

    return(
        <Router>
            <div>                
                <div className ="navDiv">         
                    <Link className ="user-link" to = '/signup'>Signup</Link>          
                    <Link  className ="user-link" to = '/signin'>Login</Link>         
                </div> 

                <Switch>               
                <Route path ='/signup' component ={Registration} />
                <Route path ='/signin' component ={Login}/>
                </Switch>  
                
            </div>
        </Router>
    )
}