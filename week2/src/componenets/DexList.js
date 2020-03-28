import React from "react";

import styled from "styled-components";

const DexItemBlock = styled.div`
  width: 630px;
  height: 500px;
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
  align-self: center;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;

  padding: 15px;
  .img {
    width: 150px;
    height: 150px;
  }

  .itemName {
    margin-left: 40px;
  }
`;

function DexList({ name, id, image, loading }) {
  return (
    <div style={{ padding: "30px 32px" }}>
      {name && <DexItem name={name} id={id} image={image} />}
    </div>
  );
}

export default DexList;

function DexItem({ name, id, image }) {
  const { front_default, back_default, front_shiny, back_shiny } = image;
  return (
    <DexItemBlock>
      <div className="item">
        <img className="img" src={front_default} alt="포켓몬" />
        <img className="img" src={back_default} alt="포켓몬" />
        <img className="img" src={front_shiny} alt="포켓몬" />
        <img className="img" src={back_shiny} alt="포켓몬" />
        <h2 className="itemName">No.{id}</h2>
        <h1 className="itemName">{name}</h1>
      </div>
    </DexItemBlock>
  );
}
