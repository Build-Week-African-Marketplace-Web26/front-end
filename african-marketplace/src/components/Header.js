import React from'react';
import {Link} from 'react-router-dom'
 


export default function Header(props) {
 
    const logout =()=>{
        localStorage.removeItem("token")
        props.history.push('/')
    }

    
    return (

     <div className ="header">
        
      {localStorage.getItem("token") ? <button onClick = {logout}>logout</button>:null}
     </div>        
    )
}



