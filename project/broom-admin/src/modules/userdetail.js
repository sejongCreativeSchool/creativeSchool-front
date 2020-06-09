import * as api from "../lib/api";

const GET_USER_BY_ID = "userdetail/GET_USER_BY_ID";
const GET_USER_BY_ID_SUCCESS = "userdetail/GET_USER_BY_ID_SUCCESS";
const GET_USER_BY_ID_FAILURE = "userdetail/GET_USER_BY_ID_FAILURE";

const DELETE_USER_BY_ID = "userdetail/DELETE_USER_BY_ID";
const DELETE_USER_BY_ID_SUCCESS = "userdetail/DELETE_USER_BY_ID_FAILURE";
const DELETE_USER_BY_ID_FAILURE = "userdetail/DELETE_USER_BY_ID_FAILURE";

export const getUserRequestById = (id) => async (dispatch) => {
  dispatch({ type: GET_USER_BY_ID }); // 요청이 시작됨
  try {
    const user = await api.getUserById(id); // API 호출
    dispatch({ type: GET_USER_BY_ID_SUCCESS, user: user.data.data }); // 성공
  } catch (e) {
    console.error(e);
    dispatch({ type: GET_USER_BY_ID_FAILURE, user_error: e }); // 실패
  }
};

export const deleteUserRequestById = (accessToken) => async (dispatch) => {
  dispatch({ type: DELETE_USER_BY_ID }); // 요청이 시작됨
  try {
    const user = await api.deleteUserById(accessToken); // API 호출
    dispatch({ type: DELETE_USER_BY_ID_SUCCESS, user_delete: user }); // 성공
  } catch (e) {
    console.error(e);
    dispatch({ type: DELETE_USER_BY_ID_FAILURE, user_delete_error: e }); // 실패
  }
};

const initialState = {
  user_loading: false,
  user: null,
  user_error: null,

  user_delete_loading: false,
  user_delete: null,
  user_delete_error: null,
};

function userdetail(state = initialState, action) {
  switch (action.type) {
    case GET_USER_BY_ID:
      return {
        ...state,
        user_loading: true,
      };

    case GET_USER_BY_ID_SUCCESS:
      return {
        ...state,
        user_loading: false,
        user: action.user,
      };

    case GET_USER_BY_ID_FAILURE:
      return {
        ...state,
        user_loading: false,
        user_error: action.user_error,
      };

    case DELETE_USER_BY_ID:
      return {
        ...state,
        user_delete_loading: true,
      };

    case DELETE_USER_BY_ID_SUCCESS:
      return {
        ...state,
        user_delete_loading: false,
        user_delete: action.user_delete,
      };

    case DELETE_USER_BY_ID_FAILURE:
      return {
        ...state,
        user_delete_loading: false,
        user_delete_error: action.user_delete_error,
      };
    default:
      return state;
  }
}

export default userdetail;
