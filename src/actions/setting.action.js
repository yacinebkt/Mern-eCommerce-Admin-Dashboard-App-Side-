import axios from "../helpers/axios";
import { settingConstants } from "./constants";

// modified act
export const addHomePageModal = ( modelnumber, category, priority) => {
    return async (dispatch) => {
      try {
        dispatch({ type: settingConstants.CREATE_SETTING_PAGE_REQUEST });
        const payload = {   
            
            modelnumber : modelnumber,
            modelItems: [
              {
                category: category,
                priority: priority,
              },
            ],
        };

        const res = await axios.post(`homeCategory/add`, payload);
        if (res.status === 201) {
           

          dispatch({ type: settingConstants.CREATE_SETTING_PAGE_SUCCESS });
         // dispatch(getProducts());
        } else {
          dispatch({ type: settingConstants.CREATE_SETTING_PAGE_FAILURE });
        }
      } catch (error) {
        console.log(error);
      }
    };
  };
  