import React from 'react';
import styled from 'styled-components';

const PricingCont = styled.div`
    background: lightskyblue;
    width: 100%;
`

const PriceList = (props) => {
    return (
        <PricingCont>
            <h1>Compare Competitor Product Pricing</h1>
        <div>
            <h2>{ props.region }</h2>
            <h3>{ props.title }</h3>
            <img src={ props.url } alt="" />
            <p>{ props.price }</p>
        </div>
        </PricingCont>
    );
}

export default PriceList;