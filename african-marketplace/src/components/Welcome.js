import React from 'react';
import styled from 'styled-components';
import img from './image/eggselling.png';
import '../App1.css';

const WelcomeDiv = styled.div`
    background-image: url(${ img });
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    filter: blur(5px);
    height: 100vh;
    width: 100%;

`;

const WelcomeInner = styled.div`
    background: rgba(0,0,0,0.6);
    width: 100%;
    height: 100vh;
    position: absolute;
    z-index: 2;
    top: 9.3%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const WelcomeSubHeading = styled.h2`
    color: white;
    margin: 1.5% 0;
    font-weight: 700;
    font-size: 1.7rem;
`;

export const Welcome = () => {
    return(
        <section>
            <WelcomeDiv>
            </WelcomeDiv>
            <WelcomeInner>
                <WelcomeSubHeading>Vendor Sign Up or Log In</WelcomeSubHeading>
            </WelcomeInner>
        </section>
    );
}