const CHANGE_ERRAND_SEARCH_INPUT = "errandsearch/CHANGE_ERRAND_SEARCH_INPUT";

export const changeErandSearchInput = (value) => ({
  type: CHANGE_ERRAND_SEARCH_INPUT,
  value,
});

const initialState = {
  value: "",
};

export default function errandsearch(state = initialState, action) {
  switch (action.type) {
    case CHANGE_ERRAND_SEARCH_INPUT:
      return {
        ...state,
        value: action.value,
      };
    default:
      return state;
  }
}
