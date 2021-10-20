import { brandConstants } from "../actions/constants"

const initState = {
    error: null,
    loading: false,
    

    brands: []

}

export default (state = initState, action) => {
    switch (action.type) {

        /*case brandConstants.ADD_NEW_BRAND_REQUEST:
            state = {
                ...state,
                loading:true
            }
            break;
        
        
        case brandConstants.ADD_NEW_BRAND_SUCCESS:
            state = {
                ...state,
                loading:false,
            }
            break;

        
        case brandConstants.ADD_NEW_BRAND_FAILURE:
            state = {
                ...state,
                loading:false,
                error :action.payload.error
            }
            break;
        */

        case brandConstants.GET_ALL_BRANDS_SUCCESS:
            state = {
                ...state,
                loading:false,
                brands : action.payload.brands

            }
            break;
        /*case productConstants.GET_ALL_PRODUCTS_SUCCESS:
            state ={
                ...state,
                products : action.payload.products
            }
            break*/
 
    }

    return state;
}