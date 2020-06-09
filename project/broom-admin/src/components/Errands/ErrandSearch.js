import React from "react";
import { Input, Icon } from "semantic-ui-react";
import styled from "styled-components";

const ErrandSearchStyle = styled.div`
  .searchInput {
    width: 100%;
  }
`;

function ErrandSearch({ value, onChangeInput }) {
  return (
    <ErrandSearchStyle>
      <Input
        icon
        placeholder="심부름 제목 또는 니더 이름 검색"
        className="searchInput"
        value={value}
        onChange={(e) => onChangeInput(e.target.value)}
      >
        <input />
        <Icon name="search" />
      </Input>
    </ErrandSearchStyle>
  );
}

export default ErrandSearch;
