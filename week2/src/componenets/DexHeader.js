import React from "react";
import { Input, Button } from "semantic-ui-react";

import pokeball from "../res/pokeball.png";

import styled from "styled-components";

const DexHeaderBlock = styled.div`
  padding-top: 48px;
  padding-left: 32px;
  padding-right: 32px;
  padding-bottom: 24px;
  border-bottom: 1px solid #e9ecef;
  h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
  }

  .pokeball {
    width: 50px;
    height: 50px;
  }

  .pokedexHead {
    display: flex;
    margin-bottom: 10px;
  }

  .searchInput {
    width: 100%;
  }
  .day {
    margin-top: 4px;
    color: #868e96;
    font-size: 21px;
  }
  .tasks-left {
    color: #20c997;
    font-size: 18px;
    margin-top: 40px;
    font-weight: bold;
  }

  .inputs {
    display: flex;
  }
`;

function DexHeader({ inputValue, onChange, onClick }) {
  return (
    <DexHeaderBlock>
      <div>
        <div className="pokedexHead">
          <h1>PokéDex</h1>
          <img className="pokeball" src={pokeball} alt="몬스터볼" />
        </div>
        <div className="inputs">
          <Input
            className="searchInput"
            placeholder="Search Pokémon's name or number"
            onChange={onChange}
            value={inputValue}
          />
          <Button icon="search" onClick={onClick} />
        </div>
      </div>
    </DexHeaderBlock>
  );
}

export default DexHeader;
