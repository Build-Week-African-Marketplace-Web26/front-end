import React, {useState} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth'
import {useHistory} from 'react-router-dom'


export const Registration = () => {
    let {history} = useHistory()

    const [creds, setCreds] = useState({
        name: '',
        username:'',
        password: ''
    })

   //handleChanges
   const handleChanges = (e) => {
       setCreds({...creds,[e.target.name]:e.target.value})
   }

   //handleSubmit

   const handleSubmit = (e) => {
       e.preventDefault()
       axiosWithAuth()
       .post("/register", creds)
       .then(res=>{ console.log("I am the token for registration", res)
    //  window.locationStorage.setItem('token',something)
        history.push('/protected')
    })
      .catch(err=>console.log(err))
   }
    
    return(
        <div>
            <p>New to African marketplace?</p>
            <p>Please create an account!</p>
        <form onSubmit = {handleSubmit}>
            <div>
                <input 
                type ="text"
                name = "name"
                placeholder ="name"
                value= {creds.name}
                onChange = {handleChanges}
                />
            </div>
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
            
            <button type = "submit">Register here</button>                
        </form>


    </div> 

    )
}