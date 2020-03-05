 import {GET, ADD, UPDATE, DELETE, LOADING, LOGIN_SUCCESS,REGISTER_SUCCESS} from '../action';

 const initialState = {
  itemsList:[],
  isLoading:false,
  error:false
 }


 export const reducer = (state = initialState, action)=> {
     console.log("I am the action", action)
     //console.log("I am the state", state)
     switch(action.type){
      case LOADING:
        return{
         ...state,
         isLoading: true
        }
        case REGISTER_SUCCESS:
          return{
           ...state,
          isLoading:false
          }
        case LOGIN_SUCCESS:
             return{
              ...state,
             isLoading:false
             }
        case GET:
             return{
              ...state,
              itemsList: action.payload,
              isLoading:true,
              error: false
             }
        case ADD:
            return{
                ...state,
              itemsList: [...state.itemsList, action.payload],
              isLoading:true,
              error: false
            }
        case UPDATE:
            return{
                ...state,
              itemsList: action.payload,
              isLoading:true,
              error: false
            }
        case DELETE:
            return{
                ...state,
              itemsList: [...state.itemsList, state.itemsList.length >0 && state.itemsList.filter(item=>item.id!==action.payload.id)],
              isLoading:true,
              error: false
            }
        default:
             return state

     }
 }