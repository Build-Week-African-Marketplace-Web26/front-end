import React from 'react';
import {getItems, addItem, deleteItem, updateItem} from '../../../action';
import {connect} from 'react-redux';
import {Fruit} from './Fruit';
import Form from '../../Form'

 const Fruits = ({deleteItem,updateItem, itemsList}) => {
    console.log("I am the itemsList", itemsList)

    return(

        <div>
            <h2>Our fruitshop</h2>
            {/* <button onClick ={addItem}>Add Items</button> */}
            {/* <button onClick ={deleteItem}>Delete Items</button> */}
            <div>
                <Form />
            </div> 
            <div  className = "productList">
           
            {itemsList.length > 0 && itemsList.map(item=>(                
                <Fruit  key = {item.id}  item = {item} deleteItem = {deleteItem}
                updateItem = {updateItem}/>
                
            ))}
            </div> 
        </div>
    )
}

const mapStateToProps = (state)=>{
    return{        
    itemsList: state.itemsList
    }
  }

  export default connect(mapStateToProps,{getItems, addItem, deleteItem, updateItem})(Fruits);