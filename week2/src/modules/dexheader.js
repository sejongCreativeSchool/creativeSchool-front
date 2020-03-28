const CHANGE_INPUT = "dexheader/CHANGE_INPUT";
const CLICK_BUTTON = "dexheader/CLICK_BUTTON";

export const changeInput = value => ({ type: CHANGE_INPUT, value });
export const clickButton = () => ({ type: CLICK_BUTTON });

const initialState = {
  value: ""
};

export default function dexheader(state = initialState, action) {
  switch (action.type) {
    case CHANGE_INPUT:
      return {
        ...state,
        value: action.value
      };
    case CLICK_BUTTON:
      return {};
    default:
      return state;
  }
}
