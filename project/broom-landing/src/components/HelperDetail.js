import React from "react";
import styled from "styled-components";

import helperBG from "../res/helper-page/helper-background.svg";
import helperImg1 from "../res/helper-page/helper-img1.svg";
import helperImg2 from "../res/helper-page/helper-img2.svg";

import { Element } from "react-scroll";

import ScrollAnimation from "react-animate-on-scroll";

export const BackgroundDiv = styled.div`
  @media (min-width: 1025px) {
    display: flex;
    flex-direction: column;
    background-image: url(${helperBG});
    background-repeat: no-repeat;
    height: 160vh;
    align-items: center;

    font-family: "S-CoreDream-6Bold";
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;

const DoorDiv = styled.div`
  background-color: white;
  border-radius: 50% 50% 0 0 / 20% 20% 0 0;

  box-sizing: border-box;

  height: 750px;

  flex: 0 0 210px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 0 2.5vw;
  padding: 1.4vw;

  text-align: center;
`;

const SmallTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 400px;
  margin-bottom: 50px;

  .needer-text {
    font-family: "S-CoreDream-6Bold";
    font-size: 3rem;
    color: #ff1229;
    margin: 0;
  }

  .needer-description {
    font-family: "S-CoreDream-6Bold";
    font-size: 1.5rem;
    color: #606060;
    margin: 0;
  }
`;

const DoorContainer = styled.div`
  display: flex;
  margin-top: auto;
  justify-content: center;

  margin-bottom: 200px;
`;

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  max-width: 270px;
  .img {
    max-width: 270px;
    display: block;
  }
`;

const SmallCategory = styled.h3`
  margin: 0;
  padding: 0;

  font-size: 1.6rem;

  color: #ff1229;
`;

const SmallDesc = styled.h4`
  margin: 0;
  padding: 0;

  margin-top: 20px;
  font-size: 16px;

  color: #606060;
`;

function HelperDetail() {
  return (
    <>
      <ScrollAnimation
        animateIn="fadeIn"
        animateOut="fadeOut"
        duration={1}
        initiallyVisible={false}
        animateOnce={true}
      >
        <Element name="helper" className="element">
          <SmallTitle>
            <div>
              <h3 style={{ display: "block" }} className="needer-text">
                HELPER
              </h3>
            </div>
            <div>
              <h4 className="needer-description">
                공강시간, 비는 시간에 학교 친구를 도와주고 용돈을 버세요!
              </h4>
            </div>
          </SmallTitle>
        </Element>

        <DoorContainer>
          <DoorDiv>
            <SmallCategory>
              심부름을
              <br />
              한번에
            </SmallCategory>
            <ImgContainer>
              <img className="img" src={helperImg1} alt="심부름을한번에" />
            </ImgContainer>
            <div>
              <SmallDesc>
                필터를 통해 본인에게 적합한 심부름을 한눈에 볼 수 있습니다.
              </SmallDesc>
            </div>
          </DoorDiv>

          <DoorDiv>
            <SmallCategory>
              실시간
              <br />
              채팅
            </SmallCategory>
            <ImgContainer>
              <img className="img" src={helperImg2} alt="실시간채팅" />
            </ImgContainer>
            <div>
              <SmallDesc>
                니더의 요구를 듣고 심부름을 결정하여 무리한 요구를 원천 차단할
                수 있습니다.
              </SmallDesc>
            </div>
          </DoorDiv>
        </DoorContainer>
      </ScrollAnimation>
    </>
  );
}

export default HelperDetail;
