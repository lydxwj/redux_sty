import { createStore, applyMiddleware  } from "redux";
import promiseMiddleware from 'redux-promise';
import thunk from 'redux-thunk';
import rootReducer from "./reducers";

export default createStore(
  rootReducer,
  applyMiddleware(thunk, promiseMiddleware)
);