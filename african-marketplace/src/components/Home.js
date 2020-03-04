import React from 'react';
import {SignupOrLogin} from './SignupOrLogin.js';

export const Home = () => {

    return(
        <div>
            <div className = "home">
                {/* <div className= "blank"></div> */}
                {/* <div className ="homeSlogan"></div>          */}
                <SignupOrLogin />
            </div>
        </div>
    )
}