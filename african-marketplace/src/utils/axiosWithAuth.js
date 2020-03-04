import axios from 'axios';

export const axiosWithAuth = () => {
 const token = window.localStorage.getItem('token')
    return axios.create({
        headers: {
            authorization: token
        },
        baseURL: `https://production-node-express-review.herokuapp.com/`
        // baseURL: `https://jsonplaceholder.typicode.com/`
        // baseURL: 'https://build-african-marketplace.herokuapp.com/'
        // baseURL: `https://vacation-planner-2020.herokuapp.com/`
        
    });   
};