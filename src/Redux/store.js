import { combineReducers, legacy_createStore } from "redux";
import { productReducer } from "./Products/reducer";
import { cartReducer } from './CartState/reducer';
import {authReducer} from './AuthState/reducer';

const rootReducer = combineReducers({
    productReducer,
    cartReducer,
    authReducer
})

const store = legacy_createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store;