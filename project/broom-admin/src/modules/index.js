import { combineReducers } from "redux";
import login from "./login";
import errandFilter from "./errandFilter";
import errandsearch from "./errandsearch";
import errandtable from "./errandtable";
import usersearch from "./usersearch";
import usertable from "./usertable";
import erranddetail from "./erranddetail";
import userdetail from "./userdetail";
import writingnotice from "./writingnotice";
import noticetable from "./noticetable";
import noticeviewer from "./noticeviewer";
import noticefix from "./noticefix";
const rootReducer = combineReducers({
  login,
  errandFilter,
  errandsearch,
  errandtable,
  usersearch,
  usertable,
  userdetail,
  erranddetail,
  writingnotice,
  noticetable,
  noticeviewer,
  noticefix,
});

export default rootReducer;
