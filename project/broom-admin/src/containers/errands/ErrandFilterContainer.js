import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { updateProgress, updateCategory } from "../../modules/errandFilter";
import ErrandFilter from "../../components/Errands/ErrandFilter";

function ErrandFilterContainer() {
  const { category, progress } = useSelector((state) => state.errandFilter);

  const dispatch = useDispatch();

  const onUpdateCategory = (e) => dispatch(updateCategory(e));
  const onUpdateProgress = (e) => dispatch(updateProgress(e));

  return (
    <ErrandFilter
      category={category}
      progress={progress}
      updateCategory={onUpdateCategory}
      updateProgress={onUpdateProgress}
    />
  );
}

export default ErrandFilterContainer;
