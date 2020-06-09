import React, { useEffect } from "react";
import styled from "styled-components";
import PageTemplate from "../components/Common/PageTemplate";
import UserTable from "../components/user/UserTable";
import UserSearchContainer from "../containers/user/UserSearchContainer";
import UserTableContainer from "../containers/user/UserTableContainer";

const Headerstyle = styled.h3`
  font-family: "S-CoreDream-6Bold";
  font-size: 2rem;
  margin-bottom: 15px;
`;

function UserPage() {
  return (
    <PageTemplate>
      <Headerstyle>| 회원 관리</Headerstyle>
      <UserSearchContainer />

      <UserTableContainer />
    </PageTemplate>
  );
}

export default UserPage;
