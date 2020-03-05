import {axiosWithAuth} from "../utils/axiosWithAuth";
import axios from 'axios';

export const GET = "GET"
export const ADD = "ADD"
export const UPDATE = "UPDATE"
export const DELETE = "DELETE"
export const LOGIN = "LOGIN"
export const REGISTER = "REGISTER"
export const LOADING = "LOADING"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const REGISTER_SUCCESS = "REGISTER_SUCCESS"


export const registration = user => dispatch => {
    return new Promise((resolve, reject) => {
        dispatch({type:"LOADING"})
        axios
        .post(`https://production-node-express-review.herokuapp.com/api/register`, user)
        .then(res=>{ 
            dispatch({type:"REGISTER_SUCCESS"})    
            window.localStorage.setItem('token', res.data.token)
            resolve(res.data)
        })
        .catch(err => reject(err))
    }
)}



export const login = user => dispatch => {
    return new Promise((resolve, reject) => {
        dispatch({type:"LOADING"})
        axios
            .post(`https://production-node-express-review.herokuapp.com/api/login`, user)
            .then(res => {
                dispatch({type:"LOGIN_SUCCESS"})
                window.localStorage.setItem('token',res.data.token)
                resolve(res)
            })
            .catch(err => reject(err))    
})} 
    
    

export const getItems = () => dispatch => {
    axiosWithAuth()     
    .get("https://jsonplaceholder.typicode.com/posts")
    .then(res =>console.log("I am the list", res))
    // .then(res =>dispatch({type:GET, payload:res.data }))
    .catch(err=> console.log(err))
}

//-------------------------------

//.post request from produce to add items
export const addItem = (item) => (dispatch) => {
    axiosWithAuth()
    .post("https://jsonplaceholder.typicode.com/posts",item)
    // .then(res =>console.log("I am response from add item", res))
    .then(res => dispatch({type:ADD, payload:res.data}))
    .catch(err=> console.log(err))
}

//-----------------------------------

  export const updateItem = (item) => {
   axiosWithAuth()
  .put(`/${item.id}`, item)
  .then(res => console.log("I am the response from updated item", res))
  //.then(res => dispatch({type:UPDATE, payload:}))
  .catch(err => console.log(err))
  }

//-----------------------------------

//.delete request to delete the items

export const deleteItem = (item) => (dispatch)=>{
     axiosWithAuth() 
    .delete(`https://jsonplaceholder.typicode.com/posts/${item.id}`)
    .then(res=>console.log('I am the response from deleted item', res))
    // .then(res => dispatch({type:DELETE, payload:res.data}))
    .catch(err => console.log(err))
}

