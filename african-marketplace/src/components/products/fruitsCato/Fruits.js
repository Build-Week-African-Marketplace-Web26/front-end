import React, {useState,useEffect} from 'react';
import {getItems,deleteItem, updateItem} from '../../../action';
import {connect} from 'react-redux';
import {Fruit} from './Fruit';
import Form from '../../Form'

 const Fruits = ({getItems,deleteItem,updateItem, itemsList}) => {
    console.log("I am the itemsList", itemsList)
    const[bool, setBool] = useState(1)
  useEffect(()=>{
  getItems()
  },[bool])
    return(
        <div>
            <h2>Our fruitshop</h2>          
            <div>
                <Form />
            </div> 
            <div  className = "productList">
           
            {itemsList.length > 0 && itemsList.map(item=>(                
                <Fruit  key = {item.id}  item = {item} deleteItem = {deleteItem}
                updateItem = {updateItem} setBool = {setBool} />                
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

  export default connect(mapStateToProps,{getItems, deleteItem, updateItem})(Fruits);