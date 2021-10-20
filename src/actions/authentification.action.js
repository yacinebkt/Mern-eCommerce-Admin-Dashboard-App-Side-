
import {authConstants} from './constants';

import axios from '../helpers/axios';

export const login = (user) =>{ 


    return async (dispatch) => {
        /*
        const res = await axios.post(`/admin/singin`, {
            ...user                   
        });
        */
        dispatch({ type: authConstants.LOGIN_REQUEST });


        const res = await axios.post(`/admin/singin`, {
            ...user
        });

        if(res.status ===200) {
            const {token, user} =res.data
            localStorage.setItem('token', token);
            localStorage.setItem('user', JSON.stringify(user));
            dispatch({
                type: authConstants.LOGIN_SUCCESS,
                payload: {
                    token, user
                }
            });
        } else {
            if(res.status === 400) {
                dispatch({
                    type:authConstants.LOGIN_FAILURE,
                    payload :{
                        erreo: res.data.error
                   }

                })
            }
        }

       /* dispatch({
            type: authConstants.LOGIN_REQUEST,
            payload :{
                 ...user
            }
        });
        */
    }
}


// when reloding the page we are losing the data
export const isUserLoginIn = () => {
    return async dispatch => {
        const token = localStorage.getItem("token");
        
        if (token) {
            const user = JSON.parse( localStorage.getItem("user") ) ;
            dispatch({
                type: authConstants.LOGIN_SUCCESS,
                payload: {
                    token, user
                }
            }); 
        }else{
               
            dispatch({
                type:authConstants.LOGIN_FAILURE,
                payload :{
                    erreo: 'failed Login'
               }

            })
        }
       
       
        /*if (token){
            dispatch ({
                payload : {
                    token
                }
            });
        }else{
            dispatch ({
                payload : {
                    authenticate:false,
                    token:"User Need To Log In ...☻"
                }
            });

        }*/
    }
}



// sign up action   // !==login //
/* ==============================================================================================*/






// sign out action //
/*================================================================================================*/

export const LogOut = () =>{ 
    return async (dispatch) => {

        const res = await axios.post(`/admin/singout`);

        dispatch({
            type: authConstants.LOGOUT_REQUEST
        })
     

        if (res.status === 200) {

            localStorage.clear();  // that's not enough // LATER IN OTHER SESSION/VID
        
            console.log("Signout in autho.action click")
    
            dispatch({ 
                type: authConstants.LOGOUT_SUCCESS
            });
                          // => go to reducer and write a new case
    

        } else {

            dispatch({ 
                type: authConstants.LOGOUT_FAILURE,
                payload : {
                    error : res.data.error
                }
            });

        }
       
         

      
    }
}