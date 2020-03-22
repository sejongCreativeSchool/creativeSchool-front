import { createAction, handleActions } from "redux-actions";

const CHANGE_INPUT = "subject/CHANGE_INPUT";
const CLEAR_INPUT = "subject/CLEAR_INPUT";
const ADD = "subject/ADD";
const REMOVE = "subject/REMOVE";

export const changeInput = createAction(CHANGE_INPUT, target => target);
export const clearInput = createAction(CLEAR_INPUT);

let id = 3;
export const add = createAction(ADD, subject => ({
  id: id++,
  name: subject.name,
  credits: subject.credits,
  grade: subject.grade
}));

export const remove = createAction(REMOVE, id => id);

const initialState = {
  subjectInput: "",
  gradeInput: "",
  creditInput: "",
  subjects: [
    {
      id: 1,
      name: "자료구조",
      credits: 3,
      grade: 4.5
    },
    {
      id: 2,
      name: "알고리즘",
      credits: 4,
      grade: 3.5
    }
  ]
};

const subject = handleActions(
  {
    [CHANGE_INPUT]: (state, action) => ({
      ...state,
      [action.payload.name]: action.payload.value
    }),
    [CLEAR_INPUT]: (state, action) => ({
      ...state,
      subjectInput: "",
      gradeInput: "",
      creditInput: ""
    }),
    [ADD]: (state, { payload: subject }) => ({
      ...state,
      subjects: state.subjects.concat(subject)
    }),
    [REMOVE]: (state, { payload: id }) => ({
      ...state,
      subjects: state.subjects.filter(subject => subject.id !== id)
    })
  },
  initialState
);

export default subject;
