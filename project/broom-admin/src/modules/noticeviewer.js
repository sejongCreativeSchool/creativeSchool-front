import * as api from "../lib/api";

const GET_NOTICE_AND_HTML = "noticeviewer/GET_NOTICE_AND_HTML";
const GET_NOTICE_AND_HTML_SUCCESS = "noticeviewer/GET_NOTICE_AND_HTML_SUCCESS";
const GET_NOTICE_AND_HTML_FAILURE = "noticeviewer/GET_NOTICE_AND_HTML_FAILURE";

const DELETE_NOTICE_BY_ID = "noticeviewer/DELETE_NOTICE_BY_ID";
const DELETE_NOTICE_BY_ID_SUCCESS = "noticeviewer/DELETE_NOTICE_BY_ID_SUCCESS";
const DELETE_NOTICE_BY_ID_FAILURE = "noticeviewer/DELETE_NOTICE_BY_ID_FAILURE";

export const getNoticeAndHTML = (id) => async (dispatch) => {
  dispatch({ type: GET_NOTICE_AND_HTML });
  try {
    const notice = await api.getNoticeById(id);
    console.log(notice.data.data.html);
    const htmlString = await api.getHTMLStringFromURL(notice.data.data.html);
    console.log(htmlString);
    dispatch({
      type: GET_NOTICE_AND_HTML_SUCCESS,
      html: htmlString.data,
      notice: notice.data.data,
    });
  } catch (e) {
    console.log(e);
    dispatch({ type: GET_NOTICE_AND_HTML_FAILURE, error: e });
  }
};

export const deleteNoticeById = (id) => async (dispatch) => {
  dispatch({ type: DELETE_NOTICE_BY_ID });
  try {
    const res = await api.deleteNoticeById(id);
    dispatch({
      type: GET_NOTICE_AND_HTML_SUCCESS,
      res: res.data,
    });
  } catch (e) {
    dispatch({ type: GET_NOTICE_AND_HTML_FAILURE, error: e });
  }
};

const initialState = {
  notice: null,
  html: null,
  loading: false,
  error: null,
  res: null,
};

function noticeviewer(state = initialState, action) {
  switch (action.type) {
    case GET_NOTICE_AND_HTML:
      return {
        ...state,
        loading: true,
      };
    case GET_NOTICE_AND_HTML_SUCCESS:
      return {
        ...state,
        notice: action.notice,
        html: action.html,
        loading: false,
      };
    case GET_NOTICE_AND_HTML_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    case DELETE_NOTICE_BY_ID:
      return {
        ...state,
        loading: true,
      };
    case DELETE_NOTICE_BY_ID_SUCCESS:
      return {
        ...state,
        res: action.res,
        loading: false,
      };
    case DELETE_NOTICE_BY_ID_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
}

export default noticeviewer;
