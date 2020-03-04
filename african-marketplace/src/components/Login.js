import React,{useState} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth'
import {useHistory} from 'react-router-dom'


export const Login = () => {
    
    let history = useHistory()

    const initialState = {
        username:'',
        password: ''
    }

    const [creds, setCreds] = useState(initialState)

   //handleChanges
    const handleChanges = (e) => {
    setCreds({...creds,[e.target.name]:e.target.value})
   }

   //handleSubmit

   const handleSubmit = (e) => {
    e.preventDefault()
    axiosWithAuth()
    .post("/api/login", creds)
    .then(res=>{ console.log("I am the token for login", res)
     window.localStorage.setItem('token',res.data.token)
     history.push('/protected')
 })
   .catch(err=>console.log(err))
    setCreds(initialState)
   }

    return(
        <div>
            <p>Already a member?</p>
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