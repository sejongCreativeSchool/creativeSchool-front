const UPDATE_CATEGORY = "errandFilter/UPDATE_CATEGORY"; // 카테고리 필터 변경
const UPDATE_PROGRESS = "errandFilter/UPDATE_PROGRESS"; // 진행도 필터 변경

export const updateCategory = (e) => ({
  type: UPDATE_CATEGORY,
  e,
});

export const updateProgress = (e) => ({
  type: UPDATE_PROGRESS,
  e,
});

const initialState = {
  category: [
    "가져다줘",
    "사다줘",
    "전달해줘",
    "제출해줘",
    "프린트해줘",
    "같이해줘",
    "대신해줘",
    "기타",
  ],
  progress: ["done", "notDone"],
};

export default function errandFilter(state = initialState, action) {
  switch (action.type) {
    case UPDATE_CATEGORY:
      console.log(action.e.target.id);
      return {
        ...state,
        category:
          state.category.indexOf(action.e.target.id) > -1
            ? state.category.filter((item) => item !== action.e.target.id)
            : state.category.concat(action.e.target.id),
      };

    case UPDATE_PROGRESS:
      console.log(action.e.target.name);
      return {
        ...state,
        progress:
          state.progress.indexOf(action.e.target.id) > -1
            ? state.progress.filter((item) => item !== action.e.target.id)
            : state.progress.concat(action.e.target.id),
      };

    default:
      return state;
  }
}
