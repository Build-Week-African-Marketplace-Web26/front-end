import React from 'react';
import {connect} from 'react-redux';
import { getItems } from '../../../action';


const Beans = ({getItems}) => {


    return(

        <div className = "beans" >
            <h2>Our crafts listing</h2>
        </div>
    )
}

const mapStateToProps = (state)=>{
    return{
    itemsList: state.itemsList
    }
  }

  export default connect(mapStateToProps,{getItems})(Beans);