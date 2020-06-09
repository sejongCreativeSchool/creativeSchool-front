const CHANGE_USER_INPUT = "usersearch/CHANGE_USER_INPUT";

export const changeUserInput = (value) => ({
  type: CHANGE_USER_INPUT,
  value,
});

const initialState = {
  value: "",
};

export default function usersearch(state = initialState, action) {
  switch (action.type) {
    case CHANGE_USER_INPUT:
      return {
        ...state,
        value: action.value,
      };
    default:
      return state;
  }
}
