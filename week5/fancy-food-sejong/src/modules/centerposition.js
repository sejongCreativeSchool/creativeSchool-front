const SET_CENTER_ID = "centerposition/SET_CENTER_ID";

export const setCenterPosition = (id) => ({
  type: SET_CENTER_ID,
  id: id,
});

const initialState = {
  id: 1,
};

export default function centerposition(state = initialState, action) {
  switch (action.type) {
    case SET_CENTER_ID:
      return {
        ...state,
        id: action.id,
      };
    default:
      return state;
  }
}
