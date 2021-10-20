import axios from "../helpers/axios";
import { productConstants, categoryConstants, orderConstants,  brandConstants/*initDataConstants*/} from './constants';


export const getInitData = () =>{

    return async dispatch => {
        // dispatch ( {type: initDataConstants.GET_ALL_INITDATA_REQUEST});
        const res = await axios.post(`/initdata`);
        const { categories, products, orders, brands } = res.data; 
                
        
        if (res.status === 200) {


            dispatch({
                type: categoryConstants.GET_ALL_CATEGORIES_SUCCESS,
                payload : {
                    categories
                }
            });

            dispatch({
                type: brandConstants.GET_ALL_BRANDS_SUCCESS,
                payload : {
                    brands
                }
            });


            dispatch({
                type: productConstants.GET_ALL_PRODUCTS_SUCCESS,
                payload : {
                    products
                }
            });

            
            dispatch({
                type: orderConstants.GET_CUSTOMER_ORDER_SUCCESS,
                payload : {
                    orders
                }
            });
            
        }

        console.log(res)
    }
}