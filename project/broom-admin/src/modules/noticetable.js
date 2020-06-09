import * as api from "../lib/api";

const GET_NOTICES = "noticetable/GET_NOTICES";
const GET_NOTICES_SUCCESS = "noticetable/GET_NOTICES_SUCCESS";
const GET_NOTICES_FAILURE = "noticetable/GET_NOTICES_FAILURE";

export const getNoticesRequest = () => async (dispatch) => {
  dispatch({ type: GET_NOTICES }); // 요청이 시작됨
  try {
    const notices = await api.getNotices(); // API 호출

    dispatch({ type: GET_NOTICES_SUCCESS, notices: notices.data.data }); // 성공
  } catch (e) {
    console.error(e);
    dispatch({ type: GET_NOTICES_FAILURE, notices_error: e }); // 실패
  }
};

const initialState = {
  notices_loading: false,
  notices: null,
  notices_error: null,
};

function noticetable(state = initialState, action) {
  switch (action.type) {
    case GET_NOTICES:
      return {
        ...state,
        notices_loading: true,
      };

    case GET_NOTICES_SUCCESS:
      return {
        ...state,
        notices_loading: false,
        notices: action.notices,
      };

    case GET_NOTICES_FAILURE:
      return {
        ...state,
        notices_loading: false,
        noticesS_error: action.notices_error,
      };
    default:
      return state;
  }
}

export default noticetable;
