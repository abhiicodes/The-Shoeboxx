import { combineReducers, legacy_createStore } from "redux";
import { productReducer } from "./Products/reducer";

const rootReducer = combineReducers({
    productReducer
})

const store = legacy_createStore(rootReducer)

export default store;