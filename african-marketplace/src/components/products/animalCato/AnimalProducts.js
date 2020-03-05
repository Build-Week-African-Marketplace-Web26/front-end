import React from 'react';
import {connect} from 'react-redux';
import { getItems } from '../../../action';


const AnimalProducts = ({getItems}) => {
  

    return(

        <div className = "animalproducts">
            <h2>Our Artifacts listing</h2>
        </div>
    )
}

const mapStateToProps = (state)=>{
    return{
    itemsList: state.itemsList
    }
  }

  export default connect(mapStateToProps,{getItems})(AnimalProducts);
