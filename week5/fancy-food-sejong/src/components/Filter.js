import React from "react";
import { Radio } from "semantic-ui-react";

import styled from "styled-components";

const RadioListStyle = styled.div`
  border-bottom: 1px solid #dbdbdb;
  background-color: rgb(213, 214, 210);
  padding: 5% 8%;

  .firstLine {
    display: flex;
    justify-content: space-between;
  }

  .secondLine {
    display: flex;
    justify-content: space-between;
  }
`;

function Filter({
  onToggleKorean,
  onToggleJapanese,
  onToggleChinese,
  onToggleWestern,
  onToggleCafe,
  onToggleAlcohol,
}) {
  return (
    <RadioListStyle>
      <div className="firstLine">
        <div>
          <h4>한식</h4>
          <Radio slider onChange={onToggleKorean} />
        </div>

        <div>
          <h4>중식</h4>
          <Radio slider onChange={onToggleChinese} />
        </div>

        <div>
          <h4>일식</h4>
          <Radio slider onChange={onToggleJapanese} />
        </div>
      </div>
      <div className="secondLine">
        <div>
          <h4>양식</h4>
          <Radio slider onChange={onToggleWestern} />
        </div>

        <div>
          <h4>술집</h4>
          <Radio slider onChange={onToggleAlcohol} />
        </div>

        <div>
          <h4>카페</h4>
          <Radio slider onChange={onToggleCafe} />
        </div>
      </div>
    </RadioListStyle>
  );
}

export default Filter;
