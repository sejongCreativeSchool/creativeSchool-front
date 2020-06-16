import { combineReducers } from "redux";
import noticeList from "./noticeList";
import noticeviewer from "./noticeviewer";

const rootReducer = combineReducers({
  noticeList,
  noticeviewer,
});

export default rootReducer;
