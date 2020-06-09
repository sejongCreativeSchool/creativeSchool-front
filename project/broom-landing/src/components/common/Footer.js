import React from "react";
import styled from "styled-components";

import footerImg from "../../res/common/footer.svg";
import Responsive from "./Responsive";

const PCWrapper = styled.div`
  @media (max-width: 1024px) {
    display: none;
  }
`;

const FooterImg = styled.div`
  background-image: url(${footerImg});
  background-repeat: repeat-x;
  width: 100%;
  z-index: -1;
  min-height: 1000px;
  max-height: 1000px;
  position: absolute;
  bottom: -500px;
`;

const FooterDiv = styled.div`
  position: absolute;
  width: 100vw;
  max-height: 500px;
  min-height: 500px;
  overflow-y: hidden;
  display: flex;

  margin-top: 100px;

  .footer-content {
    width: 1024px;
    font-size: 1.25rem;
    color: white;
    font-family: "S-CoreDream-6Bold";
    display: flex;

    justify-content: space-around;

    position: absolute;
    top: 450px;
    z-index: 1;
  }

  .name {
    display: flex;
    margin-left: 15px;
    &:hover {
      cursor: pointer;
    }
  }
`;

const FooterMobileStyle = styled.div`
  @media (max-width: 1024px) {
    width: 100vw;
    height: 10vh;
    background-color: #ff1229;
    color: white;

    font-family: "S-CoreDream-6Bold";

    display: flex;
    justify-content: center;
    align-items: space-around;

    .name-wrapper {
      display: flex;
      width: 100vw;
      justify-content: space-around;
    }
  }

  @media (min-width: 1025px) {
    display: none;
  }
`;

function Footer() {
  return (
    <>
      <PCWrapper>
        <FooterDiv>
          <Responsive>
            <div className="footer-content">
              <div>2020년 1학기 창의학기제 프로젝트 - 부름</div>

              <div style={{ display: "flex" }}>
                <div
                  className="name"
                  onClick={() => {
                    window.open("https://github.com/moaikang");
                  }}
                >
                  강근우
                </div>
                <div
                  className="name"
                  onClick={() => {
                    window.open("https://github.com/KOREAparksh");
                  }}
                >
                  박승한
                </div>
                <div
                  className="name"
                  onClick={() => {
                    window.open("https://www.behance.net/mineleba14");
                  }}
                >
                  강민지
                </div>
                <div
                  className="name"
                  onClick={() => {
                    window.open("https://github.com/eunsolkang");
                  }}
                >
                  강은솔
                </div>
              </div>
            </div>
          </Responsive>

          <FooterImg />
        </FooterDiv>
      </PCWrapper>

      <FooterMobileStyle>
        <div
          style={{
            height: "10vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <div>2020년 1학기 창의학기제 프로젝트 - 부름</div>

          <div className="name-wrapper">
            <div
              className="name"
              onClick={() => {
                window.open("https://github.com/moaikang");
              }}
            >
              강근우
            </div>
            <div
              className="name"
              onClick={() => {
                window.open("https://github.com/KOREAparksh");
              }}
            >
              박승한
            </div>
            <div
              className="name"
              onClick={() => {
                window.open("https://www.behance.net/mineleba14");
              }}
            >
              강민지
            </div>
            <div
              className="name"
              onClick={() => {
                window.open("https://github.com/eunsolkang");
              }}
            >
              강은솔
            </div>
          </div>
        </div>
      </FooterMobileStyle>
    </>
  );
}

export default Footer;
