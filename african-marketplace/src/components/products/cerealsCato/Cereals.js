import React from 'react';
import {connect} from 'react-redux';
import { getItems } from '../../../action';


const Cereals = (getItems) => {


    return(

        <div className = "cereals">
            <h2>Our food listing</h2>
        </div>
    )
}

const mapStateToProps = (state)=>{
    return{
    itemsList: state.itemsList
    }
  }

  export default connect(mapStateToProps,{getItems})(Cereals);