import React from "react";
import { Icon } from "semantic-ui-react";
import styled from "styled-components";

const HeaderStyle = styled.div`
  display: flex;
  border-bottom: 1px solid #dbdbdb;
  padding: 5% 5%;
  background-color: rgb(195, 0, 47);
  width: 100%;

  @import url("https://fonts.googleapis.com/css2?family=Do+Hyeon&family=Noto+Sans+KR&display=swap");

  .headerLeft {
    display: flex;
    align-items: center;
  }

  .headerRight {
    margin-left: auto;
    align-items: center;
  }

  .icon {
    color: white;
  }

  .logoText {
    font-family: "Do Hyeon", sans-serif;
    color: white;
    font-size: 2rem;
    margin-left: 10px;
  }
`;

function Header() {
  return (
    <HeaderStyle>
      <div className="headerLeft">
        <Icon name="food" size="big" className="icon" />
        <div className="logoText">세종맛집</div>
      </div>

      {/* <div className="headerRight" onClick={consoleA}>
        <Icon name="bars" size="big" className="icon" />
  </div>*/}
    </HeaderStyle>
  );
}

export default Header;
