import { combineReducers } from "redux";
import dexlist from "./dexlist";
import dexheader from "./dexheader";

const rootReducer = combineReducers({
  dexlist,
  dexheader
});

export default rootReducer;
