import { combineReducers } from "redux";
import filter from "./filter";
import todo from "./todo";

export default combineReducers({ todo, filter });
