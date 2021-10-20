import axios from '../helpers/axios';
import {brandConstants} from './constants';


/*export const addBrand= (brandName, nativename, tradename , origin , headquarters ,ISIN , founded , parentId, 
    description, website ,categoryIds, brandImages, brandLogo) */
    export const addBrand= (payload)=> {
    console.log()
    return async dispatch => {
        dispatch({ 
            type: brandConstants.ADD_NEW_BRAND_REQUEST
        });

       /* const payload = {   
            
            name : brandName,
            categoryId : categoryIds,

            Nativename: nativename,
            tradename: tradename,
            origin :origin,
            Headquarters :headquarters,
            ISIN: ISIN,
            Founded: founded,
            parentId: parentId,
            description: description,
            Website: website,
            
            //form.append('categoryId', categoryIds);
      
            brandPicture: brandImages,
            brandLogo: brandLogo, 
            
            
        };*/

        try {
            const res = await axios.post('/brand/create',  payload );
            if(res.status === 200) {
                dispatch({ 
                    type: brandConstants.ADD_NEW_BRAND_SUCCESS,
                    payload: { brand : res.data.brand} 
                });
            }
            else {

                dispatch({ 
                    type: brandConstants.ADD_NEW_BRAND_FAILURE,
                    payload: { error : res.data.error} 
                });

            }
        }

        catch (error){
            console.log(error)
        }
        
    }
}

/*
export const getAllBrands = () => {
    return async (dispatch) => {
      try {
        dispatch({ type: brandConstants.GET_ALL_BRANDS_REQUEST });
        const res = await axios.get(`/brand/getallbrands`);

        console.log(" response res res " , res);

        if (res.status === 200) {
          const { brands } = res.data;
          console.log("brands in  action", brands)

          dispatch({
            type: brandConstants.GET_ALL_BRANDS_SUCCESS,
            payload: { brands },

          });
        } else {
          dispatch({ type: brandConstants.GET_ALL_BRANDS_FAILURE });
        }
      } catch (error) {
        console.log(error);
      }
    };
  };

*/