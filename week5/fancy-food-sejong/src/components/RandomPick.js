import React from "react";
import styled from "styled-components";
import arrow from "../res/arrow.png";

const RandomPickStyle = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Do+Hyeon&family=Noto+Sans+KR&display=swap");

  display: flex;
  align-items: center;

  background-color: rgb(213, 214, 210);
  padding: 5% 8%;

  font-family: "Do Hyeon", sans-serif;
  font-size: 1.4rem;

  .arrowdiv {
    margin-left: auto;
  }

  .arrow {
    max-width: 60px;
  }
`;
function RandomPick() {
  return (
    <RandomPickStyle>
      <div>
        <p></p>
      </div>

      <div className="arrowdiv">
        <div>랜덤 추천</div>
        <img src={arrow} alt="arrow" className="arrow" />
      </div>
    </RandomPickStyle>
  );
}

export default RandomPick;
