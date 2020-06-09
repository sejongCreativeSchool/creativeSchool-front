import React from "react";
import broomlogo from "../../res/broomlogo.png";

import styled from "styled-components";

const BroomLogoStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  img {
    border-radius: 16px;
    width: 30%;
  }
`;

function BroomLogo() {
  return (
    <BroomLogoStyle>
      <img src={broomlogo} alt="로고" />
    </BroomLogoStyle>
  );
}

export default BroomLogo;
