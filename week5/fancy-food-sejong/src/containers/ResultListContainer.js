import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ResultList from "../components/ResultList";
import { setCenterPosition } from "../modules/centerposition";

function ResultListContainer() {
  const filterState = useSelector((state) => state.filter);
  const { id } = useSelector((state) => state.centerposition);

  const dispatch = useDispatch();

  const onSetCenterPosition = (id) => dispatch(setCenterPosition(id));

  return (
    <ResultList
      filterState={filterState}
      onSetCenterPosition={onSetCenterPosition}
    />
  );
}

export default ResultListContainer;
