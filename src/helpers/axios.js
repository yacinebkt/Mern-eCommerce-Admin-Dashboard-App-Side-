
import axios from 'axios';
import { api } from '../urlConfig';
import store from "../store/store"
import { authConstants } from '../actions/constants';

const token = window.localStorage.getItem("token");


const axiosInstance = axios.create({
    baseURL: api,
    headers: {
        "Authorization" : token ? `Bearer ${token}` : ""
    }
});


/* 24 fix jtw */
axiosInstance.interceptors.request.use((req) =>{
    const { auth } = store.getState();
    if (auth.token) {
        req.headers.Authorization= `Bearer ${auth.token}`;
    }
    return req;
})

axiosInstance.interceptors.response.use((res) => {
    return res;
}, (error) => {
    console.log(error.response);

    const { status } = error.response;
    /* if (status === 500 || status === 400 ) */
    if (status === 500  ) {
        localStorage.clear();
        store.dispatch({ type : authConstants.LOGOUT_SUCCESS});
    }
    return Promise.reject(error);
})


export default axiosInstance;