import React, {useState, useEffect} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth'
import {useHistory} from 'react-router-dom'


export const Registration = () => {
    let history = useHistory()

    const [creds, setCreds] = useState({        
        username:'',
        password: '',
        email:''
    })

   //handleChanges
   const handleChanges = (e) => {
       setCreds({...creds,[e.target.name]:e.target.value})
   }

   

   useEffect(()=>{
    axiosWithAuth()    
    .post("/api/register", creds)
    .then(res=>{ console.log("I am the token for registration", res.data.token)
     window.localStorage.setItem('token', res.data.token)
     history.push('/protected')
     
 })
   .catch(err=>console.log(err))
    
})

  //handleSubmit
   const handleSubmit = (e) => {
       e.preventDefault()
    //    axiosWithAuth()    
    //    .post("/api/register", creds)
    //    .then(res=>{ console.log("I am the token for registration", res.data.token)
    //     window.localStorage.setItem('token', res.data.token)
    //     history.push('/protected')
        
    // })
    //   .catch(err=>console.log(err))
      setCreds({username:'',
        password: '',
        email:''})
   }
    
    return(
        <div>
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
            
            <button type = "submit">Register here</button>                
        </form>


    </div> 

    )
}