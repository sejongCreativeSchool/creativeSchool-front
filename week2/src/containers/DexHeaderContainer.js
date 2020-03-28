import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeInput } from "../modules/dexheader";
import DexHeader from "../componenets/DexHeader";
import { getPokemon } from "../modules/dexlist";

function DexHeaderContainer() {
  const inputValue = useSelector(state => state.dexheader.value);
  const dispatch = useDispatch();

  const onChange = e => {
    dispatch(changeInput(e.target.value));
  };

  const onClick = () => {
    dispatch(getPokemon(inputValue));
    dispatch(changeInput(""));
  };

  return (
    <DexHeader onChange={onChange} inputValue={inputValue} onClick={onClick} />
  );
}

export default DexHeaderContainer;
