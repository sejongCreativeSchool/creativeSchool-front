import React from "react";
import styled from "styled-components";
import { Input, Icon } from "semantic-ui-react";

const UserSearchWrapper = styled.div`
  margin-bottom: 30px;
`;

function UserSearch({ value, onChange }) {
  return (
    <UserSearchWrapper>
      <Input
        icon
        placeholder="회원 이름 검색"
        style={{ width: "100%" }}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <input />
        <Icon name="search" />
      </Input>
    </UserSearchWrapper>
  );
}

export default UserSearch;
