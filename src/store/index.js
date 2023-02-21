import { legacy_createStore as createStore } from "redux";
import { combineReducers } from "redux";
import CounterReducer from "../reducers/CounterReducer";
import DarkModeReducer from "../reducers/DarkModeReducer";
let combine = combineReducers({ CounterReducer, DarkModeReducer });
let store = createStore(combine);
export default store;
