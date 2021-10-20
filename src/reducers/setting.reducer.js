import { settingConstants } from "../actions/constants"

const initState = {
    error: null,
    loading: false,
    settings: []
}

export default (state = initState, action) => {
    switch (action.type) {

       /* case settingConstants.CREATE_SETTING_PAGE_REQUEST:
            state = {
                ...state,
                loading:true
            }
            break;
        
        
        case settingConstants.CREATE_SETTING_PAGE_SUCCESS:
            const setting = action.payload.category;

            state = {
                ...state,
                settings : action.payload.settings,
                loading:false
            }
            break;

        
        case settingConstants.CREATE_SETTING_PAGE_FAILURE:
            state = {
                ...state,
                loading:false,
                error :action.payload.error
            }
            break;
        */

            
        
        case settingConstants.GET_SETTING_PAGE_SUCCESS:
            state = {
                ...state,
                settings : action.payload.settings,
                loading:false
            }
            break;
    }

    return state;
}