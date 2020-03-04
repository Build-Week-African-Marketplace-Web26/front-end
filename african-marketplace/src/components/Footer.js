// (ESSIEN)
import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import '../index.css'

const FooterCopy = styled.div`
    font-size: 0.8rem;
    padding: 2% 0 1%;
    background: black;
`
const FooterHeading = styled.h4`
    font-size: 1.2rem;
    margin-bottom: 1%;
    color: white;
`

const FooterText = styled.p`
    margin: 0;
    color: white;
`
const FooterIcons = styled.div`
    margin: 1% 0 0.5%;
    color: white;
`

const Footer = () => {
    return (
        <FooterCopy>
            <FooterIcons>
                <FontAwesomeIcon className="icons" icon={ faInstagram } ></FontAwesomeIcon>
                <FontAwesomeIcon className="icons" icon={ faTwitter } ></FontAwesomeIcon>
                <FontAwesomeIcon className="icons" icon={ faFacebook } ></FontAwesomeIcon>
            </FooterIcons>
            <FooterHeading>African Marketplace</FooterHeading>
            <FooterText>Copyright &copy; {new Date().getFullYear()} SautiAfrica. All Rights Reserved.</FooterText>
        </FooterCopy>
    );
}

export default Footer;