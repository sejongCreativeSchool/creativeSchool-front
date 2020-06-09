import * as api from "../lib/api";
import htmlToDraft from "html-to-draftjs";
import { EditorState, ContentState } from "draft-js";

const GET_NOTICE_BY_ID = "noticefix/GET_NOTICE_BY_ID";
const GET_NOTICE_BY_ID_SUCCESS = "noticefix/GET_NOTICE_BY_ID_SUCCESS";
const GET_NOTICE_BY_ID_FAILURE = "noticefix/GET_NOTICE_BY_ID_FAILURE";

const UPDATE_NOTICE_BY_ID = "noticefix/UPDATE_NOTICE_BY_ID";
const UPDATE_NOTICE_BY_ID_SUCCESS = "noticefix/UPDATE_NOTICE_BY_ID_SUCCESS";
const UPDATE_NOTICE_BY_ID_FAILURE = "noticefix/UPDATE_NOTICE_BY_ID_FAILURE";

const CHANGE_TITLE = "noticefix/CHANGE_TITLE";
const CHANGE_DRAFT = "noticefix/CHANGE_DRAFT";

export const getNoticeById = (id) => async (dispatch) => {
  dispatch({ type: GET_NOTICE_BY_ID });
  try {
    const notice = await api.getNoticeById(id);
    const html = await api.getHTMLStringFromURL(notice.data.data.html);
    const contentBlock = htmlToDraft(html.data);
    const contentState = ContentState.createFromBlockArray(
      contentBlock.contentBlocks
    );
    const editorState = EditorState.createWithContent(contentState);

    dispatch({
      type: GET_NOTICE_BY_ID_SUCCESS,
      draft: editorState,
      title: notice.data.data.title,
    });
  } catch (e) {
    dispatch({ type: GET_NOTICE_BY_ID_FAILURE, error: e });
  }
};

export const updateNoticeById = (file, title, id) => async (dispatch) => {
  dispatch({ type: UPDATE_NOTICE_BY_ID });
  try {
    console.log("aaaaaaaa");
    const res = await api.updateNoticeById(file, title, id);
    console.log(res);
    dispatch({
      type: UPDATE_NOTICE_BY_ID_SUCCESS,
    });
  } catch (e) {
    console.log(e);
    dispatch({ type: UPDATE_NOTICE_BY_ID_FAILURE, error: e });
  }
};

export const changeTitle = (title) => ({
  type: CHANGE_TITLE,
  title,
});

export const updateEditorState = (editorState) => ({
  type: CHANGE_DRAFT,
  editorState,
});

const initialState = {
  title: null,
  get_loading: false,
  get_error: null,
  draft: null,

  update_loading: false,
  update_error: null,
};

function noticefix(state = initialState, action) {
  switch (action.type) {
    case GET_NOTICE_BY_ID:
      return {
        ...state,
        get_loading: true,
      };

    case GET_NOTICE_BY_ID_SUCCESS:
      return {
        ...state,
        get_loading: false,
        title: action.title,
        draft: action.draft,
      };
    case GET_NOTICE_BY_ID_FAILURE:
      return {
        ...state,
        get_loading: false,
        get_error: action.error,
      };

    case CHANGE_TITLE:
      return {
        ...state,
        title: action.title,
      };

    case CHANGE_DRAFT:
      return {
        ...state,
        draft: action.editorState,
      };

    case UPDATE_NOTICE_BY_ID:
      return {
        ...state,
        update_loading: true,
      };
    case UPDATE_NOTICE_BY_ID_SUCCESS:
      return {
        ...state,
        update_loading: false,
      };

    case UPDATE_NOTICE_BY_ID_FAILURE:
      return {
        ...state,
        update_error: action.error,
      };

    default:
      return state;
  }
}

export default noticefix;
