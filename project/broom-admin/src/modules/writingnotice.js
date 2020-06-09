import { EditorState } from "draft-js";
import * as api from "../lib/api";

const UPDATE_EDITOR_STATE = "writingnotice/UPDATE_EDITOR_STATE";
const UPDATE_TITLE_INPUT = "writingnotice/UPDATE_TITLE_INPUT";

const POST_NOTICE = "writingnotice/POST_NOTICE";
const POST_NOTICE_SUCCESS = "writingnotice/POST_NOTICE_SUCCESS";
const POST_NOTICE_FAILURE = "writingnotice/POST_NOTICE_FAILURE";

export const updateTitleInput = (e) => ({
  type: UPDATE_TITLE_INPUT,
  title: e.target.value,
});

export const updateEditorState = (editorState) => ({
  type: UPDATE_EDITOR_STATE,
  editorState,
});

export const postNoticeRequest = (html, title) => async (dispatch) => {
  dispatch({ type: POST_NOTICE }); // 요청이 시작됨
  try {
    const res = await api.postNotice(html, title); // API 호출
    dispatch({ type: POST_NOTICE_SUCCESS, res: res }); // 성공
  } catch (e) {
    console.error(e);
    dispatch({ type: POST_NOTICE_FAILURE, res_error: e }); // 실패
  }
};

const initialState = {
  title: "",
  editorState: EditorState.createEmpty(),
  html: null,

  res_loading: false,
  res: null,
  res_error: null,
};

function writingnotice(state = initialState, action) {
  switch (action.type) {
    case UPDATE_EDITOR_STATE:
      return {
        ...state,
        editorState: action.editorState,
      };
    case UPDATE_TITLE_INPUT:
      return {
        ...state,
        title: action.title,
      };
    case POST_NOTICE:
      return {
        ...state,
        res_loading: true,
      };

    case POST_NOTICE_SUCCESS:
      return {
        ...state,
        res_loading: false,
        res: action.res,
      };

    case POST_NOTICE_FAILURE:
      return {
        ...state,
        res_loading: false,
        res_error: action.res_error,
      };
    default:
      return state;
  }
}

export default writingnotice;
