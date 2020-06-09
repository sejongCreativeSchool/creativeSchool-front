import React from "react";
import styled from "styled-components";
import helperMobile from "../res/carousel/helper-mobile.svg";
import neederMobile from "../res/carousel/needer-mobile.svg";

const MobileWrapper = styled.div`
  @media (min-width: 1025px) {
    display: none;
  }
  font-weight: bold;
  font-family: "S-CoreDream-6Bold";
  font-size: 2rem;

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  margin-bottom: 50px;

  .img {
    width: 100%;
  }

  .img-wrapper {
    max-width: 300px;
    margin-bottom: 100px;
  }

  .needer-desc {
    max-width: 300px;
    margin-bottom: 20px;
    color: #0105ac;
  }

  .helper-desc {
    color: #ff1229;
    max-width: 300px;
    margin-bottom: 20px;
  }
`;

function MobileCarousel() {
  return (
    <MobileWrapper>
      <div className="needer-desc">
        <h4>
          언제 어디서든
          <br />
          편리하게
          <br />
          친구에게 심부름을
          <br />
          부탁하세요!
        </h4>
      </div>

      <div className="img-wrapper">
        <img src={neederMobile} alt="neederMobile" className="img" />
      </div>

      <div className="helper-desc">
        <h4>
          공강시간
          <br />
          비는 시간에,
          <br />
          학교 친구를 돕고
          <br />
          용돈 버세요!
        </h4>
      </div>

      <div className="img-wrapper">
        <img src={helperMobile} alt="helperMobile" className="img" />
      </div>
    </MobileWrapper>
  );
}

export default MobileCarousel;
