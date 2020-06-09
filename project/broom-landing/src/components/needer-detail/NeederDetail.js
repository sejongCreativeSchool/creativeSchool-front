import React from "react";
import styled from "styled-components";

import neederBG from "../../res/needer-page/needer-background.svg";
import neederImg1 from "../../res/needer-page/needer-img1.svg";
import neederImg2 from "../../res/needer-page/needer-img2.svg";
import neederImg3 from "../../res/needer-page/needer-img3.svg";

import { Element } from "react-scroll";

import ScrollAnimation from "react-animate-on-scroll";

export const BackgroundDiv = styled.div`
  @media (min-width: 1025px) {
    display: flex;
    flex-direction: column;
    background-image: url(${neederBG});
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

export const SmallTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 400px;
  margin-bottom: 50px;

  .needer-text {
    font-family: "S-CoreDream-6Bold";
    font-size: 3rem;
    color: #0105ac;
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

  color: #0105ac;
`;

const SmallDesc = styled.h4`
  margin: 0;
  padding: 0;

  margin-top: 20px;
  font-size: 16px;

  color: #606060;
`;

const PCWrapper = styled.div`
  @media (max-width: 1024px) {
    display: none;
  }
`;

function NeederDetail() {
  return (
    <>
      <PCWrapper>
        <ScrollAnimation
          animateIn="fadeIn"
          animateOut="fadeOut"
          duration={1}
          initiallyVisible={false}
          animateOnce={true}
        >
          <Element name="needer" className="element">
            <SmallTitle>
              <div>
                <h3 style={{ display: "block" }} className="needer-text">
                  NEEDER
                </h3>
              </div>
              <div>
                <h4 className="needer-description">
                  언제, 어디서든 편리하게 친구에게 심부름을 부탁하세요!
                </h4>
              </div>
            </SmallTitle>
          </Element>

          <DoorContainer>
            <DoorDiv>
              <SmallCategory>
                다양한
                <br /> 카테고리
              </SmallCategory>
              <ImgContainer>
                <img className="img" src={neederImg1} alt="카테고리설명" />
              </ImgContainer>
              <div>
                <SmallDesc>
                  카테고리에 맞춰 빠르고 간편하게 심부름을 요청할 수 있습니다.
                </SmallDesc>
              </div>
            </DoorDiv>

            <DoorDiv>
              <SmallCategory>
                편리한
                <br /> 심부름 요구
              </SmallCategory>
              <ImgContainer>
                <img className="img" src={neederImg2} alt="편리한요구사항" />
              </ImgContainer>
              <div>
                <SmallDesc>
                  육하원칙에 의거하여 편하고 상세하게 심부름 요구사항을 정의할
                  수있습니다.
                </SmallDesc>
              </div>
            </DoorDiv>
            <DoorDiv>
              <SmallCategory>
                헬퍼와의 <br />
                실시간 채팅
              </SmallCategory>
              <ImgContainer>
                <img className="img" src={neederImg3} alt="실시간채팅" />
              </ImgContainer>
              <div>
                <SmallDesc>
                  채팅을 통해 정확하고 세부적인 요청을 할수 있습니다.
                </SmallDesc>
              </div>
            </DoorDiv>
          </DoorContainer>
        </ScrollAnimation>
      </PCWrapper>
    </>
  );
}

export default NeederDetail;
