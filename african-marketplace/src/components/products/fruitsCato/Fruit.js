import React from 'react';

export const Fruit = ({item, setBool, deleteItem, updateItem}) => {
    function remove(){
      deleteItem(item.id)
      setBool((bool)=>bool+1)      
    }
    return(        
        <div className ="product">
            <h3>Title:{item.title}</h3>
            <h4>Body:{item.body}</h4>
            <button onClick = {remove}>X</button>
            <button onClick = {updateItem}>edit</button>
        </div>
       
    )
}