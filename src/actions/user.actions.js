import {authConstants, registerConstants} from './constants';

import axios from '../helpers/axios';

// create a new action  /1- past SignUp /2- modificated


export const SignUp = (user) =>{ 


    return async (dispatch) => {
       
        dispatch({ type: registerConstants.USER_REGISTER_REQUEST });


        const res = await axios.post(`/admin/singup`, {
            ...user
        });

        if(res.status ===201) {
            const {message} =res.data
           
            dispatch({
                type: registerConstants.USER_REGISTER_SUCCESS,
                payload: {
                    message
                }
            });
        } else {
            if(res.status === 400) {
                dispatch({
                    type:registerConstants.USER_REGISTER_FAILURE,
                    payload :{
                        erreo: res.data.error
                   }

                })
            }
        }

    
    }
}




