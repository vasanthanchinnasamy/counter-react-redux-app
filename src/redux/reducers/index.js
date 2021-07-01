import { combineReducers, createStore } from "redux";
import counterReducer from "./counterReducer";
import authReducer from "./authReducer";

const allReducers = combineReducers({ counterReducer, authReducer });

export default allReducers;
