import * as api from "../lib/api";

const GET_ERRANDS = "errandtable/GET_ERRANDS";
const GET_ERRANDS_SUCCESS = "errandtable/GET_ERRANDS_SUCCESS";
const GET_ERRANDS_FAILURE = "errandtable/GET_ERRANDS_FAILURE";

export const getErrandsRequest = () => async (dispatch) => {
  dispatch({ type: GET_ERRANDS }); // 요청이 시작됨
  try {
    const errands = await api.getErrands(); // API 호출
    dispatch({ type: GET_ERRANDS_SUCCESS, errands: errands.data.data }); // 성공
  } catch (e) {
    console.error(e);
    dispatch({ type: GET_ERRANDS_FAILURE, errands_error: e }); // 실패
  }
};

const initialState = {
  errands_loading: false,
  errands: null,
  errands_error: null,
};

function errandtable(state = initialState, action) {
  switch (action.type) {
    case GET_ERRANDS:
      return {
        ...state,
        errands_loading: true,
      };

    case GET_ERRANDS_SUCCESS:
      return {
        ...state,
        errands_loading: false,
        errands: action.errands,
      };

    case GET_ERRANDS_FAILURE:
      return {
        ...state,
        errands_loading: false,
        errands_error: action.errands_error,
      };
    default:
      return state;
  }
}

export default errandtable;
