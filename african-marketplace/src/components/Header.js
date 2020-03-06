import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route, Link, Switch, Redirect, useHistory, useLocation } from 'react-router-dom';
import FormikLoginForm from './Login';
import FormikSignupForm from './SignUp';
import { Dashboard } from './Dashboard';

const TopBarNav = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: black;
    color: white;
    padding: 0 1%;
    position: relative;
    z-index: 3;
`;

const Nav = styled.div`
    width: 50%;
    display: flex;
    justify-content: flex-end;
`;


export const Header = () => {
    return(
        <Router>
            <div>
                <TopBarNav>
                    <h1>Welcome to African Marketplace</h1>
                    <Nav>
                        <Link className="nav-links" to="/dashboard">Dashboard</Link>
                        <Link className="nav-links" to="/sign-up">Sign Up</Link>
                        <Link className="nav-links" to="/">Log In</Link>
                    </Nav>
                </TopBarNav>
            </div>

            <Switch>
                <Route exact path="/dashboard" component={ Dashboard } />
                <Route exact path="/sign-up" component={ FormikSignupForm } />
                <Route exact path="/" component={ FormikLoginForm } />
            </Switch>
        </Router>
    )
}