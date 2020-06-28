import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import LogoutButtonContainer from "../../containers/Login/LogoutButtonContainer";

const NavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  position: fixed;
  z-index: 2;

  width: 200px;
  height: 100vh;

  padding-top: 60px;

  background-color: #222222;

  font-family: "S-CoreDream-6Bold";
  color: white;
`;

const NavMenuList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 0px;

  list-style: none;

  font-size: 1.5rem;
`;

const NavMenuItem = styled.li`
  display: flex;

  margin-top: 39px;
  margin-bottom: 10px;

  color: white;

  &:hover {
    font-size: 1.75rem;
    color: #cccccc;
  }
`;

const NavItemActiveStyle = {
  fontSize: "1.75rem",
};

function Nav() {
  return (
    <NavWrapper>
      <NavMenuList>
        <NavLink to="/errands" activeStyle={NavItemActiveStyle}>
          <NavMenuItem>심부름 관리</NavMenuItem>
        </NavLink>

        <NavLink to="/users" activeStyle={NavItemActiveStyle}>
          <NavMenuItem>회원 관리</NavMenuItem>
        </NavLink>

        <NavLink to="/notice" activeStyle={NavItemActiveStyle}>
          <NavMenuItem>공지 사항</NavMenuItem>
        </NavLink>
      </NavMenuList>

      <LogoutButtonContainer />
    </NavWrapper>
  );
}

export default Nav;
