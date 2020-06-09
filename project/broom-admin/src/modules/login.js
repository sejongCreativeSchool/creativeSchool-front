const CHANGE_INPUT = "login/CHANGE_INPUT";
const SUBMIT_LOGIN = "login/SUBMIT_LOGIN";

export const changeInput = (name, value) => ({
  type: CHANGE_INPUT,
  name,
  value,
});

const initialState = {
  id: "",
  password: "",
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
    default:
      return state;
  }
}
