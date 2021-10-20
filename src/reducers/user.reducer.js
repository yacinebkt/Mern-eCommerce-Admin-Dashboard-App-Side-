import { authConstants, registerConstants } from "../actions/constants";

const initState = {
  error: null,
  message:"",
  loading: false,

  /*user: {
    firstName: "",
    lastName: "",
    email: "",
    picture: "",
  },*/
  /*authenticate: false,
  authenticating: false,*/ 
};



export default (state = initState, action) => {
  console.log(action);
  switch (action.type) {
    
    
        case registerConstants.USER_REGISTER_REQUEST:
        state = {
            ...state,
            loading: true
        };
        break;

        case registerConstants.USER_REGISTER_SUCCESS:
            state = {
            ...state,
            loading:false,
            message: action.payload.message
        };
        break;

        case registerConstants.USER_REGISTER_FAILURE:
            state = {
            ...state,
            loading:false,
            error: action.payload.error
        };
        break;







  }

  return state;
};
