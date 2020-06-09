import React from "react";
import styled from "styled-components";

import neederImg1 from "../../res/needer-page/needer-img1.svg";
import neederImg2 from "../../res/needer-page/needer-img2.svg";
import neederImg3 from "../../res/needer-page/needer-img3.svg";

const MobileBackGround = styled.div`
  @media (max-width: 1024px) {
    background-color: #e8e8f8;
    font-family: "S-CoreDream-6Bold";
    padding-top: 10px;
    padding-bottom: 10px;
    width: 100vw;
  }

  @media (min-width: 1025px) {
    display: none;
  }
`;

export const SmallTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 100px;
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
  align-items: center;
  flex-direction: column;

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

const DoorDiv = styled.div`
  background-color: white;
  border-radius: 50% 50% 0 0 / 20% 20% 0 0;

  box-sizing: border-box;
  width: 300px;
  flex: 0 0 210px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 50px 2.5vw;
  padding: 1.4vw;
  padding-top: 30px;
  padding-bottom: 30px;

  text-align: center;
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

function MobileNeederDetail() {
  return (
    <MobileBackGround>
      <SmallTitle>
        <div>
          <h3 style={{ display: "block" }} className="needer-text">
            NEEDER
          </h3>
        </div>
        <div>
          <h4 className="needer-description">언제, 어디서든 편리하게</h4>
        </div>
        <div>
          <h4 className="needer-description">친구에게 심부름을 부탁하세요!</h4>
        </div>
      </SmallTitle>

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
    </MobileBackGround>
  );
}

export default MobileNeederDetail;
