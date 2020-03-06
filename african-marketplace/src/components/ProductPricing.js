import React, { useState, useEffect } from "react";
import axios from "axios";
import PriceList from './PriceList';

const ProductPricing = () => {
    const [info, setInfo] = useState([]);

    useEffect(() => {
        axios.get("").then(res => {
            setInfo(res.data);
        }).catch(err => {
            console.log("The data was not returned", err);
        });
    }, []);

    return (
        <div>
            <PriceList region={ info.region } title={ info.title } image={ info.url} price={ info.price } />
        </div>
    );
}

export default ProductPricing;