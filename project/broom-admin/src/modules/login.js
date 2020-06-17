import * as api from "../lib/api";

const CHANGE_INPUT = "login/CHANGE_INPUT";
const CLEAR_INPUT = "login/CLEAR_INPUT";
const SUBMIT_LOGIN = "login/SUBMIT_LOGIN";

const LOGIN = "auth/LOGIN";
const LOGIN_SUCCESS = "auth/LOGIN_SUCCESS";
const LOGIN_FAILURE = "auth/LOGIN_FAILURE";

const LOGOUT = "auth/LOGOUT";

const GET_ME = "auth/GET_ME";
const GET_ME_SUCCESS = "auth/GET_ME_SUCCESS";
const GET_ME_FAILURE = "auth/GET_ME_FAILRUE";

export const changeInput = (name, value) => ({
  type: CHANGE_INPUT,
  name,
  value,
});

const clearInput = () => ({
  type: CLEAR_INPUT,
});

export const postLoginRequest = (id, password) => async (dispatch) => {
  dispatch({ type: LOGIN }); // 요청이 시작됨
  try {
    const res = await api.postLogin(id, password); // API 호출
    if (!res.data.data) {
      alert("로그인 실패!");
      dispatch(clearInput());
      dispatch({ type: LOGIN_FAILURE, res_error: "error" });
    } else {
      localStorage.token = res.data.data.token;
      console.log(localStorage.token);
      dispatch({ type: LOGIN_SUCCESS }); // 성공
    }
  } catch (e) {
    console.error(e);
    dispatch({ type: LOGIN_FAILURE, res_error: e }); // 실패
  }
};

export const checkAuthRequest = () => async (dispatch) => {
  dispatch({ type: GET_ME }); //요청 시작
  try {
    const res = await api.checkAuth();
    dispatch({ type: GET_ME_SUCCESS, check: res.data.data.user_id });
  } catch (e) {
    dispatch({ type: GET_ME_FAILURE, check_error: e });
  }
};

export const logout = () => ({
  type: LOGOUT,
});

const initialState = {
  id: "",
  password: "",

  login: false,
  login_loading: "",
  login_error: "",

  check: null,
  check_loading: false,
  check_error: null,
};

export default function login(state = initialState, action) {
  switch (action.type) {
    case CHANGE_INPUT:
      return {
        ...state,
        [action.name]: action.value,
      };
    case SUBMIT_LOGIN:
      return {};

    case LOGIN:
      return {
        ...state,
        login_loading: true,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        login_loading: false,
        login: true,
      };

    case LOGIN_FAILURE:
      return {
        ...state,
        login_loading: false,
        login_error: action.res_error,
      };
    case CLEAR_INPUT:
      return {
        ...state,
        id: "",
        password: "",
      };

    case GET_ME:
      return {
        ...state,
        check_loading: true,
      };

    case GET_ME_SUCCESS:
      return {
        ...state,
        check_loading: false,
        check: action.check,
      };

    case GET_ME_FAILURE:
      return {
        ...state,
        check_loading: false,
        check_error: action.res_error,
      };

    case LOGOUT:
      return {
        ...state,
        login: false,
        id: "",
        password: "",
        check: null,
        check_loading: false,
        check_error: null,
      };

    default:
      return state;
  }
}
