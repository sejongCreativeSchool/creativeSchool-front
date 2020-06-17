import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import LogoutButtonContainer from "../../containers/Login/LogoutButtonContainer";

const NavDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  z-index: 2;
  position: fixed;
  width: 200px;
  height: 100vh;
  background-color: #222222;
  padding-top: 60px;
  color: white;

  font-family: "S-CoreDream-6Bold";

  .menulist {
    list-style: none;
    padding: 0px;
    font-size: 1.5rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .menuitem {
    margin-top: 39px;
    margin-bottom: 10px;

    color: white;

    &:hover {
      color: #bbbbbb;
      font-size: 1.6rem;
    }
  }
`;

function Nav() {
  return (
    <NavDiv>
      <div>
        <ul className="menulist">
          <NavLink
            to="/errands"
            activeStyle={{ color: "black", fontSize: "1.6rem" }}
          >
            <li className="menuitem">
              <div>심부름 관리</div>
            </li>
          </NavLink>
          <NavLink
            to="/users"
            activeStyle={{ color: "#bbbbbb", fontSize: "1.6rem" }}
          >
            <li className="menuitem">
              <div>
                <div>회원 관리</div>
              </div>
            </li>
          </NavLink>
          <NavLink
            to="/notice"
            activeStyle={{ color: "#bbbbbb", fontSize: "1.6rem" }}
          >
            <li className="menuitem">
              <div>공지 사항</div>
            </li>
          </NavLink>
        </ul>
      </div>

      <LogoutButtonContainer />
    </NavDiv>
  );
}

export default Nav;
