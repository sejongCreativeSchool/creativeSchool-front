const TOGGLE_KOREAN = "filter/TOGGLE_KOREAN";
const TOGGLE_JAPANESE = "filter/TOGGLE_JAPANESE";
const TOGGLE_CHINESE = "filter/TOGGLE_CHINESE";
const TOGGLE_WESTERN = "filter/TOGGLE_WESTERN";
const TOGGLE_CAFE = "filter/TOGGLE_CAFE";
const TOGGLE_ALCOHOL = "filter/TOGGLE_ALCOHOL";

export const toggleKorean = () => ({ type: TOGGLE_KOREAN });
export const toggleJapanese = () => ({ type: TOGGLE_JAPANESE });
export const toggleChinese = () => ({ type: TOGGLE_CHINESE });
export const toggleWestern = () => ({ type: TOGGLE_WESTERN });
export const toggleCafe = () => ({ type: TOGGLE_CAFE });
export const toggleAlcohol = () => ({ type: TOGGLE_ALCOHOL });

const initialState = {
  korean: false,
  japanese: false,
  chinese: false,
  western: false,
  cafe: false,
  alcohol: false,
};

export default function counter(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_KOREAN:
      return {
        ...state,
        korean: !state.korean,
      };
    case TOGGLE_JAPANESE:
      return {
        ...state,
        japanese: !state.japanese,
      };
    case TOGGLE_CHINESE:
      return {
        ...state,
        chinese: !state.chinese,
      };
    case TOGGLE_WESTERN:
      return {
        ...state,
        western: !state.western,
      };
    case TOGGLE_CAFE:
      return {
        ...state,
        cafe: !state.cafe,
      };
    case TOGGLE_ALCOHOL:
      return {
        ...state,
        alcohol: !state.alcohol,
      };
    default:
      return state;
  }
}
