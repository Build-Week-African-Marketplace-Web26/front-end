import {axiosWithAuth} from "../utils/axiosWithAuth";

export const GET = "GET"
export const ADD = "ADD"
export const UPDATE = "UPDATE"
export const DELETE = "DELETE"
export const LOGIN = "LOGIN"
export const REGISTER = "REGISTER"

//.post request for login
// export const login = () =>(dispatch)=>{
//     axiosWithAuth()
//     .post("/register", creds)
//     .then(res=>{ console.log("I am the token for registration", res))
//      window.locationStorage.setItem('token',something)
//      // history.push('/protected')
//  })
//    .catch(err=>console.log(err))
// }
//.get request from produce

export const getItems = () => (dispatch) => {
    axiosWithAuth()     
    .get("https://jsonplaceholder.typicode.com/posts")
    // .then(res =>console.log("I am response from getItems", res))
    .then(res =>dispatch({type:GET, payload:res.data }))
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
    .delete(`/posts/${item.id}`,item)
    .then(res=>console.log('I am the response from deleted item', res))
    // .then(res => dispatch({type:DELETE, payload:res.data}))
    .catch(err => console.log(err))
}

