 import {GET, ADD, DELETE} from '../action';

 const initialState = {
  produceList:[],
  foodList: [],
  craftList: [],
  artifactsList:[],
  isLoading:false,
  error:false
 }


 export const reducer = (state = initialState, action)=> {
     //console.log("I am the action", action)
     //console.log("I am the state", state)
     switch(action.type){
        case GET:
            //  return{
            //   ...
            //  }
        default:
             return state

     }
 }