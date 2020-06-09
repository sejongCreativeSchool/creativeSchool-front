import React from "react";
import { Input, Icon } from "semantic-ui-react";

function UserSearch({ value, onChange }) {
  return (
    <div style={{ marginBottom: "30px" }}>
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
    </div>
  );
}

export default UserSearch;
