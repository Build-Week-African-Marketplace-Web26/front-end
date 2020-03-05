import React from 'react';
import {connect} from 'react-redux';
import { getItems } from '../../../action';


const Others = ({getItems}) => {

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

  export default connect(mapStateToProps,{getItems})(Others);