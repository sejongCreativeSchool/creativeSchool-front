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
  stateOfCategory,
  onToggleKorean,
  onToggleJapanese,
  onToggleChinese,
  onToggleWestern,
  onToggleCafe,
  onToggleAlcohol,
}) {
  const { korean, japanese, chinese, western, cafe, alcohol } = stateOfCategory;

  return (
    <RadioListStyle>
      <div className="firstLine">
        <div>
          <h4>한식</h4>
          <Radio
            slider
            onChange={onToggleKorean}
            checked={korean ? true : false}
          />
        </div>

        <div>
          <h4>중식</h4>
          <Radio
            slider
            onChange={onToggleChinese}
            checked={chinese ? true : false}
          />
        </div>

        <div>
          <h4>일식</h4>
          <Radio
            slider
            onChange={onToggleJapanese}
            checked={japanese ? true : false}
          />
        </div>
      </div>
      <div className="secondLine">
        <div>
          <h4>양식</h4>
          <Radio
            slider
            onChange={onToggleWestern}
            checked={western ? true : false}
          />
        </div>

        <div>
          <h4>술집</h4>
          <Radio
            slider
            onChange={onToggleAlcohol}
            checked={alcohol ? true : false}
          />
        </div>

        <div>
          <h4>카페</h4>
          <Radio slider onChange={onToggleCafe} checked={cafe ? true : false} />
        </div>
      </div>
    </RadioListStyle>
  );
}

export default Filter;
