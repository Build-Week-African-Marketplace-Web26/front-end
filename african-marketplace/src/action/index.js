import {axiosWithAuth} from "../utils/axiosWithAuth";

export const GET = "GET"
export const ADD = "ADD"
export const DELETE = "DELETE"

//.get request from produce
export const getProduce = () => (dispatch) => {
    axiosWithAuth
    .get()
    .then(res =>console.log("I am response from addProduce", res))
    // .then(res =>dispatch({type:GET, payload: }))
    .catch(err=> console.log(err))
}
//.get request from food
export const getFood = () => (dispatch) => {
    axiosWithAuth
    .get()
    .then(res =>console.log("I am response from addProduce", res))
    // .then(res =>dispatch({type:GET, payload: }))
    .catch(err=> console.log(err))
}

//.get request from artifacts
export const getArtifacts = () => (dispatch) => {
    axiosWithAuth
    .get()
    .then(res =>console.log("I am response from addProduce", res))
    // .then(res =>dispatch({type:GET, payload: }))
    .catch(err=> console.log(err))
}

//.get request from crafts
export const getCrafts = () => (dispatch) => {
    axiosWithAuth
    .get()
    .then(res =>console.log("I am response from addProduce", res))
    // .then(res =>dispatch({type:GET, payload: }))
    .catch(err=> console.log(err))
}

//-------------------------------

//.post request from produce to add items
export const addProduce = (items) => (dispatch) => {
    axiosWithAuth
    .get(/items/)
    .then(res =>console.log("I am response from addProduce", res))
    .catch(err=> console.log(err))
}
//.post request from food
export const addFood = (items) => (dispatch) => {
    axiosWithAuth
    .get(/items/)
    .then(res =>console.log("I am response from addProduce", res))
    .catch(err=> console.log(err))
}

//.post request from artifacts
export const addArtifacts = (items) => (dispatch) => {
    axiosWithAuth
    .get(/items/)
    .then(res =>console.log("I am response from addProduce", res))
    .catch(err=> console.log(err))
}

// .post request from crafts
export const addCrafts = (items) => (dispatch) => {
    axiosWithAuth
    .get(/items/)
    .then(res =>console.log("I am response from addProduce", res))
    .catch(err=> console.log(err))
}

//-----------------------------------

//.delete request to delete the items

