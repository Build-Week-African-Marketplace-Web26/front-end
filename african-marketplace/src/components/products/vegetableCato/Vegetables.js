import React from 'react';
import {connect} from 'react-redux';
import { getItems } from '../../../action';


const Vegetables = ({getItems}) => {

    return(
        <div>
            
        </div>
    )
}

const mapStateToProps = (state)=>{
    return{
    itemsList: state.itemsList
    }
  }

  export default connect(mapStateToProps,{getItems})(Vegetables);