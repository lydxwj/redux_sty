import { FILTER_VAL } from "../constant.js";
const initialState = FILTER_VAL.all;
export default function(state = initialState, action) {
  switch (action.type) {
    case 'FILTER': {
      return  action.filter;
    }
    default:
      return state;
  }
}