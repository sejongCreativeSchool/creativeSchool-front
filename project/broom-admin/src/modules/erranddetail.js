import * as api from "../lib/api";

const GET_ERRAND_BY_ID = "erranddetail/GET_ERRAND_BY_ID";
const GET_ERRAND_BY_ID_SUCCESS = "erranddetail/GET_ERRAND_BY_ID_SUCCESS";
const GET_ERRAND_BY_ID_FAILURE = "erranddetail/GET_ERRAND_BY_ID_FAILURE";

const DELETE_ERRAND_BY_ID = "erranddetail/DELETE_ERRAND_BY_ID";
const DELETE_ERRAND_BY_ID_SUCCESS = "erranddetail/DELETE_ERRAND_BY_ID_FAILURE";
const DELETE_ERRAND_BY_ID_FAILURE = "erranddetail/DELETE_ERRAND_BY_ID_FAILURE";

export const getErrandRequestById = (id) => async (dispatch) => {
  dispatch({ type: GET_ERRAND_BY_ID }); // 요청이 시작됨
  try {
    const errand = await api.getErrandById(id); // API 호출
    dispatch({ type: GET_ERRAND_BY_ID_SUCCESS, errand: errand.data.data }); // 성공
  } catch (e) {
    console.error(e);
    dispatch({ type: GET_ERRAND_BY_ID_FAILURE, errand_error: e }); // 실패
  }
};

export const deleteErrandRequestById = (id) => async (dispatch) => {
  dispatch({ type: DELETE_ERRAND_BY_ID }); // 요청이 시작됨
  try {
    const errand = await api.deleteErrandById(id); // API 호출
    dispatch({ type: DELETE_ERRAND_BY_ID_SUCCESS, errand_delete: errand }); // 성공
  } catch (e) {
    console.error(e);
    dispatch({ type: DELETE_ERRAND_BY_ID_FAILURE, errand_delete_error: e }); // 실패
  }
};

const initialState = {
  errand_loading: false,
  errand: null,
  errand_error: null,

  errand_delete_loading: false,
  errand_delete: null,
  errand_delete_error: null,
};

function erranddetail(state = initialState, action) {
  switch (action.type) {
    case GET_ERRAND_BY_ID:
      return {
        ...state,
        errand_loading: true,
      };

    case GET_ERRAND_BY_ID_SUCCESS:
      return {
        ...state,
        errand_loading: false,
        errand: action.errand,
      };

    case GET_ERRAND_BY_ID_FAILURE:
      return {
        ...state,
        errand_loading: false,
        errand_error: action.errand_error,
      };

    case DELETE_ERRAND_BY_ID:
      return {
        ...state,
        errand_delete_loading: true,
      };

    case DELETE_ERRAND_BY_ID_SUCCESS:
      return {
        ...state,
        errand_delete_loading: false,
        errand_delete: action.errand_delete,
      };

    case DELETE_ERRAND_BY_ID_FAILURE:
      return {
        ...state,
        errand_delete_loading: false,
        errand_delete_error: action.errand_delete_error,
      };
    default:
      return state;
  }
}

export default erranddetail;
