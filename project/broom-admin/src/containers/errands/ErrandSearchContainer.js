import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ErrandSearch from "../../components/Errands/ErrandSearch";
import { changeErandSearchInput } from "../../modules/errandsearch";

function ErrandSearchContainer() {
  const { value } = useSelector((state) => ({
    value: state.errandsearch.value,
  }));

  const dispatch = useDispatch();

  const onChangeErrandSearchInput = (value) =>
    dispatch(changeErandSearchInput(value));

  return (
    <ErrandSearch value={value} onChangeInput={onChangeErrandSearchInput} />
  );
}

export default ErrandSearchContainer;
