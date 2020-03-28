import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPokemon } from "../modules/dexlist";
import DexList from "../componenets/DexList";
import errorImage from "../res/errorImage.png";

function DexListContainer() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemon("pikachu"));
  }, []);

  const { image, name, id, loading, error } = useSelector(
    state => state.dexlist
  );

  if (error) {
    return (
      <div style={{ padding: "30px 32px" }}>
        <img
          src={errorImage}
          alt="errorImage"
          style={{ width: "100px", height: "100px" }}
        />
        <h2>에러가 발생했습니다!</h2>
        <h4>포켓몬 도감번호나 이름이 잘 입력되었는지 확인하세요.</h4>
      </div>
    );
  }

  if (loading) {
    return <div>loading...</div>;
  }

  return (
    <DexList
      name={name}
      image={image}
      id={id}
      loading={loading}
      error={error}
    />
  );
}

export default DexListContainer;
