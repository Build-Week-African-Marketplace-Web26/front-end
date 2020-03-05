import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {login} from '../action';

 const Login = (props) => {
   
    const [creds, setCreds] = useState({})
     
    const handleChanges = e => {
    setCreds({...creds,[e.target.name]:e.target.value})
   }

    const handleSubmit = e => {
        e.preventDefault()
        props.login(creds)
        .then(res => {
            // console.log('Res: ', res)
            props.history.push('/dashboard')
        })
        .catch(err => {
            console.log('Error: ', err)
        })
    }

    return(
        
        <div>
          
            <Link to = "/registration">Need an account?</Link>
            <p>Please login!</p>
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
            <button type = "submit">Login</button>                
        </form>


    </div> 

    )
}
export default connect(null,{login})(Login)