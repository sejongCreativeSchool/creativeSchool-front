import React from "react";
import broomlogo from "../../res/broomlogo.svg";

import styled from "styled-components";

const BroomLogoStyle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  font-family: "S-CoreDream-6Bold";
  font-weight: bold;
  font-size: 1.75rem;

  .img-wrapper {
    width: 20%;
    margin-bottom: 30px;
  }

  img {
    width: 100%;
  }

  .text-wrapper {
    margin-bottom: 30px;
    color: #0105ac;
  }
`;

function BroomLogo() {
  return (
    <BroomLogoStyle>
      <div className="img-wrapper">
        <img src={broomlogo} alt="로고" />
      </div>
      <div className="text-wrapper">
        <span>부름 관리자 페이지</span>
      </div>
    </BroomLogoStyle>
  );
}

export default BroomLogo;
