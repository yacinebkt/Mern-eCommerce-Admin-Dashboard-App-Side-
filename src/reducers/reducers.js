/*export default ( state ={ name : "Yacine"}, action) => {
    return state;
}
*/

import { combineReducers } from "redux";
import authentificationReducers from "./authentification.reducers";
import userReducer from "./user.reducer";

import ProductReducer from "./product.reducer"

import BrandReducer from "./brand.reducer"

import OrderReducer from "./order.reducer"
import SettingsReducer from "./setting.reducer"

import CategoryReducer from "./category.reducer"
import PageReducer from "./page.reducer"

const rootReducer = combineReducers ({
    auth: authentificationReducers,  // IMPORTANT
    user: userReducer, 
    product: ProductReducer,
    order: OrderReducer,
    category: CategoryReducer,
    page: PageReducer,
    setting: SettingsReducer, 
    brand: BrandReducer
    
})

export default rootReducer;

