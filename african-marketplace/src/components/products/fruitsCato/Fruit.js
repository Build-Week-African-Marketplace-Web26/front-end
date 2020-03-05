import React from 'react';


export const Fruit = ({item, deleteItem, updateItem}) => {
    

    return(
        // <div>
        <div className ="product">
            <h3>Title:{item.title}</h3>
            <h4>Body:{item.body}</h4>
            <button onClick = {deleteItem}>X</button>
            {/* <button onClick = {e => e.stopPropagation(),updateItem}>edit</button> */}
        </div>
       
    )
}