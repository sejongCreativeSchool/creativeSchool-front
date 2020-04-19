import { combineReducers } from "redux";
import filter from "./filter";
import centerposition from "./centerposition";

const rootReducer = combineReducers({
  filter,
  centerposition,
});

export default rootReducer;
