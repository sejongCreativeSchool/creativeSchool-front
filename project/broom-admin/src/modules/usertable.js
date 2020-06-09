import * as api from "../lib/api";

const GET_USERS = "usertable/GET_USERS";
const GET_USERS_SUCCESS = "usertable/GET_USERS_SUCCESS";
const GET_USERS_FAILURE = "usertable/GET_USERS_FAILURE";

export const getUsersRequest = () => async (dispatch) => {
  dispatch({ type: GET_USERS }); // 요청이 시작됨
  try {
    const users = await api.getUsers(); // API 호출

    dispatch({ type: GET_USERS_SUCCESS, users: users.data.data }); // 성공
  } catch (e) {
    console.error(e);
    dispatch({ type: GET_USERS_FAILURE, users_error: e }); // 실패
  }
};

const initialState = {
  users_loading: false,
  users: null,
  users_error: null,
};

function usertable(state = initialState, action) {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users_loading: true,
      };

    case GET_USERS_SUCCESS:
      return {
        ...state,
        users_loading: false,
        users: action.users,
      };

    case GET_USERS_FAILURE:
      return {
        ...state,
        users_loading: false,
        users_error: action.users_error,
      };
    default:
      return state;
  }
}

export default usertable;
