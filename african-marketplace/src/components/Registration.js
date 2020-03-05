import React, {useState} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {registration} from '../action';

const Registration = (props) => {    

    const [creds, setCreds] = useState({  
        
    })
   
   const handleChanges = (e) => {
       setCreds({...creds,[e.target.name]:e.target.value})
   }

   const handleSubmit = (e) => {
    e.preventDefault()
   props.registration(creds,props)
   .then(()=>props.history.push("/dashboard"))
    .catch(err=>console.log(err))    
   
  }
    
    return(
        <div className = "login">
            <p>New to African marketplace?</p>
            <p>Please create an account!</p>
        <form onSubmit = {handleSubmit}>
           
            <div>
                <input 
                type ="text"
                name = "username"
                placeholder ="username"
                value= {creds.username}
                onChange = {handleChanges}
                />
            </div>
            <div>
                <input 
                type ="password"
                name = "password"
                placeholder ="password"
                value= {creds.password}
                onChange = {handleChanges}                
                />
            </div>
            <div>
                <input 
                type ="email"
                name = "email"
                placeholder ="email"
                value= {creds.email}
                onChange = {handleChanges}
                />
            </div>
            
            <button className = "buttn" type = "submit">Register here</button>                
        </form>

        <Link className ="reg" to = "/"> Already have an account?</Link>
    </div> 

    )
}
export default connect(null, {registration})(Registration)