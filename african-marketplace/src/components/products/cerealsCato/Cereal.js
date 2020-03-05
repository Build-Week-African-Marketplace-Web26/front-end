import React from 'react';


export const Cereal = (item) => {
    console.log("I am an item", item)

    return(
        <div>
            <h3>title:{item.item.title}</h3>
        </div>
    )
}