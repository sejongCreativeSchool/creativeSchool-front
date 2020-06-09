
// 마커 관련 액션 정의
const RESET_MARKER = "mapInfo/RESET_MARKER";
const SET_MARKER = "mapInfo/SET_MARKER";

// 맵 객체 관련 액션 정의



export const resetMarker = () => ({
  type: RESET_MARKER,
});

const initialState = {
  marker: [],
};
